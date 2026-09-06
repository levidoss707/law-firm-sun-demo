const reveals=document.querySelectorAll(".reveal");
const observer=new IntersectionObserver((entries)=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}
}),{threshold:.12});
reveals.forEach(el=>observer.observe(el));