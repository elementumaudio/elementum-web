// Reproductor de preview de audio para las tarjetas de producto (samples.html)
// Un solo <audio> compartido: al reproducir uno se detiene el anterior.
(function(){
  const audio = new Audio();
  audio.preload = 'none';
  let activeCard = null;

  function resetCard(card){
    if(!card) return;
    const btn = card.querySelector('.preview-btn');
    const fill = card.querySelector('.preview-bar-fill');
    btn.classList.remove('playing');
    btn.querySelector('.icon-play').hidden = false;
    btn.querySelector('.icon-pause').hidden = true;
    if(fill) fill.style.width = '0%';
  }

  function playCard(card){
    const src = card.getAttribute('data-preview');
    if(!src) return;
    const btn = card.querySelector('.preview-btn');

    if(activeCard === card && !audio.paused){
      audio.pause();
      btn.classList.remove('playing');
      btn.querySelector('.icon-play').hidden = false;
      btn.querySelector('.icon-pause').hidden = true;
      return;
    }

    if(activeCard && activeCard !== card) resetCard(activeCard);

    if(activeCard !== card){
      audio.src = src;
      activeCard = card;
    }
    audio.play().catch(()=>{ /* autoplay/user-gesture edge cases: ignore silently */ });
    btn.classList.add('playing');
    btn.querySelector('.icon-play').hidden = true;
    btn.querySelector('.icon-pause').hidden = false;
  }

  document.querySelectorAll('.product-card[data-preview]').forEach(card=>{
    const btn = card.querySelector('.preview-btn');
    if(!btn) return;
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      e.stopPropagation();
      playCard(card);
    });
  });

  audio.addEventListener('timeupdate', ()=>{
    if(!activeCard || !audio.duration) return;
    const fill = activeCard.querySelector('.preview-bar-fill');
    if(fill) fill.style.width = ((audio.currentTime / audio.duration) * 100) + '%';
  });

  audio.addEventListener('ended', ()=>{
    resetCard(activeCard);
    activeCard = null;
  });
})();
