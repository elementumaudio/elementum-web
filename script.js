  // Sticky nav background on scroll
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('solid', window.scrollY > 40);
  }, { passive:true });

  // Filter catalog
  const filterBtns = document.querySelectorAll('.filter-btn');
  const tiles = document.querySelectorAll('.tile');
  filterBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filterBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      tiles.forEach(t=>{
        t.classList.toggle('hidden', f!=='all' && t.dataset.cat!==f);
      });
    });
  });

  // Animated hero waveform (gentle drifting sine path)
  const wavePath = document.getElementById('wavePath');
  let t0 = 0;
  function animateHeroWave(ts){
    t0 += 0.006;
    const amp = 60;
    let d = "M0,350 ";
    for(let x=0; x<=1400; x+=40){
      const y = 350 + Math.sin(x*0.008 + t0)*amp*Math.sin(t0*0.5+1);
      d += `L${x},${y.toFixed(1)} `;
    }
    wavePath.setAttribute('d', d);
    requestAnimationFrame(animateHeroWave);
  }
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    requestAnimationFrame(animateHeroWave);
  }

  // Oscilloscope
  const canvas = document.getElementById('scope');
  const ctx = canvas.getContext('2d');
  let waveType = 'sine';
  let freq = 4, amp = 5, noise = 1;
  let phase = 0;

  function resizeCanvas(){
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
  }
  window.addEventListener('resize', resizeCanvas);

  function waveValue(x, type){
    const period = (2*Math.PI) / (freq*0.6+0.5);
    const p = (x*0.02 + phase) % period / period; // 0..1
    switch(type){
      case 'sine': return Math.sin(p*2*Math.PI);
      case 'square': return Math.sin(p*2*Math.PI) >= 0 ? 1 : -1;
      case 'saw': return (p*2-1);
      case 'triangle': return 1 - 4*Math.abs(Math.round(p - 0.25) - (p - 0.25));
      default: return 0;
    }
  }

  function drawScope(){
    const w = canvas.clientWidth, h = canvas.clientHeight;
    ctx.clearRect(0,0,w,h);

    // grid
    ctx.strokeStyle = 'rgba(237,232,218,0.06)';
    ctx.lineWidth = 1;
    for(let gx=0; gx<w; gx+=w/12){ ctx.beginPath(); ctx.moveTo(gx,0); ctx.lineTo(gx,h); ctx.stroke(); }
    for(let gy=0; gy<h; gy+=h/6){ ctx.beginPath(); ctx.moveTo(0,gy); ctx.lineTo(w,gy); ctx.stroke(); }

    // waveform
    ctx.beginPath();
    ctx.strokeStyle = '#5FA893';
    ctx.lineWidth = 2;
    ctx.shadowColor = '#5FA893';
    ctx.shadowBlur = 6;
    const midY = h/2;
    const ampPx = (amp/10) * (h*0.4);
    for(let x=0; x<=w; x++){
      let v = waveValue(x, waveType);
      if(noise>0){ v += (Math.random()-0.5) * (noise/10) * 0.4; }
      const y = midY - v*ampPx;
      if(x===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;

    phase += 0.15 + freq*0.02;
    requestAnimationFrame(drawScope);
  }

  resizeCanvas();
  requestAnimationFrame(drawScope);

  // wave select buttons
  const waveBtns = document.querySelectorAll('.wave-btn');
  const waveLabel = document.getElementById('waveLabel');
  waveBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      waveBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      waveType = btn.dataset.wave;
      waveLabel.textContent = waveType.toUpperCase();
    });
  });

  // knobs (drag vertically to change value)
  function setupKnob(el, {min=0,max=10,initial=5,onChange}){
    let value = initial;
    let dragging = false;
    let startY = 0, startVal = value;

    function applyRotation(){
      const pct = (value-min)/(max-min);
      const deg = -130 + pct*260;
      el.style.setProperty('--rot', deg+'deg');
      el.setAttribute('aria-valuenow', value.toFixed(1));
      onChange(value);
    }
    applyRotation();

    el.addEventListener('pointerdown', e=>{
      dragging = true; startY = e.clientY; startVal = value;
      el.setPointerCapture(e.pointerId);
      el.style.cursor='grabbing';
    });
    window.addEventListener('pointermove', e=>{
      if(!dragging) return;
      const dy = startY - e.clientY;
      value = Math.min(max, Math.max(min, startVal + dy*0.06));
      applyRotation();
    });
    window.addEventListener('pointerup', e=>{
      if(!dragging) return;
      dragging=false; el.style.cursor='grab';
    });
    el.addEventListener('keydown', e=>{
      if(e.key==='ArrowUp' || e.key==='ArrowRight'){ value=Math.min(max,value+0.5); applyRotation(); }
      if(e.key==='ArrowDown' || e.key==='ArrowLeft'){ value=Math.max(min,value-0.5); applyRotation(); }
    });
  }

  setupKnob(document.getElementById('knobFreq'), {min:1,max:10,initial:4, onChange:v=>freq=v});
  setupKnob(document.getElementById('knobAmp'),  {min:1,max:10,initial:5, onChange:v=>amp=v});
  setupKnob(document.getElementById('knobNoise'),{min:0,max:10,initial:1, onChange:v=>noise=v});

  // newsletter form (UI only)
  const form = document.getElementById('signupForm');
  const note = document.getElementById('formNote');
  form.addEventListener('submit', e=>{
    e.preventDefault();
    note.textContent = '¡Gracias! Revisa tu correo para confirmar la suscripción.';
    note.style.color = 'var(--verdigris)';
    form.reset();
  });
