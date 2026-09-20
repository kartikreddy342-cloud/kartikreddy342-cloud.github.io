const nav=document.getElementById('nav');
document.getElementById('menuBtn').addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const themeBtn=document.getElementById('themeBtn');
themeBtn.addEventListener('click',()=>{document.body.classList.toggle('light');themeBtn.textContent=document.body.classList.contains('light')?'☾':'☼';});
document.getElementById('year').textContent=new Date().getFullYear();

const words=['Aspiring Data Analyst','B.Tech CSE Student','Web Developer','Data Enthusiast'];
let wi=0,ci=0,deleting=false;
const typed=document.getElementById('typed');
function type(){
  const word=words[wi];
  typed.textContent=word.slice(0,ci);
  if(!deleting && ci<word.length){ci++;setTimeout(type,75);}
  else if(!deleting){deleting=true;setTimeout(type,1300);}
  else if(ci>0){ci--;setTimeout(type,38);}
  else{deleting=false;wi=(wi+1)%words.length;setTimeout(type,300);}
}
type();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target);}
}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
