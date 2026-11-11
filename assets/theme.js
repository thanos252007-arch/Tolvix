/* Shared Tolvix theme persistence. Loaded before the stylesheet to prevent dark-mode flashes. */
(()=>{
  const root=document.documentElement;
  const key='tolvix-theme';
  const readTheme=()=>{try{return localStorage.getItem(key)==='light'?'light':'dark'}catch{return 'dark'}};
  const applyTheme=theme=>{root.dataset.theme=theme==='light'?'light':'dark'};
  applyTheme(readTheme());
  const addToggle=()=>{
    const nav=document.querySelector('header nav');
    if(!nav||nav.querySelector('.theme-toggle'))return;
    const button=document.createElement('button');
    button.type='button';button.className='theme-toggle';
    const sync=()=>{const light=root.dataset.theme==='light';button.textContent=light?'Dark mode':'Light mode';button.setAttribute('aria-pressed',String(light))};
    sync();nav.append(button);
    button.addEventListener('click',()=>{const next=root.dataset.theme==='light'?'dark':'light';applyTheme(next);try{localStorage.setItem(key,next)}catch{}sync()});
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addToggle,{once:true});else addToggle();
})();
