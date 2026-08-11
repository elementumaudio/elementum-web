// Reproductor de preview con onda real (Web Audio API) para las tarjetas de producto.
// Un solo <audio> + un dock fijo abajo. Al hacer click en el play de una tarjeta,
// se decodifica el mp3, se dibuja su forma de onda real, y se reproduce ahí.
(function(){
  const dock = document.getElementById('previewDock');
  if(!dock) return; // esta página no tiene reproductor

  const audio = new Audio();
  audio.preload = 'none';

  const dockThumb = document.getElementById('dockThumb');
  const dockName = document.getElementById('dockName');
  const dockTime = document.getElementById('dockTime');
  const dockTag = document.getElementById('dockTag');
  const dockPlayPause = document.getElementById('dockPlayPause');
  const dockClose = document.getElementById('dockClose');
  const canvas = document.getElementById('dockWave');
  const ctx = canvas.getContext('2d');

  let activeCard = null;
  let peaks = null; // picos de la onda ya decodificada, cacheados por URL
  const peaksCache = new Map();
  let audioCtx = null;

  function fmtTime(sec){
    if(!isFinite(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  function resizeCanvas(){
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, rect.width * dpr);
    canvas.height = Math.max(1, rect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawWave(progress){
    const w = canvas.clientWidth, h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);
    if(!peaks || !peaks.length) return;

    const grad = ctx.createLinearGradient(0, 0, w, 0);
    grad.addColorStop(0, '#3E8FE0');
    grad.addColorStop(0.5, '#5FA893');
    grad.addColorStop(1, '#EDE8DA');

    const barW = w / peaks.length;
    const gap = Math.max(1, barW * 0.3);
    const playedBars = Math.floor(peaks.length * progress);

    for(let i = 0; i < peaks.length; i++){
      const barH = Math.max(2, peaks[i] * h);
      const x = i * barW;
      const y = (h - barH) / 2;
      ctx.fillStyle = i < playedBars ? grad : 'rgba(140,137,122,0.35)';
      ctx.fillRect(x, y, barW - gap, barH);
    }
  }

  async function getPeaks(url){
    if(peaksCache.has(url)) return peaksCache.get(url);
    if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const res = await fetch(url);
    const arrayBuffer = await res.arrayBuffer();
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
    const raw = audioBuffer.getChannelData(0);

    const BARS = 120;
    const blockSize = Math.floor(raw.length / BARS);
    const result = [];
    let max = 0;
    for(let i = 0; i < BARS; i++){
      let sum = 0;
      const start = i * blockSize;
      for(let j = 0; j < blockSize; j++) sum += Math.abs(raw[start + j] || 0);
      const val = sum / blockSize;
      result.push(val);
      if(val > max) max = val;
    }
    const normalized = max > 0 ? result.map(v => v / max) : result;
    peaksCache.set(url, normalized);
    return normalized;
  }

  function resetCardBtn(card){
    if(!card) return;
    card.querySelector('.preview-btn')?.classList.remove('playing');
  }

  async function openTrack(card){
    const src = card.getAttribute('data-preview');
    if(!src) return;

    if(activeCard && activeCard !== card) resetCardBtn(activeCard);
    activeCard = card;
    card.querySelector('.preview-btn').classList.add('playing');

    dock.hidden = false;
    dockThumb.src = card.querySelector('img').src;
    dockName.textContent = card.querySelector('.product-card-name').textContent;
    dockTag.textContent = card.querySelector('.product-card-tag')?.textContent || 'Free';
    dockTime.textContent = '0:00';
    peaks = null;
    resizeCanvas();
    drawWave(0);

    if(audio.src !== new URL(src, location.href).href){
      audio.src = src;
    }
    audio.play().catch(()=>{});
    setPlayIcon(true);

    try{
      peaks = await getPeaks(src);
      resizeCanvas();
      drawWave(audio.duration ? audio.currentTime / audio.duration : 0);
    }catch(err){
      // si falla la decodificación (ej. CORS en file://), seguimos sin onda visual
      console.warn('No se pudo generar la forma de onda:', err);
    }
  }

  function setPlayIcon(playing){
    dockPlayPause.querySelector('.icon-play').hidden = playing;
    dockPlayPause.querySelector('.icon-pause').hidden = !playing;
  }

  function togglePlayPause(){
    if(!activeCard) return;
    if(audio.paused){ audio.play().catch(()=>{}); setPlayIcon(true); }
    else{ audio.pause(); setPlayIcon(false); }
  }

  function closeDock(){
    audio.pause();
    audio.currentTime = 0;
    dock.hidden = true;
    resetCardBtn(activeCard);
    activeCard = null;
    peaks = null;
  }

  document.querySelectorAll('.product-card[data-preview]').forEach(card=>{
    const btn = card.querySelector('.preview-btn');
    if(!btn) return;
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      e.stopPropagation();
      if(activeCard === card){ togglePlayPause(); return; }
      openTrack(card);
    });
  });

  dockPlayPause.addEventListener('click', togglePlayPause);
  dockClose.addEventListener('click', closeDock);

  canvas.addEventListener('click', (e)=>{
    if(!audio.duration) return;
    const rect = canvas.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * audio.duration;
  });

  audio.addEventListener('timeupdate', ()=>{
    dockTime.textContent = fmtTime(audio.currentTime);
    if(audio.duration) drawWave(audio.currentTime / audio.duration);
  });

  audio.addEventListener('ended', ()=>{
    setPlayIcon(false);
    resetCardBtn(activeCard);
    drawWave(0);
  });

  window.addEventListener('resize', ()=>{
    if(!dock.hidden){
      resizeCanvas();
      drawWave(audio.duration ? audio.currentTime / audio.duration : 0);
    }
  });
})();
