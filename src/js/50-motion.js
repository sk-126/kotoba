/* ---------- Motion layer: enso, gauge, sakura canvas, count-up, ring draw, haptics ---------- */
const RM=()=>window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function haptic(p){try{if(navigator.vibrate&&!RM())navigator.vibrate(p)}catch(e){}}
/* enso: a brush circle that draws itself, with a glyph inside. Used on completion screens. */
function ensoSVG(glyph,sub){return `<div class="enso"><svg viewBox="0 0 120 120" aria-hidden="true"><defs><linearGradient id="eg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--pri)"/><stop offset="1" stop-color="var(--hot)"/></linearGradient></defs><path class="ring" d="M60 12C86 10 108 30 108 60C108 88 86 108 58 108C32 108 12 88 12 62C12 40 26 24 44 18" fill="none" stroke="url(#eg)" stroke-width="9" stroke-linecap="round"/></svg><span class="jp">${glyph}</span>${sub?`<small>${sub}</small>`:''}</div>`}
/* daily-goal gauge for the home hero */
function gaugeSVG(frac,xp,goal){const r=44,c=2*Math.PI*r;return `<div class="gauge"><svg viewBox="0 0 110 110" aria-hidden="true"><circle cx="55" cy="55" r="${r}" fill="none" stroke="color-mix(in srgb,var(--ink) 12%,transparent)" stroke-width="8"/><circle cx="55" cy="55" r="${r}" fill="none" stroke="url(#gg)" stroke-width="8" stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${(c*(1-frac)).toFixed(1)}" transform="rotate(-90 55 55)"/><defs><linearGradient id="gg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--pri)"/><stop offset="1" stop-color="var(--hot)"/></linearGradient></defs></svg><div class="gc"><b class="jp">今日</b><span>${xp}/${goal} XP</span></div></div>`}
/* sakura: petals drift down, lean away from the pointer, and burst when tapped */
let SAK=null;
function petalDraw(x,p){x.save();x.translate(p.x,p.y);x.rotate(p.r);x.scale(p.s,p.s*(.55+.45*Math.abs(Math.sin(p.f))));x.globalAlpha=p.a;x.fillStyle=p.c;x.beginPath();x.moveTo(0,-8);x.bezierCurveTo(9,-9,10,5,0,9);x.bezierCurveTo(-10,5,-9,-9,0,-8);x.fill();x.restore()}
function sakuraInit(){
 const cv=$('#sak');if(!cv){SAK=null;return}
 const x=cv.getContext('2d'),cols=['#ffb7c9','#ff8fb0','#ffd1dc','#ffa6bf','#ffc2a8'];
 let W=0,H=0,dpr=Math.min(2,window.devicePixelRatio||1);
 const size=()=>{const r=cv.getBoundingClientRect();W=r.width;H=r.height;cv.width=W*dpr;cv.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0)};size();
 const mk=(top)=>({x:Math.random()*W,y:top?-10:Math.random()*H,r:Math.random()*6,s:.5+Math.random()*.7,a:.5+Math.random()*.4,c:one(cols),vy:.25+Math.random()*.55,vx:(Math.random()-.5)*.3,vr:(Math.random()-.5)*.03,f:Math.random()*6,sw:Math.random()*2});
 const ps=Array.from({length:RM()?8:16},()=>mk(false));let px=-999,py=-999,raf=0,tk=0;
 const st={cv,stop:false};SAK=st;
 cv.addEventListener('pointermove',e=>{const r=cv.getBoundingClientRect();px=e.clientX-r.left;py=e.clientY-r.top});
 cv.addEventListener('pointerleave',()=>{px=-999});
 cv.addEventListener('pointerdown',e=>{const r=cv.getBoundingClientRect(),bx=e.clientX-r.left,by=e.clientY-r.top;for(let i=0;i<10;i++){const p=mk(false);p.x=bx;p.y=by;const a=Math.random()*6.28,v=1.5+Math.random()*3;p.vx=Math.cos(a)*v;p.vy=Math.sin(a)*v-1.5;p.a=.9;ps.push(p)}if(ps.length>90)ps.splice(0,ps.length-90);haptic(8)});
 function frame(){
  if(st.stop||!document.body.contains(cv)||SAK!==st)return;
  if(!document.hidden){tk+=.02;x.clearRect(0,0,W,H);
   for(const p of ps){
    const dx=p.x-px,dy=p.y-py,d2=dx*dx+dy*dy;if(d2<5000){const f=(5000-d2)/5000;p.vx+=dx/Math.sqrt(d2+1)*f*.6;p.vy+=dy/Math.sqrt(d2+1)*f*.3}
    p.vx*=.985;p.vy+=(.4-p.vy)*.01;p.x+=p.vx+Math.sin(tk*2+p.sw)*.25;p.y+=p.vy;p.r+=p.vr+p.vx*.01;p.f+=.04;
    if(p.y>H+14||p.x<-20||p.x>W+20){Object.assign(p,mk(true))}
    petalDraw(x,p)}}
  if(RM()){return}
  raf=requestAnimationFrame(frame)}
 if(RM()){frame()}else raf=requestAnimationFrame(frame)}
