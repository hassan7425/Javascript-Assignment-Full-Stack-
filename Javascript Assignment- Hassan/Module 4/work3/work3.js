'use strict';
document.addEventListener('DOMContentLoaded',()=>{
  const form=document.getElementById('tvForm');
  const box=document.getElementById('tvResult');
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    box.innerHTML='';
    const name=document.getElementById('tvInput').value.trim();
    if(!name){box.textContent='Please enter a show';return;}
    const url='https://api.tvmaze.com/search/shows?q='+encodeURIComponent(name);
    try{
      const res=await fetch(url);
      const shows=await res.json();
      if(!shows.length){box.textContent='No results found';return;}
      for(const i of shows){
        const s=i.show;
        const a=document.createElement('article');
        const h=document.createElement('h2');
        h.textContent=s.name;
        const link=document.createElement('a');
        link.href=s.url;
        link.target='_blank';
        link.textContent='Visit TVMaze';
        const img=document.createElement('img');
        img.src=s.image?.medium||'';
        img.alt=s.name;
        const info=document.createElement('div');
        info.innerHTML=s.summary||'No summary available';
        a.append(link);
        a.append(img);
        a.append(info);
        a.prepend(h);
        box.append(a);
      }
    }catch(err){
      box.textContent='Error loading content';
    }
  });
});