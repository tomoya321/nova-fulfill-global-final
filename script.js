document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.menu-toggle');
  const links=document.querySelector('.navlinks');
  if(menu&&links) menu.addEventListener('click',()=>links.classList.toggle('open'));
  document.querySelectorAll('[data-locale]').forEach(a=>a.addEventListener('click',()=>{
    try{localStorage.setItem('nova_locale',a.dataset.locale)}catch(e){}
  }));
  document.addEventListener('click',e=>{
    const lang=e.target.closest('.lang');
    document.querySelectorAll('.lang').forEach(x=>{if(x!==lang)x.classList.remove('open')});
    if(e.target.closest('.lang-btn')) e.target.closest('.lang').classList.toggle('open');
  });
});
