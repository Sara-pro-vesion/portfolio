// script.js
// Toggle theme + generate decorative snowflakes
(function(){
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');

  // init state: dark by default
  body.classList.add('dark');

  toggle.addEventListener('click', () => {
    const isLight = body.classList.toggle('light');
    // aria
    toggle.setAttribute('aria-pressed', String(isLight));
    // small style change for knob (uses CSS left property)
  });

  // generate small snowflake elements and float them slightly
  const flakesRoot = document.getElementById('flakes');

  function rand(min, max){ return Math.random()*(max-min)+min; }

  const COUNT = 8;
  for(let i=0;i<COUNT;i++){
    const f = document.createElement('div');
    f.className = 'flake';
    f.textContent = '❄';
    const size = Math.round(rand(8,16));
    const left = rand(4, 96);
    const top = rand(8, 88);
    f.style.position = 'fixed';
    f.style.left = left + 'vw';
    f.style.top = top + 'vh';
    f.style.fontSize = size + 'px';
    f.style.opacity = (rand(.25,.9)).toFixed(2);
    f.style.pointerEvents = 'none';
    f.style.transform = `rotate(${Math.round(rand(-50,50))}deg)`;
    f.style.transition = `transform ${rand(4,8)}s ease-in-out, top ${rand(6,14)}s linear`;
    flakesRoot.appendChild(f);

    // subtle vertical bob animation loop
    (function(el, startTop){
      setInterval(()=>{
        const delta = rand(-1.2,1.2);
        el.style.top = `calc(${startTop}vh + ${delta}px)`;
      }, rand(2200,4200));
    })(f, top);
  }

})();
//link the navbar to the elements
//add an img
//add correct info
//make a contact page
//make the bg animation
//make the projects cards
//add animations when clicking a page
