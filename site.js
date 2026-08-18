
document.querySelectorAll('[data-tilt]').forEach(card=>{
  card.addEventListener('pointermove',e=>{
    const r=card.getBoundingClientRect(), x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
    card.style.transform=`perspective(900px) rotateX(${(0.5-y)*5}deg) rotateY(${(x-0.5)*6}deg)`;
  });
  card.addEventListener('pointerleave',()=>card.style.transform='');
});
const items=[...document.querySelectorAll('.gitem')];
const lb=document.querySelector('.lightbox');
if(lb && items.length){
  const im=lb.querySelector('.lb-img'), cap=lb.querySelector('.lb-caption'); let i=0;
  const show=n=>{i=(n+items.length)%items.length;im.src=items[i].querySelector('img').src;cap.textContent=items[i].dataset.caption||items[i].querySelector('img').alt};
  const open=n=>{show(n);lb.classList.add('open');document.body.style.overflow='hidden'};
  const close=()=>{lb.classList.remove('open');document.body.style.overflow=''};
  items.forEach((el,n)=>el.addEventListener('click',()=>open(n)));
  lb.querySelector('.lb-prev').addEventListener('click',()=>show(i-1));
  lb.querySelector('.lb-next').addEventListener('click',()=>show(i+1));
  lb.querySelector('.lb-close').addEventListener('click',close);
  lb.addEventListener('click',e=>{if(e.target===lb)close()});
  document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1)});
}
const form=document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(form);
    const subject=encodeURIComponent(`Website inquiry — ${data.get('service')||'General'}`);
    const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\n${data.get('message')}`);
    window.location.href=`mailto:peterbonos@gmail.com?subject=${subject}&body=${body}`;
  });
}
