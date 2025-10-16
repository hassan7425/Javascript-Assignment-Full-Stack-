'use strict';
document.addEventListener('DOMContentLoaded',()=>{
  const f=document.getElementById('lookup');
  f.addEventListener('submit',async ev=>{
    ev.preventDefault();
    const t=document.getElementById('series').value.trim();
    if(!t){console.log('Enter a TV show');return;}
    const link='https://api.tvmaze.com/search/shows?q='+encodeURIComponent(t);
    try{
      const r=await fetch(link);
      const d=await r.json();
      console.log(d);
    }catch(e){
      console.error('Failed',e);
    }
  });
});