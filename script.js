  // Safe wrapper: some preview/embedded environments don't implement matchMedia.
  // An unguarded call throws and silently kills the rest of this script.
  function prefersReducedMotion(){
    try{
      return typeof window.matchMedia === 'function'
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }catch(e){
      return false;
    }
  }

  // Sticky nav background on scroll
  const header = document.getElementById('siteHeader');
  if(header){
    window.addEventListener('scroll', () => {
      header.classList.toggle('solid', window.scrollY > 40);
    }, { passive:true });
  }

  // Community dropdown (opens on click, closes on second click or outside click)
  const communityBtn = document.getElementById('communityBtn');
  const communityMenu = document.getElementById('communityMenu');
  if(communityBtn && communityMenu){
    communityBtn.addEventListener('click', (e)=>{
      e.stopPropagation();
      const open = communityMenu.classList.toggle('open');
      communityBtn.setAttribute('aria-expanded', open);
      document.getElementById('langMenu')?.classList.remove('open');
    });
  }

  // Mobile nav menu (hamburger)
  const navToggle = document.getElementById('navToggle');
  const navLinksMobile = document.getElementById('navLinksMobile');
  function closeMobileNav(){
    navLinksMobile?.classList.remove('open');
    navToggle?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded','false');
  }
  if(navToggle && navLinksMobile){
    navToggle.addEventListener('click', (e)=>{
      e.stopPropagation();
      const open = navLinksMobile.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', open);
      // Closing the community/lang dropdowns so only one panel is open at a time
      communityMenu?.classList.remove('open');
      document.getElementById('langMenu')?.classList.remove('open');
    });
    // Close the mobile menu after tapping a link
    navLinksMobile.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', closeMobileNav);
    });
    // Keep the menu closed if the viewport grows back to desktop size
    window.addEventListener('resize', ()=>{
      if(window.innerWidth > 760) closeMobileNav();
    });
  }

  document.addEventListener('click', (e)=>{
    communityMenu?.classList.remove('open');
    communityBtn?.setAttribute('aria-expanded','false');
    document.getElementById('langMenu')?.classList.remove('open');
    document.getElementById('langBtn')?.setAttribute('aria-expanded','false');
    if(navLinksMobile && !navLinksMobile.contains(e.target) && e.target!==navToggle){
      closeMobileNav();
    }
  });

  // Filter catalog (samples.html only)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const tiles = document.querySelectorAll('.tile');
  if(filterBtns.length && tiles.length){
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
  }

  // Animated hero waveform background path (index.html only)
  const wavePath = document.getElementById('wavePath');
  if(wavePath && !prefersReducedMotion()){
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
    requestAnimationFrame(animateHeroWave);
  }

  // ---------- HERO SLIDER (index.html only) ----------
  const heroSlider = document.getElementById('heroSlider');
  if(heroSlider){
    const slides = Array.from(heroSlider.querySelectorAll('.hero-slide'));
    const dots = Array.from(document.querySelectorAll('#heroDots .hero-dot'));
    let current = 0;
    const SLIDE_DURATION = 5500;
    let timer = null;

    function goToSlide(i){
      slides[current].classList.remove('active');
      dots[current]?.classList.remove('active');
      current = (i + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current]?.classList.add('active');
    }
    function nextSlide(){ goToSlide(current + 1); }

    function startAutoplay(){
      clearInterval(timer);
      if(prefersReducedMotion()) return;
      timer = setInterval(nextSlide, SLIDE_DURATION);
    }

    dots.forEach(dot=>{
      dot.addEventListener('click', ()=>{
        goToSlide(parseInt(dot.dataset.goto, 10));
        startAutoplay();
      });
    });

    startAutoplay();
  }

  // newsletter form (any page with a signup form)
  const form = document.getElementById('signupForm');
  const note = document.getElementById('formNote');
  if(form && note){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const dict = (typeof ELEMENTUM_I18N !== 'undefined' && ELEMENTUM_I18N[document.documentElement.getAttribute('lang')]) || null;
      note.textContent = (dict && dict.acerca && dict.acerca.success) || '¡Gracias! Revisa tu correo para confirmar la suscripción.';
      note.style.color = 'var(--verdigris)';
      form.reset();
    });
  }