function petalBurst(parent){
 const cv=document.createElement('canvas');cv.style.cssText='position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:5';parent.appendChild(cv);
 const r=parent.getBoundingClientRect(),dpr=1;cv.width=r.width;cv.height=r.height;const x=cv.getContext('2d'),cols=['#ffb7c9','#ff8fb0','#ffd1dc','#f4c25b','#ffa6bf'];
 const ps=Array.from({length:50},()=>({x:r.width/2,y:r.height*.4,r:Math.random()*6,s:.6+Math.random(),a:1,c:one(cols),vx:(Math.random()-.5)*9,vy:-Math.random()*9-2,vr:(Math.random()-.5)*.2,f:Math.random()*6}));
 let n=0;(function f(){x.clearRect(0,0,cv.width,cv.height);ps.forEach(p=>{p.vy+=.22;p.x+=p.vx;p.y+=p.vy;p.vx*=.99;p.r+=p.vr;p.f+=.1;p.a=Math.max(0,1-n/110);petalDraw(x,p)});if(++n<115&&document.body.contains(cv))requestAnimationFrame(f);else cv.remove()})()}
function countUp(root){
 if(RM())return;
 root.querySelectorAll('.stat3m b,.big').forEach(el=>{
  const n0=el.firstChild;if(!n0||n0.nodeType!==3)return;const m=/^(\d+)(%?)$/.exec(n0.nodeValue.trim());if(!m)return;
  const to=+m[1],suf=m[2];if(to<=0)return;const t0=performance.now(),d=900;
  const step=t=>{const k=Math.min(1,(t-t0)/d),e=1-Math.pow(1-k,3);n0.nodeValue=Math.round(to*e)+suf;if(k<1&&document.body.contains(el))requestAnimationFrame(step)};n0.nodeValue='0'+suf;requestAnimationFrame(step)})}
function ringDraw(root){
 root.querySelectorAll('.ringw circle:nth-child(2),.gauge circle:nth-child(2)').forEach(c=>{const to=c.getAttribute('stroke-dashoffset'),full=c.getAttribute('stroke-dasharray');c.style.strokeDashoffset=full;requestAnimationFrame(()=>requestAnimationFrame(()=>{c.style.strokeDashoffset=to}))});
 root.querySelectorAll('.lv i').forEach(i=>{const w=i.style.width;i.style.width='0%';requestAnimationFrame(()=>requestAnimationFrame(()=>{i.style.width=w}))})}
function afterRender(v){
 const m=$('#main');m.classList.remove('pg');void m.offsetWidth;m.classList.add('pg');
 SAK=null;if(v==='home')sakuraInit();
 countUp(m);ringDraw(m)}
/* ---------- course page graphics ---------- */
const UGM={'Greetings and Phrases':'挨','People and Time':'人','Numbers and Dates':'数','Counters and Calendar':'暦','Food, Home and Things':'食','Everyday Life':'活','Places and Nature':'場','Adjectives':'形','More Adjectives':'様','Verbs':'動','More Verbs':'為','Useful Words':'語','More Useful Words':'便','N5 Kanji':'漢','N5 Grammar':'文','N5 Reading':'読','N5 Listening':'聴','Hiragana':'あ','Hiragana Voiced':'が','Katakana':'ア','Katakana Voiced':'ガ','Greetings':'挨','People and Self':'私','Numbers':'数','Food and Drink':'食','Places and Travel':'旅','Verbs and Time':'動','Sentences':'文','Kanji Starter':'漢'};
['N4','N3','N2','N1'].forEach(n=>{UGM[n+' Kanji']='漢';UGM[n+' Grammar']='文';UGM[n+' Reading']='読';UGM[n+' Listening']='聴'});Object.assign(UGM,{'Home and Daily Life':'家','School and Work':'学','Travel and Places':'旅','Body and Feelings':'心','Adjectives and Adverbs':'形','Verbs and Adjectives':'語','Society and Economy':'社','Society and News':'報','Work and People':'働'});
const UG=u=>UGM[u.title]||'日';
function courseRing(frac){const r=46,c=2*Math.PI*r,p=Math.round(frac*100);return `<div class="gauge cring"><svg viewBox="0 0 110 110" aria-hidden="true"><circle cx="55" cy="55" r="${r}" fill="none" stroke="color-mix(in srgb,var(--ink) 12%,transparent)" stroke-width="8"/><circle cx="55" cy="55" r="${r}" fill="none" stroke="url(#gg)" stroke-width="8" stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${(c*(1-frac)).toFixed(1)}" transform="rotate(-90 55 55)"/><defs><linearGradient id="gg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--pri)"/><stop offset="1" stop-color="var(--hot)"/></linearGradient></defs></svg><div class="gc"><b class="jp" style="font-family:var(--f-ui);font-size:26px">${p}%</b><span>complete</span></div></div>`}
const SECT={n5:[['Language and reading',120,38],['Listening',60,19]],n4:[['Language and reading',120,38],['Listening',60,19]],n3:[['Language knowledge',60,19],['Reading',60,19],['Listening',60,19]],n2:[['Language knowledge',60,19],['Reading',60,19],['Listening',60,19]],n1:[['Language knowledge',60,19],['Reading',60,19],['Listening',60,19]]};
function examPanel(l){
 if(l.k==='f')return '';
 const pass=parseInt(l.pass),sec=SECT[l.k]||[];
 return `<div class="card xp"><h3>${l.n} exam at a glance</h3><div class="xtop"><div class="xbig"><b>${pass}</b><span>/ 180 to pass</span></div><div class="xscale" role="img" aria-label="Pass mark ${pass} of 180"><i style="width:${(pass/180*100).toFixed(1)}%"></i></div></div>
 <div class="xsec">${sec.map(([n,m,min])=>`<div class="xs"><span>${n}</span><div class="xb"><i style="width:${(min/m*100).toFixed(1)}%"></i></div><b>min ${min}<small> of ${m}</small></b></div>`).join('')}</div>
 <p class="mut">You need the total and every section minimum. Scope: ${esc(l.scope)}. The JLPT publishes no official word or grammar lists, so scope figures are community estimates. Confirm marks on jlpt.jp before you register.</p></div>`}
