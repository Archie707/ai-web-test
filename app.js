'use strict';
const $ = selector => document.querySelector(selector);
const slides = [
 {label:'01 / Make room for possibility',title:'Big ambitions.<br>Smaller <em>steps.</em>',description:'From tricky topics to your next big goal. Explore local and online grinds across Ireland, and find a little direction for the road ahead.',cta:'Explore subjects',href:'#subjects',art:'Your potential.<br>In progress.'},
 {label:'02 / Find your focus',title:'Less pressure.<br>More <em>clarity.</em>',description:'A clearer starting point makes a big difference. Explore school and college subjects, and take your next step with confidence.',cta:'Find your focus',href:'#subjects',art:'A clear plan.<br>A fresh start.'},
 {label:'03 / Keep your curiosity',title:'New skills.<br>New <em>chapters.</em>',description:'Your next chapter could start with a line of code, a new language or your first chord. Make room for something you have always wanted to learn.',cta:'Explore new skills',href:'#subjects',art:'Stay curious.<br>Keep growing.'}
];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let currentSlide=0, manuallyPaused=reducedMotion.matches, pointerInside=false, focusInside=false, timer;
const hero=$('.hero');
function updatePause(){ $('#pause').textContent=manuallyPaused?'▶':'Ⅱ'; $('#pause').setAttribute('aria-label',manuallyPaused?'Start automatic banners':'Pause automatic banners'); $('#pause').setAttribute('aria-pressed',String(manuallyPaused)); }
function schedule(){ clearTimeout(timer); if(!manuallyPaused&&!pointerInside&&!focusInside&&!document.hidden) timer=setTimeout(()=>showSlide(currentSlide+1),6500); }
function showSlide(index,announce=false){
 currentSlide=(index+slides.length)%slides.length; const slide=slides[currentSlide];
 $('#slide-label').textContent=slide.label; $('#hero-title').innerHTML=slide.title; $('#hero-description').textContent=slide.description; $('#hero-link').innerHTML=slide.cta+' <span aria-hidden="true">↗</span>'; $('#hero-link').href=slide.href; $('#art-title').innerHTML=slide.art; $('#hero-art').dataset.scene=String(currentSlide);
 document.querySelectorAll('.slide-tab').forEach((button,i)=>{button.classList.toggle('active',i===currentSlide);button.setAttribute('aria-pressed',String(i===currentSlide));});
 if(announce) $('#slide-status').textContent='Banner '+(currentSlide+1)+' of 3: '+slide.label.slice(5);
 schedule();
}
 document.querySelectorAll('.slide-tab').forEach(button=>button.addEventListener('click',()=>showSlide(Number(button.dataset.slide),true)));
 $('#previous').addEventListener('click',()=>showSlide(currentSlide-1,true)); $('#next').addEventListener('click',()=>showSlide(currentSlide+1,true));
 $('#pause').addEventListener('click',()=>{manuallyPaused=!manuallyPaused;updatePause();schedule();});
 hero.addEventListener('mouseenter',()=>{pointerInside=true;schedule();});hero.addEventListener('mouseleave',()=>{pointerInside=false;schedule();});
 hero.addEventListener('focusin',()=>{focusInside=true;schedule();});hero.addEventListener('focusout',event=>{if(!hero.contains(event.relatedTarget)){focusInside=false;schedule();}});
 document.addEventListener('visibilitychange',schedule);reducedMotion.addEventListener('change',event=>{if(event.matches){manuallyPaused=true;updatePause();schedule();}});updatePause();schedule();
 const menu=$('.menu-toggle');function closeMenu(){menu.setAttribute('aria-expanded','false');$('#navigation').classList.remove('is-open');}
 menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));$('#navigation').classList.toggle('is-open',open);});
 $('#navigation').addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
 const cards=[...document.querySelectorAll('.subject-card')];let category='all';
 function filterSubjects(){const query=$('#subject-search').value.trim().toLowerCase();let count=0;cards.forEach(card=>{const visible=(category==='all'||card.dataset.category.split(' ').includes(category))&&(card.dataset.subject+' '+card.textContent).toLowerCase().includes(query);card.hidden=!visible;if(visible)count++;});$('#result-status').textContent=count?count+' subject areas to explore':'No subjects found. Try another search or category.';}
 function setCategory(value){category=value;document.querySelectorAll('.filter').forEach(button=>{const active=button.dataset.category===value;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});filterSubjects();}
 document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>setCategory(button.dataset.category)));$('#subject-search').addEventListener('input',filterSubjects);filterSubjects();
 cards.forEach(card=>card.addEventListener('click',()=>{$('#request-subject').value=card.dataset.subject;}));
 $('#hero-link').addEventListener('click',()=>{if(currentSlide===2){$('#subject-search').value='';setCategory('skills');}});
 const currency=new Intl.NumberFormat('en-IE',{style:'currency',currency:'EUR',maximumFractionDigits:0});
 function earnings(){const hours=Number($('#hours').value),rate=Number($('#rate').value);$('#hours-value').value=String(hours);$('#rate-value').value=currency.format(rate);$('#monthly').value=currency.format(Math.round(hours*rate*4.33));}
 $('#hours').addEventListener('input',earnings);$('#rate').addEventListener('input',earnings);earnings();
 const form=$('#request-form');form.querySelector('button[type="submit"]').disabled=false;
 form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);$('#form-status').textContent='Preview ready: '+String(data.get('subject'))+' · '+String(data.get('level'))+' · '+String(data.get('mode'))+'. This is a demo. No request was sent and no details were saved.';});
 $('#year').textContent=String(new Date().getFullYear());