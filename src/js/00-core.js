/* ---------- helpers ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const pick=(a,n)=>shuffle(a).slice(0,n);
const one=a=>a[Math.random()*a.length|0];
const today=()=>Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/864e5);
const ICONS={
 vol:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>',
 check:'<polyline points="20 6 9 17 4 12"/>',
 x:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
 flame:'<path d="M12 2c.5 3.5 4.5 5 4.5 10a4.5 4.5 0 0 1-9 0c0-1.8.8-3 1.8-4 .2 1.8 1 2.6 2 2.8C11 8 11 5 12 2z"/>',
 zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
 user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
 refresh:'<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
 book:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
 grid:'<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
 lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
 home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
 chart:'<polyline points="3 17 9 11 13 15 21 6"/><polyline points="15 6 21 6 21 12"/>',
 pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
 cards:'<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>',
 alert:'<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
 star:'<polygon fill="currentColor" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'
};
const ico=n=>`<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;
let tt;function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),2200)}

/* ---------- state ---------- */
const LS='nihongo-path-v1';
let S={};try{S=JSON.parse(localStorage.getItem(LS))||{}}catch(e){S={}}
S=Object.assign({xp:0,streak:0,last:null,done:{},srs:{},hist:{},goal:30,answered:0,correct:0,theme:null,sound:true,custom:{},mocks:[],profile:{name:"",exam:"",mins:20,ob:false},mistakes:{},log:{}},S);
function save(){try{localStorage.setItem(LS,JSON.stringify(S))}catch(e){}}
const xpToday=()=>S.hist[today()]||0;
const streakNow=()=>(S.last===today()||S.last===today()-1)?S.streak:0;
function award(xp){const t=today();S.xp+=xp;S.hist[t]=(S.hist[t]||0)+xp;if(S.last!==t){S.streak=(S.last===t-1)?S.streak+1:1;S.last=t}}
const IV=[0,1,2,4,8,16,32];
function srsUp(id,ok){const r=S.srs[id]||{b:0,d:today()};r.b=ok?Math.min(6,r.b+1):0;r.d=today()+IV[r.b];S.srs[id]=r}
function applyTheme(){if(S.theme)document.documentElement.setAttribute('data-theme',S.theme);else document.documentElement.removeAttribute('data-theme')}

/* ---------- audio ---------- */
let jaVoice=null,VOICES=0,warned=false,sayErr=false;
function loadVoices(){try{const v=speechSynthesis.getVoices();VOICES=v.length;jaVoice=v.find(x=>/^ja([-_]|$)/i.test(x.lang))||v.find(x=>/japan|日本|kyoko|otoya|haruka|ichiro|nanami/i.test(x.name))||null}catch(e){}}
try{loadVoices();speechSynthesis.onvoiceschanged=loadVoices;setTimeout(loadVoices,600);setTimeout(loadVoices,2500)}catch(e){}
function ttsText(t){t=String(t);if(t.length===1){const c=t.charCodeAt(0);if(c>=0x3041&&c<=0x3096)return String.fromCharCode(c+0x60)}return t}
function say(t,r){
 if(!('speechSynthesis' in window)){toast('This browser cannot play speech. Try Chrome, Edge or Safari.');return}
 loadVoices();
 if(!jaVoice&&!warned){warned=true;toast('No Japanese voice found on this device. Open Progress, then Sound test.')}
 const sp1=ttsText(t);
 try{const ss=speechSynthesis;ss.cancel();setTimeout(()=>{try{ss.resume();const u=new SpeechSynthesisUtterance(sp1);u.lang='ja-JP';if(jaVoice)u.voice=jaVoice;u.rate=r||(String(t).length===1?.7:.85);u.volume=1;u.onerror=e=>{if(!sayErr&&e&&e.error&&e.error!=='canceled'&&e.error!=='interrupted'){sayErr=true;toast('Audio failed on this device. Open Progress, then Sound test.')}};ss.speak(u)}catch(e){}},80)}catch(e){}}
function sayDialog(lines,r){
 if(!('speechSynthesis' in window)){toast('This browser cannot play speech.');return}
 loadVoices();
 try{const ss=speechSynthesis;ss.cancel();setTimeout(()=>{try{ss.resume();lines.forEach(l=>{const u=new SpeechSynthesisUtterance(ttsText(l[1]));u.lang='ja-JP';if(jaVoice)u.voice=jaVoice;u.rate=r||.8;u.pitch=l[0]==='A'?1.12:.88;u.volume=1;ss.speak(u)})}catch(e){}},80)}catch(e){}}
let AC;function tone(f,d,t){try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();const o=AC.createOscillator(),g=AC.createGain(),n=AC.currentTime+(t||0);o.frequency.value=f;g.gain.setValueAtTime(.001,n);g.gain.exponentialRampToValueAtTime(.12,n+.01);g.gain.exponentialRampToValueAtTime(.001,n+d);o.connect(g);g.connect(AC.destination);o.start(n);o.stop(n+d+.02)}catch(e){}}
const sfx=ok=>{haptic(ok?10:[25,30,25]);if(!S.sound)return;if(ok){tone(660,.1);tone(880,.16,.09)}else tone(220,.24)};

