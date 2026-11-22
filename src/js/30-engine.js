/* ---------- exercise generators ---------- */
const ans=it=>it.type==='kana'?it.rom:it.en;
const norm=s=>String(s).toLowerCase().replace(/[\s'’\-]/g,'').replace(/ou|oo/g,'o').replace(/uu/g,'u').replace(/si/g,'shi').replace(/ti/g,'chi').replace(/tu/g,'tsu').replace(/hu/g,'fu').replace(/zi/g,'ji');
const poolFor=it=>{const a=ALLL.filter(x=>x.type===it.type&&(it.type!=='kana'||x.script===it.script)&&!!x.lvl===!!it.lvl);if(!it.lvl)return a;const b=a.filter(x=>x.lvl===it.lvl);return b.length>=12?b:a};
const sp=it=>it.kana||it.jp;
const fsz=p=>Math.min(88,Math.max(34,Math.floor(300/Math.max(1,String(p).length))));
function others(it,key,n){const seen=new Set([key(it)]),out=[];for(const p of shuffle(poolFor(it))){const k=key(p);if(!seen.has(k)){seen.add(k);out.push(p);if(out.length===n)break}}return out}
const canListen=()=>!!jaVoice;
const info=it=>it.type==='kana'?it.jp+'  ·  '+it.rom:it.lvl?it.jp+(it.kana&&it.kana!==it.jp?' ('+it.kana+')':'')+'  ·  '+it.en+(it.more?'  ·  '+it.more:''):it.jp+'  ·  '+it.rom+'  ·  '+it.en;
function mcJ2E(it){const o=others(it,ans,3);return{kind:'mc',label:it.type==='kana'?'Select the sound':it.type==='kanji'?'What does this kanji mean?':'What does this mean?',prompt:it.jp,pj:true,speak:it.type==='kanji'?null:sp(it),opts:shuffle([it,...o]).map(ans),answer:ans(it),ids:[it.id],info:info(it)}}
function mcE2J(it){const o=others(it,x=>x.jp,3);return{kind:'mc',label:it.type==='kana'?'Select the character':'Select the Japanese',prompt:ans(it),pj:false,speak:null,opts:shuffle([it,...o]).map(x=>x.jp),ojp:true,answer:it.jp,ids:[it.id],info:info(it)}}
function lisEx(it){if(it.type==='kanji'||!canListen())return mcE2J(it);const e=mcE2J(it);e.listen=true;e.speak=sp(it);e.label='Tap what you hear';return e}
function typeEx(it){if(it.type==='kanji')return mcJ2E(it);return{kind:'type',label:'Type it in romaji',prompt:it.jp,speak:sp(it),answers:it.rom.split('/').map(x=>x.trim()),ids:[it.id],info:info(it)}}
function matchEx(items){const its=pick(items,5);return{kind:'match',label:'Tap the matching pairs',ids:its.map(i=>i.id),L:shuffle(its.map(i=>({id:i.id,t:i.jp}))),R:shuffle(its.map(i=>({id:i.id,t:ans(i)}))),done:[],selL:null,miss:0,flash:null}}
function buildEx(s){const bank=shuffle([...s.tokens,...pick(EXTRA.filter(t=>!s.tokens.includes(t)),2)]).map(t=>({t}));return{kind:'build',label:'Translate this sentence',en:s.en,tokens:s.tokens,bank,picked:[],ids:[],info:s.en,speak:s.tokens.join('')}}
function mcSent(s){const o=pick(ALLSENT.filter(x=>x.en!==s.en),3).map(x=>x.en);return{kind:'mc',label:'What does this say?',prompt:s.tokens.join(''),pj:true,mid:true,speak:s.tokens.join(''),opts:shuffle([s.en,...o]),answer:s.en,ids:[],info:s.en}}
const gen=(it,k)=>k==='j2e'?mcJ2E(it):k==='e2j'?mcE2J(it):k==='listen'?lisEx(it):typeEx(it);
function readEx(it){const pool=ALLL.filter(x=>x.lvl===it.lvl&&x.type==='vocab'&&x.kana&&x.kana!==x.jp&&x.kana!==it.kana);const o=pick(pool,3).map(x=>x.kana);return{kind:'mc',label:'How is this read?',prompt:it.jp,pj:true,speak:null,opts:shuffle([it.kana,...o]),answer:it.kana,ojp:true,ids:[it.id],info:info(it)}}
function orthEx(it){const pool=ALLL.filter(x=>x.lvl===it.lvl&&x.type==='vocab'&&x.kana&&x.kana!==x.jp&&x.jp!==it.jp);const o=pick(pool,3).map(x=>x.jp);return{kind:'mc',label:'Choose the correct writing',prompt:it.kana,pj:true,speak:null,opts:shuffle([it.jp,...o]),answer:it.jp,ojp:true,ids:[it.id],info:info(it)}}
const gramEx=q=>({kind:'mc',label:'Choose the correct word',prompt:q.s,pj:true,small:true,speak:null,opts:shuffle(q.o),answer:q.o[q.a],ojp:true,ids:[],info:q.w});
const readQEx=(r,q)=>({kind:'mc',label:'Read and answer',passage:r.jp,prompt:q[0],pj:false,speak:null,opts:shuffle(q[1]),answer:q[1][q[2]],ids:[],info:'Translation: '+r.en});
const dlgEx=d=>({kind:'mc',label:'Listen and answer',dlg:d.lines,prompt:d.q,pj:false,speak:null,opts:shuffle(d.o.slice()),answer:d.o[d.a],ids:[],info:d.lines.map(l=>l[1]).join(' ')+'  |  '+d.en});
function planN5(L){
 if(L.listen)return shuffle(L.listen.map(dlgEx));
 if(L.gram)return L.gram.map(gramEx);
 if(L.read)return L.read.qs.map(q=>readQEx(L.read,q));
 const it=L.items,ex=[];
 it.forEach((x,i)=>{
  if(x.type==='kanji'){ex.push(i%2?mcE2J(x):mcJ2E(x));return}
  const h=x.kana&&x.kana!==x.jp,k=i%3;
  ex.push(k===0?mcJ2E(x):k===1?(h?readEx(x):mcE2J(x)):lisEx(x))});
 const out=shuffle(ex);
 if(it.length>=5)out.push(matchEx(it));
 shuffle(it).slice(0,2).forEach(x=>out.push(typeEx(x)));
 return out}
const MOCKM={n5:[60,40],n4:[70,45],n3:[80,50],n2:[90,55],n1:[100,60]};
const curLv=()=>LV[JL.lv]?JL.lv:tgtLv();
function mockCounts(k,full){const c=full?{r:10,o:8,m:9,k:3,g:22,b:8,p:14,w:6,d:6}:{r:7,o:5,m:5,k:3,g:15,b:5,p:8,w:4,d:4};if(k!=='n5'){c.g+=c.b;c.b=0}return c}
function buildMock(k,full){
 const lv=LV[k].lv,V=ALLL.filter(x=>x.lvl===lv&&x.type==='vocab'),KJ=ALLL.filter(x=>x.lvl===lv&&x.type==='kanji'),wk=V.filter(x=>x.kana&&x.kana!==x.jp),q=[];
 const C=mockCounts(k,full),tag=(e,s)=>{e.sec=s;if(!e.listen)e.speak=null;return e};
 pick(wk,C.r).forEach(x=>q.push(tag(readEx(x),'Vocabulary')));
 pick(wk,C.o).forEach(x=>q.push(tag(orthEx(x),'Vocabulary')));
 pick(V,C.m).forEach(x=>q.push(tag(mcJ2E(x),'Vocabulary')));
 pick(KJ,C.k).forEach(x=>q.push(tag(mcJ2E(x),'Vocabulary')));
 pick(LV[k].G,C.g).forEach(x=>q.push(tag(gramEx(x),'Grammar')));
 if(C.b)pick(ALLSENT,C.b).forEach(x=>q.push(tag(buildEx(x),'Grammar')));
 pick(LV[k].R,C.p).forEach(x=>q.push(tag(readQEx(x[0],x[1]),'Reading')));
 if(canListen()){pick(LV[k].D,C.d).forEach(d=>q.push(tag(dlgEx(d),'Listening')));pick(V,C.w).forEach(x=>q.push(tag(lisEx(x),'Listening')))}
 return q}
function planLesson(L){
 if(L.sentences){return[...pick(L.sentences,2).map(mcSent),...shuffle(L.sentences).map(buildEx)]}
 const it=L.items,ex=[];
 const a=[];it.forEach((x,i)=>{a.push(mcJ2E(x));a.push(i%2?lisEx(x):mcE2J(x))});ex.push(...shuffle(a));
 if(it.length>=3)ex.push(matchEx(it));
 shuffle(it).slice(0,3).forEach(x=>ex.push(typeEx(x)));
 return ex}
function planTest(ui){const u=UNITS[ui],sents=[];u.lessons.forEach(L=>(L.sentences||[]).forEach(s=>sents.push(s)));
 if(sents.length)return pick(sents,6).map(buildEx);
 const items=[];u.lessons.forEach(L=>items.push(...(L.items||[])));
 return pick(items,Math.min(12,items.length)).map(x=>gen(x,one(['j2e','e2j','listen','type'])))}

/* ---------- session ---------- */
let SES=null;
const cur=()=>SES&&SES.q[SES.i];
function start(o){SES=Object.assign({ii:0,i:0,done:0,total:o.q.length,hits:0,miss:0,first:0,t0:Date.now(),quit:false},o);SES.phase=SES.intro&&SES.intro.length?'intro':'q';if(SES.mode==='mock')SES.tid=setInterval(tick,1000);renderSession()}
function startLv(k,ui,li){
 const L=LV[k].units[ui].lessons[li],id=k+'u'+ui+'l'+li,intro=[];
 if(!S.done[id]){if(L.tip)intro.push({tip:L.tip,title:L.title});(L.items||[]).forEach(it=>intro.push({it}))}
 start({mode:'lesson',title:L.title,lid:id,q:planN5(L),intro})}
function startMockL(k,full){const q=buildMock(k,full);if(!q.length){toast('Not enough questions yet');return}start({mode:'mock',title:LV[k].n+(full?' full mock exam':' quick mock exam'),q,lk:k,deadline:Date.now()+MOCKM[k][full?0:1]*60000,sec:{},wrong:[]})}
function updateTm(){const e=$('#tm');if(!e||!SES||!SES.deadline)return;const l=Math.max(0,SES.deadline-Date.now());e.textContent=Math.floor(l/6e4)+':'+String(Math.floor(l%6e4/1e3)).padStart(2,'0')}
function tick(){if(!SES||SES.phase!=='q')return;updateTm();if(Date.now()>=SES.deadline){for(let j=SES.i;j<SES.q.length;j++){const s=SES.q[j].sec||'Other';(SES.sec[s]=SES.sec[s]||{c:0,t:0}).t++;SES.miss++}SES.i=SES.q.length;finish();renderSession()}}
function startLesson(ui,li){
 const L=UNITS[ui].lessons[li],id=lid(ui,li),intro=[];
 if(!S.done[id]){if(L.tip)intro.push({tip:L.tip,title:L.title});(L.items||[]).forEach(it=>intro.push({it}))}
 start({mode:'lesson',title:L.title,lid:id,ui,q:planLesson(L),intro})}
function startTest(ui){start({mode:'test',title:UNITS[ui].title,ui,q:planTest(ui)})}
function startPractice(){
 const ids=Object.keys(S.srs).filter(i=>ALL[i]);
 if(!ids.length){toast('Finish a lesson first. Review unlocks after you learn something.');return}
 const t=today(),due=ids.filter(i=>S.srs[i].d<=t).sort((a,b)=>S.srs[a].d-S.srs[b].d);
 const rest=ids.filter(i=>!due.includes(i)).sort((a,b)=>S.srs[a].b-S.srs[b].b);
 const sel=[...due,...rest].slice(0,10).map(i=>ALL[i]);
 start({mode:'practice',title:'Review',q:sel.map(x=>gen(x,one(['j2e','e2j','listen','type'])))})}

function renderSession(){
 const el=$('#ses');
 if(!SES){el.classList.remove('on');el.innerHTML='';return}
 el.classList.add('on');
 if(SES.phase==='done'){el.classList.remove('qin');el.innerHTML=doneHTML();confetti();return}
 if(SES.phase==='intro'){el.innerHTML=introHTML();el.classList.add('qin');return}
 const ex=cur();el.innerHTML=exHTML(ex);updateTm();const qk=SES.i+':'+SES.ii+':'+SES.phase+':'+(SES.q?SES.q.length:0);if(SES._qk!==qk){SES._qk=qk;el.classList.remove('qin');void el.offsetWidth;el.classList.add('qin')}else el.classList.remove('qin');
 if(ex.kind==='type'&&!ex.checked){const ti=$('#ti');if(ti)ti.focus()}
 if(ex.listen&&!ex.played&&!ex.checked){ex.played=true;say(ex.speak)}
 if(ex.dlg&&!ex.played&&!ex.checked&&canListen()){ex.played=true;sayDialog(ex.dlg)}
}
const head=pct=>`<div class="shead"><button class="x" data-act="quit" aria-label="Close">×</button><div class="sp"><i style="width:${pct}%"></i></div>${SES&&SES.mode==='mock'?'<b id="tm" class="tmr"></b>':''}</div>`;
const quitM=()=>SES.quit?`<div class="qm"><div class="card"><h3>Quit this session?</h3><p class="sub">You will lose the progress from this session.</p><button class="btn block" data-act="qno">Keep going</button><button class="ghost" data-act="qyes">Quit</button></div></div>`:'';
function introHTML(){
 const e=SES.intro[SES.ii],last=SES.ii===SES.intro.length-1;let b;
 if(e.tip)b=`<div class="introc tipc"><div class="lab">Grammar tip</div><div class="card"><b>${esc(e.title)}</b><ul>${e.tip.map(t=>`<li class="jp">${esc(t)}</li>`).join('')}</ul></div></div>`;
 else{const it=e.it;b=`<div class="introc"><div class="mut">New</div><div class="jp h" style="font-size:${Math.min(112,Math.floor(300/Math.max(1,it.jp.length)))}px">${esc(it.jp)}</div>${it.kana&&it.kana!==it.jp?`<div class="jp" style="font-size:28px;font-weight:700">${esc(it.kana)}</div>`:''}<div class="r">${esc(it.rom)}</div>${it.more?`<div class="e jp">${esc('Other readings: '+it.more)}</div>`:''}${it.type==='kana'?'':`<div class="e">${esc(it.en)}</div>`}${it.type==='kanji'?'':`<button class="mini" data-act="say" data-t="${esc(sp(it))}" aria-label="Listen">${ico('vol')}</button>`}</div>`}
 return head(0)+`<div class="sbody">${b}</div><div class="sbar"><div class="in" style="justify-content:flex-end"><button class="btn" data-act="inext">${last?'Start':'Next'}</button></div></div>`+quitM()}
function exHTML(ex){
 const pct=Math.round(SES.done/SES.total*100);let b='';
 if(ex.kind==='mc'){
  const short=ex.opts.every(o=>o.length<=6);
  b=`<div class="lab">${esc(ex.label)}</div>`;
  b+=ex.dlg?(canListen()?`<div class="lis"><button class="sp-big" data-act="sayd" aria-label="Play">${ico('vol')}</button><button class="sp-slow" data-act="sayd" data-r="0.6">Slow</button></div>`:`<div class="mut">No Japanese voice on this device, so here is the script:</div><div class="bubble jp" style="font-size:18px;line-height:1.9">${ex.dlg.map(l=>esc(l[0]+': '+l[1])).join('<br>')}</div>`)+`<div class="lab" style="font-size:20px">${esc(ex.prompt)}</div>`:ex.passage?`<div class="bubble jp" style="font-size:20px;line-height:1.9;font-weight:500">${esc(ex.passage)}</div><div class="lab" style="font-size:20px">${esc(ex.prompt)}</div>`:ex.listen?`<div class="lis"><button class="sp-big" data-act="say" data-t="${esc(ex.speak)}" aria-label="Play">${ico('vol')}</button><button class="sp-slow" data-act="say" data-t="${esc(ex.speak)}" data-r="0.55">Slow</button></div>`:`<div class="prompt ${ex.pj?(ex.small?'sm':ex.mid?'mid':'big'):'lat'}"><span ${ex.pj&&!ex.mid&&!ex.small?`style="font-size:${fsz(ex.prompt)}px"`:''}>${esc(ex.prompt)}</span>${ex.speak?`<button class="mini" data-act="say" data-t="${esc(ex.speak)}" aria-label="Listen">${ico('vol')}</button>`:''}</div>`;
  b+=`<div class="opts ${short?'g2':''}">`+ex.opts.map((o,i)=>{let c='';if(ex.checked){if(o===ex.answer)c='ok';else if(i===ex.sel)c='bad'}else if(i===ex.sel)c='sel';return`<button class="opt ${c}" data-act="opt" data-i="${i}" ${ex.checked?'disabled':''}><b>${i+1}</b><span class="${ex.ojp?'jp':''}">${esc(o)}</span></button>`}).join('')+'</div>'}
 else if(ex.kind==='type'){
  b=`<div class="lab">${esc(ex.label)}</div><div class="prompt big"><span style="font-size:${fsz(ex.prompt)}px">${esc(ex.prompt)}</span><button class="mini" data-act="say" data-t="${esc(ex.speak)}" aria-label="Listen">${ico('vol')}</button></div><input id="ti" class="ti" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Type in romaji" value="${ex.checked?esc(ex.val):''}" ${ex.checked?'disabled':''}>`}
 else if(ex.kind==='flash'){
  b=`<div class="lab">Flashcard</div><button class="fcard" data-act="flip"><div class="fjp" style="font-size:${fsz(ex.front)+10}px">${esc(ex.front)}</div>${ex.flip?`<div class="fback">${ex.item.kana&&ex.item.kana!==ex.item.jp?`<div class="k">${esc(ex.item.kana)}</div>`:''}<div class="r">${esc(ex.item.rom)}</div>${ex.item.type==='kana'?'':`<div class="e">${esc(ex.item.en)}</div>`}</div>`:'<div class="mut">Tap to reveal</div>'}</button>`}
 else if(ex.kind==='build'){
  b=`<div class="lab">${esc(ex.label)}</div><div class="bubble">${esc(ex.en)}</div><div class="answerline">${ex.picked.map((bi,i)=>`<button class="tok" data-act="unpick" data-i="${i}" ${ex.checked?'disabled':''}>${esc(ex.bank[bi].t)}</button>`).join('')}</div><div class="bank">${ex.bank.map((x,i)=>ex.picked.includes(i)?`<span class="tok gh">${esc(x.t)}</span>`:`<button class="tok" data-act="pick" data-i="${i}" ${ex.checked?'disabled':''}>${esc(x.t)}</button>`).join('')}</div>`}
 else{
  b=`<div class="lab">${esc(ex.label)}</div><div class="mt"><div class="col">${ex.L.map((x,i)=>{const g=ex.done.includes(x.id);return`<button class="opt mb jp ${g?'gone':''} ${ex.selL===i?'sel':''} ${ex.flash&&ex.flash.l===i?'fl':''}" data-act="mL" data-i="${i}" ${g?'disabled':''}><span>${esc(x.t)}</span></button>`}).join('')}</div><div class="col">${ex.R.map((x,i)=>{const g=ex.done.includes(x.id);return`<button class="opt mb ${g?'gone':''} ${ex.flash&&ex.flash.r===i?'fl':''}" data-act="mR" data-i="${i}" ${g?'disabled':''}><span>${esc(x.t)}</span></button>`}).join('')}</div></div>`}
 let bar;
 if(ex.kind==='flash'){bar=ex.flip?`<div class="sbar"><div class="in"><button class="ghost" data-act="fa">Again</button><button class="btn okb" data-act="fg">Got it</button></div></div>`:`<div class="sbar"><div class="in" style="justify-content:flex-end"><button class="btn" data-act="flip">Show answer</button></div></div>`}
 else if(!ex.checked){
  const rdy=ex.kind==='mc'?ex.sel!=null:ex.kind==='build'?ex.picked.length>0:false;
  bar=`<div class="sbar"><div class="in"><button class="ghost" data-act="skip">Skip</button>${ex.kind==='match'?'':`<button class="btn" id="chk" data-act="check" ${rdy?'':'disabled'}>Check</button>`}</div></div>`}
 else{const ok=ex.ok;bar=`<div class="sbar ${ok?'good':'bad'}"><div class="in"><div class="fb"><div class="fbi">${ico(ok?'check':'x')}</div><div><div class="fbt">${esc(ex.title)}</div>${ex.sub?`<div class="fbs">${esc(ex.sub)}</div>`:''}</div></div><button class="btn ${ok?'okb':'badb'}" data-act="cont">Continue</button></div></div>`}
 return head(pct)+`<div class="sbody">${b}</div>`+bar+quitM()}
function mockDoneHTML(){
 const r=SES.res,m=Math.floor(r.secs/60),s=r.secs%60,pc=Math.round(r.acc*100),secs=Object.entries(r.sec||{});
 const weakest=secs.slice().sort((a,b)=>a[1].c/a[1].t-b[1].c/b[1].t)[0];
 const verdict=pc>=75?'Strong. You are at exam level on this practice set.':pc>=60?'Close. Review the weakest section below, then retake.':'Not yet. Work through the lessons for the weakest section first.';
 const rows=secs.map(([n,v])=>{const p=Math.round(v.c/v.t*100);return`<div class="drow"><span>${esc(n)}</span><div><i style="width:${p}%;background:${p>=70?'var(--ok)':p>=50?'var(--gold)':'var(--bad)'}"></i></div><span>${p}%</span></div>`}).join('');
 const wr=r.wrong.slice(0,15).map(w=>`<div class="jp" style="font-size:15px">${esc(String(w.q).replace(/\n/g,' '))}<br><span class="mut">Answer: ${esc(w.a)}</span></div>`).join('');
 return `<div class="sbody"><div class="donew" style="max-width:560px"><div class="big2">Mock exam result</div><div class="big" style="font-size:54px">${pc}%</div><p class="sub">${verdict}</p><div class="card dist">${rows}</div>${weakest?`<p class="sub">Weakest section: <b>${esc(weakest[0])}</b></p>`:''}<div class="stats"><div class="sta"><b style="background:var(--gold);color:#201600">XP</b><span>${r.xp}</span></div><div class="sta"><b style="background:var(--ok)">Correct</b><span>${SES.hits}/${SES.hits+SES.miss}</span></div><div class="sta"><b style="background:var(--pri)">Time</b><span>${m}:${String(s).padStart(2,'0')}</span></div></div>${wr?`<div class="card" style="text-align:left;display:grid;gap:10px"><b>Review your misses</b>${wr}</div>`:''}<p class="mut">Practice score only. The real JLPT uses scaled scoring, so your actual result can differ.</p></div></div><div class="sbar"><div class="in" style="justify-content:flex-end"><button class="btn okb" data-act="exit">Continue</button></div></div>`}
function doneHTML(){if(SES.mode==='mock')return mockDoneHTML();
 const r=SES.res,m=Math.floor(r.secs/60),s=r.secs%60;
 let t,sub;
 if(SES.mode==='test'&&!r.passed){t='Almost there';sub='You need 80% to skip this unit. Try again, or take the lessons.'}
 else if(SES.mode==='test'){t='Unit skipped';sub='Everything in this unit is now unlocked.'}
 else if(SES.mode==='practice'){t='Review done';sub='Items you missed come back sooner.'}
 else{t='Lesson complete';sub=r.stars===3?'Perfect run.':'Replay for three stars.'}
 return `<div class="sbody"><div class="donew">${ensoSVG(SES.mode==='lesson'&&SES.res.stars===3?'完':'済')}<div class="big2">${t}</div>${SES.mode==='lesson'?`<div class="dstars">${'★'.repeat(r.stars)}${'☆'.repeat(3-r.stars)}</div>`:''}<p class="sub">${sub}</p><div class="stats"><div class="sta"><b style="background:var(--gold);color:#201600">XP</b><span>${r.xp}</span></div><div class="sta"><b style="background:var(--ok)">Accuracy</b><span>${Math.round(r.acc*100)}%</span></div><div class="sta"><b style="background:var(--pri)">Time</b><span>${m}:${String(s).padStart(2,'0')}</span></div></div></div></div><div class="sbar"><div class="in" style="justify-content:flex-end"><button class="btn okb" data-act="exit">Continue</button></div></div>`}
function confetti(){if(SES&&SES.res&&(SES.res.passed===false||(SES.mode==='mock'&&SES.res.acc<.6)))return;const c=['#ff8fb0','#ffb7c9','#f4c25b','#ff7f66','#c9b6ff'];const d=document.createElement('div');d.className='conf';d.innerHTML=Array.from({length:30},()=>`<i style="--x:${Math.random()*100}%;--d:${1.6+Math.random()*1.6}s;--c:${one(c)}"></i>`).join('');$('#ses').appendChild(d);setTimeout(()=>d.remove(),3500)}

function trackMiss(ids,ok){ids.forEach(id=>{if(ok){if(S.mistakes[id]){S.mistakes[id]--;if(S.mistakes[id]<=0)delete S.mistakes[id]}}else S.mistakes[id]=(S.mistakes[id]||0)+1})}
function check(){
 const ex=cur();if(!ex||ex.checked)return;let ok;
 if(ex.kind==='type'){const v=($('#ti')||{}).value||'';if(!v.trim())return;ex.val=v;ok=ex.answers.map(norm).includes(norm(v))}
 else if(ex.kind==='build'){ok=ex.picked.map(i=>ex.bank[i].t).join('|')===ex.tokens.join('|')}
 else{if(ex.sel==null)return;ok=ex.opts[ex.sel]===ex.answer}
 grade(ok)}
function grade(ok){
 const ex=cur();
 if(SES.mode==='mock'){
  const r=SES.sec[ex.sec||'Other']=SES.sec[ex.sec||'Other']||{c:0,t:0};r.t++;
  if(ok){r.c++;SES.hits++}else{SES.miss++;SES.wrong.push({q:ex.prompt||ex.en||'',a:ex.answer||(ex.tokens?ex.tokens.join(''):'')})}
  ex.ids.forEach(id=>srsUp(id,ok));trackMiss(ex.ids,ok);SES.done++;SES.i++;if(SES.i>=SES.q.length)finish();save();renderSession();return}
 ex.checked=true;ex.ok=ok;
 if(ex.kind==='match'){ex.ok=true;if(ex.miss)SES.miss++;else{SES.hits++;SES.first++}ex.title=ex.miss?'Matched':'Perfect match';ex.sub='';ex.ids.forEach(id=>srsUp(id,!ex.miss));SES.done++;sfx(true);save();renderSession();return}
 ex.ids.forEach(id=>srsUp(id,ok));trackMiss(ex.ids,ok);
 if(ok){SES.hits++;if(!ex.retry)SES.first++;SES.done++}
 else{SES.miss++;if(!ex.retry)SES.q.push(Object.assign({},ex,{retry:true,checked:false,ok:null,sel:null,val:'',played:false,picked:[],bank:ex.bank?ex.bank.map(b=>({t:b.t})):undefined}));else SES.done++}
 ex.title=ok?one(['Correct','Nice one','Perfect','Well done']):(ex.retry?'Keep at it':'Not quite');
 const right=ex.kind==='type'?ex.answers[0]:ex.kind==='build'?ex.tokens.join(' '):ex.answer;
 ex.sub=ok?(ex.info||''):('Answer: '+right+(ex.info&&ex.kind!=='build'?'  ·  '+ex.info:''));
 sfx(ok);save();renderSession();
 if(ex.speak)say(ex.kind==='mc'&&ex.pj?ex.speak:ex.kind==='build'?ex.speak:ex.kind==='mc'&&ex.ojp?ex.answer:ex.speak)}
function cont(){SES.i++;if(SES.i>=SES.q.length)finish();renderSession()}
function finish(){if(SES.tid){clearInterval(SES.tid);SES.tid=null}
 const att=SES.hits+SES.miss,acc=att?SES.hits/att:1;
 let xp=SES.first*5+10+(SES.miss===0?5:0);if(SES.mode==='test'&&acc<.8)xp=SES.first*3;if(SES.mode==='mock')xp=Math.round(SES.hits*1.5);
 const stars=acc>=.9?3:acc>=.75?2:1;let passed=true;
 if(SES.mode==='lesson')S.done[SES.lid]=Math.max(S.done[SES.lid]||0,stars);
 if(SES.mode==='test'){passed=acc>=.8;if(passed)UNITS[SES.ui].lessons.forEach((L,li)=>{const id=lid(SES.ui,li);S.done[id]=Math.max(S.done[id]||0,3)})}
 const lg=S.log[today()]=S.log[today()]||{l:0,r:0,w:0};if(SES.mode==='lesson')lg.l++;if(SES.mode==='practice')lg.r+=att;if(/mistake|drill/i.test(SES.title||''))lg.w++;
 award(xp);S.answered+=att;S.correct+=SES.hits;save();
 if(SES.mode==='mock'){S.mocks=(S.mocks||[]).concat({k:SES.lk||'n5',d:today(),o:Math.round(acc*100),s:Object.fromEntries(Object.entries(SES.sec).map(([k,v])=>[k,Math.round(v.c/v.t*100)]))}).slice(-10);save()}
 SES.phase='done';SES.res={xp,acc,stars,passed,secs:Math.round((Date.now()-SES.t0)/1000),sec:SES.sec,wrong:SES.wrong}}
function exitSession(){if(SES&&SES.tid)clearInterval(SES.tid);SES=null;renderSession();renderMain()}

/* ---------- views ---------- */
let LIB='kanji',view='home',CS='h',KV={grade:1,list:null,err:false},RESET=false;
const NAV=[['home','Home','home'],['jlpt','Course','book'],['dojo','Dojo','あ'],['practice','Practice','refresh'],['kanji','Library','字'],['profile','Progress','chart']];
function renderNav(){$('#nav').innerHTML='<div class="brand"><span class="logo jp">言</span><span>Kotoba</span></div>'+NAV.map(([k,t,i])=>`<button class="${view===k?'on':''}" data-act="nav" data-v="${k}" aria-label="${t}">${ICONS[i]?ico(i):'<span class="kj jp">'+i+'</span>'}<span>${t}</span></button>`).join('')+`<div class="sidefoot"><span class="sf">${ico('flame')} ${streakNow()} day streak</span><span class="sf">${S.xp} XP</span></div>`}
function nextLesson(){return FLAT.find(f=>!S.done[f.id])}
function railHTML(){
 const p=Math.min(1,xpToday()/S.goal),c=2*Math.PI*26,nx=nextLesson();
 return `<div class="card"><div class="trow"><div class="ringw"><svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="26" fill="none" stroke="var(--line)" stroke-width="7"/><circle cx="32" cy="32" r="26" fill="none" stroke="var(--gold)" stroke-width="7" stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${(c*(1-p)).toFixed(1)}" transform="rotate(-90 32 32)"/></svg><span>${ico('zap')}</span></div><div><div class="big">${xpToday()}<small> / ${S.goal} XP</small></div><div class="mut">Daily goal</div></div><div class="streak" title="Day streak">${ico('flame')}<b>${streakNow()}</b></div></div>${nx?`<button class="btn block" data-act="lesson" data-u="${nx.ui}" data-l="${nx.li}">Continue: ${esc(nx.title)}</button>`:`<button class="btn block" data-act="nav" data-v="practice">Review what you know</button>`}</div><div class="card" id="kod"><div class="mut">Loading kanji of the day…</div></div>`}
function viewLearn(){
 let h='<div class="learn"><aside class="rail">'+railHTML()+'</aside><div class="path">',g=0;
 UNITS.forEach((u,ui)=>{
  const dn=u.lessons.filter((_,li)=>S.done[lid(ui,li)]).length,all=dn===u.lessons.length;
  h+=`<section class="unit c${ui%5}"><div class="ubanner" data-g="${UG(u)}"><div><div class="ukick">Unit ${ui+1} · ${dn}/${u.lessons.length}</div><h2>${esc(u.title)}</h2><p>${esc(u.sub)}</p><div class="ubar"><i style="width:${Math.round(dn/u.lessons.length*100)}%"></i></div></div>${all?'':`<button class="ghostw" data-act="test" data-u="${ui}">Jump ahead</button>`}</div><div class="nodes">`;
  u.lessons.forEach((L,li)=>{
   const id=lid(ui,li),st=S.done[id],locked=g>0&&!S.done[FLAT[g-1].id],cu=!st&&!locked,off=[0,40,60,40,0,-40,-60,-40][li%8];
   const face=locked?ico('lock'):st?ico('star'):(L.items&&L.items[0].jp.length<=2?`<span class="jp">${esc(L.items[0].jp)}</span>`:'<span class="jp">文</span>');
   h+=`<div class="nw" style="transform:translateX(${off}px)">${cu?'<div class="bub">Start</div>':''}<button class="node ${locked?'lock':''} ${cu?'cur':''} ${st?'done':''}" data-act="lesson" data-u="${ui}" data-l="${li}" aria-label="${esc(L.title)}">${face}</button><div class="nl">${esc(L.title)}</div>${st?`<div class="stars">${'★'.repeat(st)}${'☆'.repeat(3-st)}</div>`:''}</div>`;g++});
  h+='</div></section>'});
 return h+'</div></div>'}
function viewPractice(){
 const t=today(),ids=Object.keys(S.srs).filter(i=>ALL[i]),due=ids.filter(i=>S.srs[i].d<=t);
 const lv=[0,0,0];ids.forEach(i=>{const b=S.srs[i].b;lv[b<=1?0:b<=3?1:2]++});
 const weak=ids.filter(i=>S.srs[i].b<=1).slice(0,12);
 return `<div class="wrap"><div><h1 class="h1">Practice</h1><p class="sub">Spaced repetition brings each item back just before you forget it.</p></div>
 <div class="card"><div class="big">${due.length}<small> ready for review</small></div><p class="mut" style="margin:4px 0 14px">${ids.length} items learned so far</p><button class="btn block" data-act="review">Start 10-item review</button></div>
 <div class="card"><h3 style="margin-bottom:12px">Memory strength</h3><div class="dist">${['Learning','Familiar','Strong'].map((n,i)=>`<div class="drow"><span>${n}</span><div><i style="width:${ids.length?Math.round(lv[i]/ids.length*100):0}%"></i></div><span>${lv[i]}</span></div>`).join('')}</div></div>
 ${weak.length?`<div class="card"><h3 style="margin-bottom:12px">Needs attention</h3><div class="chips">${weak.map(i=>`<button class="chip" data-act="say" data-t="${esc(ALL[i].jp)}"><span class="jp">${esc(ALL[i].jp)}</span> ${esc(ALL[i].type==='kana'?ALL[i].rom:ALL[i].en)}</button>`).join('')}</div></div>`:''}</div>`}
function viewKanji(){
 return `<div class="wrap"><div><h1 class="h1">Kanji explorer</h1><p class="sub">Meanings, readings and real words for any kanji, fetched live from <a href="https://kanjiapi.dev" target="_blank" rel="noopener">kanjiapi.dev</a>, one of the open APIs from the public-apis list.</p></div>
 <form class="search" id="ksearch"><input id="ks" class="jp" placeholder="Paste a kanji, e.g. 学" autocomplete="off"><button class="btn" type="submit">Look up</button></form>
 <div class="seg" role="tablist">${[1,2,3].map(g=>`<button class="${KV.grade===g?'on':''}" data-act="kgrade" data-g="${g}">Grade ${g}</button>`).join('')}</div>
 <div class="kgrid" id="kg">${kgridHTML()}</div></div>`}
function kgridHTML(){if(KV.err)return`<p class="sub" style="grid-column:1/-1">Could not reach kanjiapi.dev. Showing your starter kanji. <button class="chip" data-act="kgrade" data-g="${KV.grade}">Retry</button></p>`+KJ.map(k=>`<button class="kc jp" data-act="kj" data-k="${k.jp}">${k.jp}</button>`).join('');if(!KV.list)return'<p class="sub" style="grid-column:1/-1">Loading…</p>';return KV.list.map(k=>`<button class="kc jp" data-act="kj" data-k="${esc(k)}">${esc(k)}</button>`).join('')}
function viewChart(){
 const R=CS==='h'?[HIRA,HIRA2]:[KATA,KATA2];
 const rows=a=>a.map(([n,s])=>{const it=kana(s,CS),cells=it.map(x=>{const m=S.srs[x.id]&&S.srs[x.id].b>=3;return`<button class="cell ${m?'m':''}" data-act="say" data-t="${esc(x.jp)}"><span class="jp">${x.jp}</span><small>${x.rom}</small></button>`});while(cells.length<5)cells.push('<span class="cell e"></span>');return`<div class="crow">${cells.join('')}</div>`}).join('');
 return `<div class="wrap"><div><h1 class="h1">Kana chart</h1><p class="sub">Tap any character to hear it. Green means you know it well.</p></div><div class="seg"><button class="${CS==='h'?'on':''}" data-act="cscript" data-s="h">Hiragana</button><button class="${CS==='k'?'on':''}" data-act="cscript" data-s="k">Katakana</button></div><div class="chart"><div class="sec">Basic</div>${rows(R[0])}<div class="sec">Voiced</div>${rows(R[1])}</div></div>`}
function viewProfile(){
 const att=S.answered,acc=att?Math.round(S.correct/att*100):0,lessons=Object.keys(S.done).length,lvl=Math.floor(S.xp/200)+1,tz=new Date().getTimezoneOffset()*6e4;
 const days=Array.from({length:7},(_,i)=>{const d=today()-6+i;return{xp:S.hist[d]||0,l:new Date(d*864e5+tz).toLocaleDateString('en',{weekday:'short'}),t:d===today()}});
 const mx=Math.max(S.goal,...days.map(x=>x.xp));
 const hiraDone=UNITS[0].lessons.every((_,li)=>S.done[lid(0,li)]);
 const ach=[['First steps',lessons>=1],['On a roll',S.streak>=3&&streakNow()>=3],['Hiragana master',hiraDone],['Hundred club',S.xp>=100],['Kanji curious',Object.keys(S.custom).length>=1],['Sharp mind',att>=20&&acc>=90]];
 return `<div class="wrap"><div><h1 class="h1">Progress</h1><p class="sub">Level ${lvl}. Progress saves in this browser.</p></div>
 <div class="card"><div class="lv"><i style="width:${(S.xp%200)/2}%"></i></div><p class="mut" style="margin-top:6px">${S.xp%200} / 200 XP to level ${lvl+1}</p></div>
 <div class="stat3"><div class="card st"><b>${S.xp}</b><span>Total XP</span></div><div class="card st"><b>${streakNow()}</b><span>Day streak</span></div><div class="card st"><b>${acc}%</b><span>Accuracy</span></div><div class="card st"><b>${lessons}</b><span>Lessons done</span></div></div>
 ${heatCard()}${trendCard()}<div class="card"><h3>This week</h3><div class="bars">${days.map(d=>`<div class="bar ${d.t?'t':''}"><em>${d.xp||''}</em><i style="height:${Math.max(3,d.xp/mx*100)}%"></i><span>${d.l}</span></div>`).join('')}</div></div>
 <div class="card"><h3 style="margin-bottom:10px">Achievements</h3><div class="chips">${ach.map(([n,o])=>`<span class="chip ${o?'on':'lk'}">${o?ico('check'):ico('lock')} ${n}</span>`).join('')}</div></div>
 ${unlockCard()}
 <div class="card" style="display:grid;gap:14px"><h3>Settings</h3>
 <div class="obf"><label for="pf-name">Your name</label><input class="inp" id="pf-name" maxlength="30" value="${esc(S.profile.name||'')}" placeholder="Name"></div><div class="obf"><label for="pf-exam">Exam date</label><input class="inp" id="pf-exam" type="date" value="${esc(S.profile.exam||'')}"></div><div><div class="mut" style="margin-bottom:6px">Target level</div><div class="seg">${LVK.map(k=>`<button class="${tgtLv()===k?'on':''}" data-act="ptl" data-k="${k}">${k.toUpperCase()}</button>`).join('')}</div></div><div><div class="mut" style="margin-bottom:6px">Minutes per day</div><div class="seg">${[10,20,30,45].map(v=>`<button class="${S.profile.mins===v?'on':''}" data-act="pmins" data-v="${v}">${v}</button>`).join('')}</div></div><div><div class="mut" style="margin-bottom:6px">Daily goal</div><div class="seg">${[10,20,30,50].map(g=>`<button class="${S.goal===g?'on':''}" data-act="goal" data-g="${g}">${g} XP</button>`).join('')}</div></div>
 <div><div class="mut" style="margin-bottom:6px">Theme</div><div class="seg">${[[null,'Auto'],['light','Light'],['dark','Dark']].map(([v,n])=>`<button class="${S.theme===v?'on':''}" data-act="theme" data-t="${v||''}">${n}</button>`).join('')}</div></div>
 <div><div class="mut" style="margin-bottom:6px">Sound effects</div><div class="seg"><button class="${S.sound?'on':''}" data-act="sound" data-v="1">On</button><button class="${!S.sound?'on':''}" data-act="sound" data-v="0">Off</button></div></div>
 <div class="card" style="display:grid;gap:10px;box-shadow:none"><h3>Sound test</h3><p class="mut">Speech: ${('speechSynthesis' in window)?(jaVoice?'Japanese voice found ('+esc(jaVoice.name)+')':VOICES?'No Japanese voice among '+VOICES+' voices':'No voices reported yet'):'Not supported in this browser'}.</p><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn" data-act="say" data-t="こんにちは">Play こんにちは</button><button class="ghost" data-act="say" data-t="は">は</button><button class="ghost" data-act="say" data-t="へ">へ</button><button class="ghost" data-act="say" data-t="を">を</button><button class="ghost" data-act="beep">Play beep</button><button class="ghost" data-act="recheck">Recheck voices</button></div><p class="mut">If the beep plays but the Japanese voice does not, your device has no Japanese voice. Android: Settings, System, Languages, Text-to-speech, install Japanese voice data (Google Speech Services). iPhone and iPad: Settings, Accessibility, Spoken Content, Voices, Japanese. Windows: Settings, Time and language, Language, add Japanese with speech. Mac: System Settings, Accessibility, Spoken Content, System voice, Manage Voices. Check the volume and silent switch too. Listening exercises switch on once a Japanese voice is found.</p></div>
 <button class="ghost" data-act="reset">${RESET?'Tap again to erase all progress':'Reset progress'}</button></div></div>`}
let JL={lv:null};
const MIN12='At least 38 of 120 on language knowledge and reading, and 19 of 60 on listening.',MIN3='At least 19 of 60 in each of three sections: language knowledge, reading, listening.';
const LEVELS=[
 {k:'f',n:'あ',name:'Kana',full:'Foundations',pass:'',mins:'',scope:''},
 {k:'n5',n:'N5',name:'Beginner',full:'Beginner',pass:'80 of 180',mins:MIN12,scope:'About 800 words, 100 kanji, 80 grammar points'},
 {k:'n4',n:'N4',name:'Basic',full:'Elementary',pass:'90 of 180',mins:MIN12,scope:'About 1,500 words, 300 kanji'},
 {k:'n3',n:'N3',name:'Mid',full:'Intermediate',pass:'95 of 180',mins:MIN3,scope:'About 3,700 words, 650 kanji'},
 {k:'n2',n:'N2',name:'Upper',full:'Upper intermediate',pass:'90 of 180',mins:MIN3,scope:'About 6,000 words, 1,000 kanji'},
 {k:'n1',n:'N1',name:'Advanced',full:'Advanced',pass:'100 of 180',mins:MIN3,scope:'About 10,000 words, 2,000 kanji'}];
function lvPath(k){
 const V=LV[k],nx=V.F.find(f=>!S.done[f.id]);let h='';
 V.units.forEach((u,ui)=>{
  const dn=u.lessons.filter((_,li)=>S.done[k+'u'+ui+'l'+li]).length;
  h+=`<section class="unit c${ui%5}"><div class="ubanner" data-g="${UG(u)}"><div><div class="ukick">Unit ${ui+1} · ${dn}/${u.lessons.length}</div><h2>${esc(u.title)}</h2><p>${esc(u.sub)}</p><div class="ubar"><i style="width:${Math.round(dn/u.lessons.length*100)}%"></i></div></div></div><div class="nodes">`;
  u.lessons.forEach((L,li)=>{
   const id=k+'u'+ui+'l'+li,st=S.done[id],cu=nx&&nx.id===id,off=[0,40,60,40,0,-40,-60,-40][li%8];
   const face=L.gram?'文':L.read?'読':L.listen?'聴':(L.items[0].type==='kanji'?'字':(L.items[0].jp.length<=2?L.items[0].jp:'語'));
   h+=`<div class="nw" style="transform:translateX(${off}px)">${cu?'<div class="bub">Next</div>':''}<button class="node ${cu?'cur':''} ${st?'done':''}" data-act="lv" data-k="${k}" data-u="${ui}" data-l="${li}" aria-label="${esc(L.title)}">${st?ico('star'):isFree(k,ui)?`<span class="jp">${esc(face)}</span>`:ico('lock')}</button><div class="nl">${esc(L.title)}</div>${st?`<div class="stars">${'★'.repeat(st)}${'☆'.repeat(3-st)}</div>`:''}</div>`});
  h+='</div></section>'});
 return h}
function readiness(k){
 k=k||tgtLv();const lv=LV[k].lv;
 const ms=(S.mocks||[]).filter(m=>m.s&&(m.k||'n5')===k).slice(-3);
 const F=LV[k].F,C=F.filter(f=>S.done[f.id]).length/F.length;
 const mine=ALLL.filter(x=>x.lvl===lv),R=mine.filter(x=>S.srs[x.id]&&S.srs[x.id].b>=3).length/(mine.length||1);
 if(!ms.length)return{has:false,C,R,k};
 const last=ms[ms.length-1],M=ms.reduce((a,m)=>a+m.o,0)/ms.length;
 const keys=['Vocabulary','Grammar','Reading'].filter(x=>last.s[x]!==undefined);
 const V=last.s.Vocabulary||0,G=last.s.Grammar||0,Rd=last.s.Reading||0;
 const lis=last.s.Listening;
 let lk,rg=null;
 if(lv>=3){lk=Math.round((V+1.5*G)/2.5/100*60);rg=Math.round(Rd/100*60)}else lk=Math.round((V+1.5*G+Rd)/3.5/100*120);
 let rd=100*(0.6*Math.min(1,Math.max(0,(M-35)/45))+0.25*C+0.15*R);
 const notes=[];
 const weak=keys.concat(lis!==undefined?['Listening']:[]).sort((a,b)=>last.s[a]-last.s[b])[0];
 if(lis===undefined&&rd>85){rd=85;notes.push('Capped at 85% because listening was not measured.')}
 if(last.s[weak]<50&&rd>65){rd=65;notes.push('Capped at 65% because '+weak+' is below 50%.')}
 return{has:true,k,lv,rd:Math.round(rd),M:Math.round(M),n:ms.length,lk,rg,lis:lis===undefined?null:Math.round(lis/100*60),C,R,weak,wp:last.s[weak],notes}}
function readyCard(k){
 const r=readiness(k);k=r.k;
 const drills=['Vocabulary','Grammar','Reading'].concat(canListen()?['Listening']:[]).map(x=>`<button class="ghost" data-act="drill" data-k="${k}" data-s="${x}">${x}</button>`).join('');
 if(!r.has)return `<div class="card" style="display:grid;gap:10px"><h3>Your readiness</h3><p class="sub">Take one ${LV[k].n} mock exam to get your estimate. Course completion so far: ${Math.round(r.C*100)}%.</p><div class="mut">Quick 10-question drills</div><div style="display:flex;gap:8px;flex-wrap:wrap">${drills}</div></div>`;
 const band=r.rd>=80?'On track. Keep taking mocks and do the official samples.':r.rd>=60?'Close. Fix your weakest section, then retake a mock.':'Not yet. Finish the lessons and drill your weak sections.';
 const col=r.rd>=80?'var(--ok)':r.rd>=60?'var(--gold)':'var(--bad)';
 const sc=r.lv>=3?`<b>Estimated language knowledge:</b> about ${r.lk} of 60 (needs 19).<br><b>Estimated reading:</b> about ${r.rg} of 60 (needs 19).<br>`:`<b>Estimated language and reading score:</b> about ${r.lk} of 120 (needs 38).<br>`;
 return `<div class="card" style="display:grid;gap:12px"><h3>Your ${LV[k].n} readiness</h3><div style="display:flex;align-items:baseline;gap:10px"><span style="font-size:54px;font-weight:900;line-height:1;color:${col}">${r.rd}%</span><span class="sub">estimate, not a prediction</span></div><div class="lv"><i style="width:${r.rd}%;background:${col}"></i></div><p>${band}</p>
 <div class="dist"><div class="drow"><span>Mock avg</span><div><i style="width:${r.M}%"></i></div><span>${r.M}%</span></div><div class="drow"><span>Course</span><div><i style="width:${Math.round(r.C*100)}%"></i></div><span>${Math.round(r.C*100)}%</span></div><div class="drow"><span>Memory</span><div><i style="width:${Math.round(r.R*100)}%"></i></div><span>${Math.round(r.R*100)}%</span></div></div>
 <p>${sc}<b>Estimated listening score:</b> ${r.lis===null?'not measured (needs 19 of 60)':'about '+r.lis+' of 60 (needs 19)'}.</p>
 <p>Weakest section: <b>${r.weak}</b> (${r.wp}%).</p>${r.notes.map(n=>`<p class="mut">${n}</p>`).join('')}
 <div class="mut">Quick 10-question drills</div><div style="display:flex;gap:8px;flex-wrap:wrap">${drills}</div>
 <p class="mut">This blends your last ${r.n} mock score${r.n>1?'s':''} (60%), course completion (25%) and memory strength (15%). The real JLPT uses scaled scoring and a far wider word list than this app teaches, so use it as a guide, not a promise.</p></div>`}
function startDrillL(k,sec){const q=buildMock(k,true).filter(e=>e.sec===sec);if(!q.length){toast('No questions for this section on this device');return}start({mode:'practice',title:LV[k].n+' '+sec+' drill',q:sec==='Reading'?q:pick(q,10)})}
function packStats(k){const V=LV[k],its=[];V.units.forEach(u=>u.lessons.forEach(L=>(L.items||[]).forEach(i=>its.push(i))));return{w:its.filter(i=>i.type==='vocab').length,kj:its.filter(i=>i.type==='kanji').length,g:V.G.length,r:V.R.length,d:V.D.length}}
function viewJlpt(){
 const sel=JL.lv||tgtLv(),last=(S.mocks||[]).filter(m=>(m.k||'n5')===sel).slice(-1)[0];
 const prog=l=>l.k==='f'?[FLAT.filter(f=>S.done[f.id]).length,FLAT.length]:[lvDone(l.k),LV[l.k].F.length];
 const cards=LEVELS.map(l=>{const [a,b]=prog(l);return `<button class="lvc ${sel===l.k?'on':''}" data-act="jlv" data-k="${l.k}"><b class="${l.k==='f'?'jp':''}">${l.n}</b><span>${l.name}</span><i class="lbar"><u style="width:${Math.round(a/b*100)}%"></u></i><small>${a}/${b}</small></button>`}).join('');
 const l=LEVELS.find(x=>x.k===sel);
 let body;
 if(l.k==='f'){body=`<div class="card"><h3>Kana and basics</h3><p class="sub">Start here if you cannot read hiragana and katakana yet. These lessons also cover first greetings, numbers and food words.</p></div><div>${foundationsPath()}</div>`}
 else{const st=packStats(l.k),m=MOCKM[l.k];
  body=`${unlockCard()}${examPanel(l)}${readyCard(l.k)}<div class="card" style="display:grid;gap:10px"><h3>${l.n} mock exams</h3><p class="sub"><b>Full mock:</b> ${m[0]} minutes. Vocabulary, grammar, reading and listening, drawn from this level's question pool. <b>Quick mock:</b> ${m[1]} minutes. Listening needs a Japanese voice on your device. No feedback until the end.</p>${last?`<p class="mut">Last ${l.n} mock score: ${last.o}% · ${(S.mocks||[]).filter(x=>(x.k||'n5')===l.k).length} taken</p>`:''}<button class="btn block" data-act="mockf" data-k="${l.k}">Start full mock exam</button><button class="ghost block" data-act="mock5" data-k="${l.k}">Quick mock instead</button><p class="mut">${l.n} pack in this app: ${st.w} words, ${st.kj} kanji, ${st.g} grammar questions, ${st.r} reading questions and ${st.d} listening conversations. The real exam covers ${esc(l.scope.toLowerCase())}, so treat this as a focused practice set and add your own words in Library.</p></div><div>${lvPath(l.k)}</div>`}
 return `<div class="wrap"><div><h1 class="h1">Your course</h1><p class="sub">Practice follows the structure of the official exam: vocabulary, grammar, reading and listening.</p></div><div class="lvg">${cards}</div>${body}<p class="mut">The JLPT has not published past papers for years, so every question here is original and written to match the official formats. Also do the free official sample questions and practice workbook on jlpt.jp.</p></div>`}

/* ---------- plan, home, practice, library, progress ---------- */
function examInfo(){const e=S.profile.exam;if(!e)return null;const t=Date.parse(e+'T00:00:00Z');if(isNaN(t))return null;return{days:Math.floor(t/864e5)-today(),label:new Date(t).toLocaleDateString('en',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'})}}
function nextAny(){const f=FLAT.find(f=>f.ui<4&&!S.done[f.id]);if(f)return{kind:'k',ui:f.ui,li:f.li,title:f.title,unit:UNITS[f.ui].title};
 for(const k of LVK){const n=LV[k].F.find(f=>!S.done[f.id]);if(n)return{kind:'n',k,ui:n.ui,li:n.li,title:LV[k].units[n.ui].lessons[n.li].title,unit:LV[k].n+' · '+LV[k].units[n.ui].title}}
 return null}
function plan(){
 const tl=LVK.indexOf(tgtLv()),kL=FLAT.filter(f=>f.ui<4&&!S.done[f.id]).length;let nL=0;LVK.slice(0,tl+1).forEach(k=>{nL+=LV[k].F.filter(f=>!S.done[f.id]).length});
 const tot=kL*4+nL*7,ex=examInfo();
 let mpd=S.profile.mins,warn='';
 if(ex&&ex.days>0&&tot>0){mpd=Math.max(5,Math.ceil(tot/(ex.days*.85)));if(mpd>S.profile.mins*1.5)warn='To finish the course before your exam you need about '+mpd+' minutes a day. You set '+S.profile.mins+'. Add time or pick a later exam date.'}
 return{kL,nL,tot,ex,mpd,tgt:Math.max(1,Math.round(mpd/6)),warn}}
function todayTasks(){
 const t=today(),L=S.log[t]||{l:0,r:0,w:0},p=plan(),nx=nextAny();
 const due=Object.keys(S.srs).filter(i=>ALL[i]&&S.srs[i].d<=t).length,mis=Object.keys(S.mistakes).filter(i=>ALL[i]).length,tk=[];
 if(due>0)tk.push({t:'Review '+Math.min(10,due)+' due items',sub:'Spaced repetition',d:L.r>=Math.min(10,due),act:'review'});
 const tgtLeft=LV[tgtLv()].F.some(f=>!S.done[f.id]);
 if(nx&&(nx.kind==='k'||tgtLeft))tk.push({t:'Learn '+p.tgt+(p.tgt>1?' new lessons':' new lesson'),sub:'About '+p.tgt*6+' minutes',d:L.l>=p.tgt,act:'next'});
 else{const lm=(S.mocks||[]).slice(-1)[0];tk.push({t:'Take a mock exam',sub:'Find your weak sections',d:!!lm&&lm.d===t,act:'mock5'})}
 tk.push(mis?{t:'Clear your mistakes',sub:Math.min(mis,10)+' of '+mis+' waiting',d:L.w>=1,act:'mist'}:{t:'Grammar drill',sub:'10 questions',d:L.w>=1,act:'drillg'});
 return tk}
function viewHome(){
 const nm=S.profile.name?', '+esc(S.profile.name):'',hr=new Date().getHours(),g=hr<12?'Good morning':hr<18?'Good afternoon':'Good evening';
 const p=plan(),tk=todayTasks(),dn=tk.filter(x=>x.d).length,pc=dn/tk.length,c=2*Math.PI*30,r=readiness(tgtLv()),nx=nextAny();
 const ex=p.ex&&p.ex.days>0?`<span class="pill">${p.ex.days} day${p.ex.days>1?'s':''} to the exam · ${p.ex.label}</span>`:'<span class="pill">No exam date set. Add one in Progress.</span>';
 const tasks=tk.map(t=>`<li class="task ${t.d?'dn':''}"><span class="tk">${t.d?ico('check'):''}</span><div class="tt"><b>${esc(t.t)}</b><small>${esc(t.sub||'')}</small></div>${t.d?'':`<button class="btn sm" data-act="${t.act}">Start</button>`}</li>`).join('');
 const cont=nx?`<button class="cont" data-act="next"><span class="cj jp">${nx.kind==='k'?'あ':'級'}</span><span><small>Up next · ${esc(nx.unit)}</small><b>${esc(nx.title)}</b></span><span class="go">Continue</span></button>`:'';
 const gp=Math.min(1,xpToday()/S.goal);
 return `<div class="home"><div class="hero"><canvas id="sak" aria-hidden="true"></canvas><div class="ht"><div class="mut">${g}${nm}</div><h1 class="h1">${dn===tk.length?'Today is done. Nice work.':'Your plan for today'}</h1>${ex}</div>${gaugeSVG(Math.min(1,xpToday()/S.goal),xpToday(),S.goal)}<div class="kanjiwm" aria-hidden="true">言</div></div>
 <div class="mainc"><div class="card plan"><div class="trow"><div class="ringw"><svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="26" fill="none" stroke="var(--line)" stroke-width="7"/><circle cx="32" cy="32" r="26" fill="none" stroke="var(--gold)" stroke-width="7" stroke-linecap="round" stroke-dasharray="${(2*Math.PI*26).toFixed(1)}" stroke-dashoffset="${(2*Math.PI*26*(1-pc)).toFixed(1)}" transform="rotate(-90 32 32)"/></svg><span style="font-size:15px;font-weight:900;color:var(--ink)">${Math.round(pc*100)}%</span></div><div><div class="big">${dn}<small> of ${tk.length} done</small></div><div class="mut">Today's plan</div></div></div><ul class="tasks">${tasks}</ul>${p.warn?`<p class="warn" style="margin-top:12px">${esc(p.warn)}</p>`:''}</div>${cont}</div>
 <div class="sidec"><div class="card"><div class="stat3m"><div>${ico('flame')}<b>${streakNow()}</b><span>Day streak</span></div><div><b>${xpToday()}<small style="font-size:14px;color:var(--mute)">/${S.goal}</small></b><span>XP today</span></div><div><b>${r.has?r.rd+'%':'–'}</b><span>Readiness</span></div></div><div class="lv" style="margin-top:14px"><i style="width:${Math.round(gp*100)}%;background:var(--gold)"></i></div><p class="mut" style="margin-top:6px">${r.has?'Based on your mock exams.':'Take a mock exam on the Course tab to see your readiness.'}</p></div><div class="card" id="kod"><div class="mut">Loading kanji of the day…</div></div></div></div>`}
function foundationsPath(){
 let h='',g=0;
 UNITS.forEach((u,ui)=>{
  const dn=u.lessons.filter((_,li)=>S.done[lid(ui,li)]).length,all=dn===u.lessons.length;
  h+=`<section class="unit c${ui%5}"><div class="ubanner" data-g="${UG(u)}"><div><div class="ukick">Unit ${ui+1} · ${dn}/${u.lessons.length}</div><h2>${esc(u.title)}</h2><p>${esc(u.sub)}</p><div class="ubar"><i style="width:${Math.round(dn/u.lessons.length*100)}%"></i></div></div>${all?'':`<button class="ghostw" data-act="test" data-u="${ui}">Jump ahead</button>`}</div><div class="nodes">`;
  u.lessons.forEach((L,li)=>{
   const id=lid(ui,li),st=S.done[id],locked=g>0&&!S.done[FLAT[g-1].id],cu=!st&&!locked,off=[0,40,60,40,0,-40,-60,-40][li%8];
   const face=locked?ico('lock'):st?ico('star'):(L.items&&L.items[0].jp.length<=2?`<span class="jp">${esc(L.items[0].jp)}</span>`:'<span class="jp">文</span>');
   h+=`<div class="nw" style="transform:translateX(${off}px)">${cu?'<div class="bub">Start</div>':''}<button class="node ${locked?'lock':''} ${cu?'cur':''} ${st?'done':''}" data-act="lesson" data-u="${ui}" data-l="${li}" aria-label="${esc(L.title)}">${face}</button><div class="nl">${esc(L.title)}</div>${st?`<div class="stars">${'★'.repeat(st)}${'☆'.repeat(3-st)}</div>`:''}</div>`;g++});
  h+='</div></section>'});
 return h}
function startFlash(){
 const t=today(),ids=Object.keys(S.srs).filter(i=>ALL[i]);
 if(!ids.length){toast('Finish a lesson first to unlock flashcards');return}
 const due=ids.filter(i=>S.srs[i].d<=t),rest=ids.filter(i=>!due.includes(i));
 const sel=[...shuffle(due),...shuffle(rest)].slice(0,15).map(i=>ALL[i]);
 start({mode:'practice',title:'Flashcards',q:sel.map(it=>({kind:'flash',front:it.jp,item:it,speak:it.type==='kanji'?null:sp(it),ids:[it.id],flip:false,info:''}))})}
function flashRate(ok){const ex=cur();ex.ids.forEach(id=>srsUp(id,ok));trackMiss(ex.ids,ok);if(ok){SES.hits++;SES.first++}else SES.miss++;SES.done++;SES.i++;save();if(SES.i>=SES.q.length)finish();renderSession()}
function startMistakes(){
 const ids=Object.keys(S.mistakes).filter(i=>ALL[i]).sort((a,b)=>S.mistakes[b]-S.mistakes[a]).slice(0,10);
 if(!ids.length){toast('No mistakes waiting. Nice.');return}
 start({mode:'practice',title:'Mistakes',q:ids.map(i=>gen(ALL[i],one(['j2e','e2j','type'])))})}
function viewPractice2(){
 const t=today(),ids=Object.keys(S.srs).filter(i=>ALL[i]),due=ids.filter(i=>S.srs[i].d<=t),mis=Object.keys(S.mistakes).filter(i=>ALL[i]);
 const lv=[0,0,0];ids.forEach(i=>{const b=S.srs[i].b;lv[b<=1?0:b<=3?1:2]++});
 const tile=(ic,h,sub,btn,act)=>`<div class="card tile"><div class="tic">${ico(ic)}</div><h3>${h}</h3><p class="sub">${sub}</p><button class="btn block" data-act="${act}">${btn}</button></div>`;
 return `<div class="wrap" style="max-width:980px"><div><h1 class="h1">Practice</h1><p class="sub">Spaced repetition shows each item just before you forget it.</p></div>
 <div class="tiles">${tile('refresh','Daily review',due.length+' of '+ids.length+' learned items are due.','Start 10-item review','review')}${tile('cards','Flashcards','Flip through due items and rate how well you knew each one.','Start flashcards','flash')}${tile('alert','Mistake notebook',mis.length?mis.length+' items you got wrong are waiting.':'Nothing waiting. Wrong answers collect here.','Clear mistakes','mist')}${tile('pen','Handwriting','Practice writing kana on a guide grid, then check against the model.','Open writing pad','write')}</div>
 <div class="card"><h3 style="margin-bottom:12px">Memory strength</h3><div class="dist">${['Learning','Familiar','Strong'].map((n,i)=>`<div class="drow"><span>${n}</span><div><i style="width:${ids.length?Math.round(lv[i]/ids.length*100):0}%"></i></div><span>${lv[i]}</span></div>`).join('')}</div></div></div>`}
function viewLibrary(){return `<div class="wrap" style="margin-bottom:16px"><div class="seg"><button class="${LIB==='kanji'?'on':''}" data-act="lib" data-s="kanji">Kanji explorer</button><button class="${LIB==='kana'?'on':''}" data-act="lib" data-s="kana">Kana chart</button></div></div>`+(LIB==='kanji'?viewKanji():viewChart())}
/* handwriting */
let WR={set:'h',cur:null};
function openWrite(){
 const m=$('#modal');m.className='on';
 m.innerHTML=`<div class="scrim" data-act="mclose"></div><div class="sheet"><button class="x2" data-act="mclose" aria-label="Close">×</button><h2>Handwriting</h2><div class="seg"><button class="${WR.set==='h'?'on':''}" data-act="wset" data-s="h">Hiragana</button><button class="${WR.set==='k'?'on':''}" data-act="wset" data-s="k">Katakana</button></div><div class="big2" id="wprompt" style="font-size:26px"></div><div class="wrapc"><div class="wglyph" id="wg"></div><canvas id="wc" width="640" height="640"></canvas><div class="wglyph wans off" id="wa"></div></div><div class="wbtn"><button class="ghost" data-act="wclear">Clear</button><button class="ghost" data-act="wguide">Guide</button><button class="btn" data-act="wreveal">Check</button><button class="btn" data-act="wnext">Next</button></div><p class="mut" style="text-align:center">Trace the faint character, then hide the guide and write from memory. Check shows the model in red over your strokes.</p></div>`;
 const c=$('#wc'),x=c.getContext('2d');x.lineCap='round';x.lineJoin='round';x.lineWidth=22;
 const pos=e=>{const r=c.getBoundingClientRect();return[(e.clientX-r.left)*c.width/r.width,(e.clientY-r.top)*c.height/r.height]};
 let d=false;
 c.onpointerdown=e=>{d=true;try{c.setPointerCapture(e.pointerId)}catch(_){}const[a,b]=pos(e);x.strokeStyle=(getComputedStyle(document.documentElement).getPropertyValue('--ink')||'#111').trim();x.beginPath();x.moveTo(a,b);x.lineTo(a+.01,b);x.stroke()};
 c.onpointermove=e=>{if(!d)return;const[a,b]=pos(e);x.lineTo(a,b);x.stroke()};
 c.onpointerup=c.onpointercancel=()=>{d=false};
 wNext()}
function wNext(){
 const pool=[];(WR.set==='h'?[...HIRA,...HIRA2]:[...KATA,...KATA2]).forEach(([n,t])=>kana(t,WR.set).forEach(i=>pool.push(i)));
 WR.cur=WR.fixed||one(pool);WR.fixed=null;const c=$('#wc');if(c)c.getContext('2d').clearRect(0,0,c.width,c.height);
 const g=$('#wg'),a=$('#wa'),pr=$('#wprompt');if(g)g.textContent=WR.cur.jp;if(a){a.textContent=WR.cur.jp;a.classList.add('off')}if(pr)pr.textContent='Write: '+WR.cur.rom}

/* progress charts */
function heatCard(){
 const t=today(),start=t-((t+3)%7)-84,cells=[];let tot=0,act=0;
 for(let d=start;d<=t+(6-((t+3)%7));d++){const xp=d>t?-1:(S.hist[d]||0);if(xp>0){tot+=xp;act++}
  const lvl=xp<=0?0:xp<15?1:xp<40?2:xp<80?3:4;
  const bg=xp<0?'transparent':lvl===0?'var(--soft)':`color-mix(in srgb,var(--pri) ${[0,28,52,76,100][lvl]}%,var(--soft))`;
  const lab=new Date(d*864e5).toLocaleDateString('en',{day:'numeric',month:'short',timeZone:'UTC'});
  cells.push(`<div class="hc" style="background:${bg}"${xp>=0?` title="${lab}: ${xp} XP"`:''}></div>`)}
 return `<div class="card"><h3>Study activity</h3><p class="mut" style="margin:4px 0 12px">${act} active day${act===1?'':'s'} in the last 13 weeks · ${tot} XP</p><div class="heat" role="img" aria-label="Study activity heatmap, ${act} active days in 13 weeks">${cells.join('')}</div><div class="legend" style="margin-top:10px">Less <i></i><i style="background:color-mix(in srgb,var(--pri) 28%,var(--soft))"></i><i style="background:color-mix(in srgb,var(--pri) 52%,var(--soft))"></i><i style="background:color-mix(in srgb,var(--pri) 76%,var(--soft))"></i><i style="background:var(--pri)"></i> More</div></div>`}
function trendCard(){
 const ms=(S.mocks||[]).slice(-10),n=ms.length;
 if(n<2)return `<div class="card"><h3>Mock exam trend</h3><p class="sub" style="margin-top:6px">Take two mock exams on the Course tab to see your trend here.${n===1?' Your first score was '+ms[0].o+'%.':''}</p></div>`;
 const W=320,H=160,L=32,R=12,T=12,B=24,x=i=>L+(W-L-R)*i/(n-1),y=v=>T+(H-T-B)*(1-v/100);
 const grid=[0,25,50,75,100].map(v=>`<line x1="${L}" x2="${W-R}" y1="${y(v).toFixed(1)}" y2="${y(v).toFixed(1)}" stroke="var(--line)" stroke-width="1"/><text x="${L-6}" y="${(y(v)+4).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--mute)">${v}</text>`).join('');
 const pts=ms.map((m,i)=>x(i).toFixed(1)+','+y(m.o).toFixed(1)).join(' ');
 const dots=ms.map((m,i)=>`<circle cx="${x(i).toFixed(1)}" cy="${y(m.o).toFixed(1)}" r="${i===n-1?5:3.5}" fill="var(--pri)" stroke="var(--surface)" stroke-width="2"><title>Mock ${i+1}: ${m.o}%</title></circle>`).join('');
 const last=ms[n-1];
 return `<div class="card"><h3>Mock exam trend</h3><svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Mock exam scores over time. Latest ${last.o} percent." style="margin-top:8px;max-width:460px;display:block">${grid}<line x1="${L}" x2="${W-R}" y1="${y(75).toFixed(1)}" y2="${y(75).toFixed(1)}" stroke="var(--ok)" stroke-width="1.5" stroke-dasharray="4 4"/><text x="${L+4}" y="${(y(75)-5).toFixed(1)}" font-size="10" font-weight="700" fill="var(--mute)">goal 75</text><polyline points="${pts}" fill="none" stroke="var(--pri)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>${dots}<text x="${(x(n-1)-8).toFixed(1)}" y="${(y(last.o)-9).toFixed(1)}" text-anchor="end" font-size="11" font-weight="800" fill="var(--ink)">${last.o}%</text><text x="${L}" y="${H-6}" font-size="10" fill="var(--mute)">oldest</text><text x="${W-R}" y="${H-6}" text-anchor="end" font-size="10" fill="var(--mute)">latest</text></svg><p class="mut" style="margin-top:6px">Scores: ${ms.map(m=>m.o+'%').join(', ')}</p></div>`}
/* onboarding */
function showOnboard(){
 const m=$('#modal');m.className='on';
 m.innerHTML=`<div class="scrim"></div><div class="sheet"><div style="display:flex;align-items:center;gap:12px"><span class="logo jp" style="display:grid;width:44px;height:44px;border-radius:12px;color:#fff;place-items:center;font-size:24px;font-weight:700">言</span><h2>Welcome to Kotoba</h2></div><p class="sub">A few quick questions and I will build your daily plan.</p><div class="obf"><label for="ob-name">Your name</label><input class="inp" id="ob-name" autocomplete="given-name" maxlength="30" value="${esc(S.profile.name||'')}" placeholder="Your name"></div><div class="obf"><label for="ob-date">Exam date (optional)</label><input class="inp" id="ob-date" type="date" value="${esc(S.profile.exam||'')}"><div class="chips"><button class="chip" data-act="obexam" data-d="2026-12-06">6 Dec 2026</button><button class="chip" data-act="obexam" data-d="2027-07-04">4 Jul 2027 (expected)</button><button class="chip" data-act="obexam" data-d="">No date yet</button></div><p class="mut">Confirm real dates for your city on jlpt.jp.</p></div><div class="obf"><label>Target level</label><div class="seg" id="ob-lv">${LVK.map(k=>`<button class="${tgtLv()===k?'on':''}" data-act="obtl" data-k="${k}">${k.toUpperCase()}</button>`).join('')}</div></div><div class="obf"><label>Minutes per day</label><div class="seg" id="ob-mins">${[10,20,30,45].map(v=>`<button class="${S.profile.mins===v?'on':''}" data-act="obmins" data-v="${v}">${v}</button>`).join('')}</div></div><button class="btn block" data-act="obgo">Build my plan</button></div>`}
const VIEWS={dojo:viewDojo,home:viewHome,jlpt:viewJlpt,learn:viewLearn,practice:viewPractice2,kanji:viewLibrary,chart:viewChart,profile:viewProfile};
function renderMain(){renderNav();$('#main').innerHTML=VIEWS[view]();afterRender(view);if(view==='home')loadKOD();if(view==='kanji'&&LIB==='kanji'&&!KV.list&&!KV.err)loadGrade(KV.grade)}
function go(v){view=v;RESET=false;renderMain();window.scrollTo(0,0)}

/* ---------- kanjiapi.dev ---------- */
const API='https://kanjiapi.dev/v1',CACHE={};
async function api(p){if(CACHE[p])return CACHE[p];const r=await fetch(API+p);if(!r.ok)throw new Error(r.status);const j=await r.json();CACHE[p]=j;return j}
async function loadGrade(g){KV.grade=g;KV.list=null;KV.err=false;const el=$('#kg');if(el)el.innerHTML=kgridHTML();
 try{const l=await api('/kanji/grade-'+g);if(KV.grade!==g)return;KV.list=l}catch(e){if(KV.grade!==g)return;KV.err=true}
 const e2=$('#kg');if(e2)e2.innerHTML=kgridHTML()}
async function loadKOD(){
 let k,d=null;
 try{const l=await api('/kanji/grade-1');k=l[today()%l.length];d=await api('/kanji/'+encodeURIComponent(k))}catch(e){const f=KJ[today()%KJ.length];k=f.jp;d={meanings:[f.en]}}
 const box=$('#kod');if(!box)return;
 box.innerHTML=`<button class="kod" data-act="kj" data-k="${esc(k)}"><span class="jp kbig">${esc(k)}</span><span><b>Kanji of the day</b><br><span style="font-weight:800">${esc((d.meanings||[]).slice(0,3).join(', '))}</span><br><span class="mut">Tap for readings and words</span></span></button>`}
async function openKanji(k){
 const m=$('#modal');m.className='on';
 m.innerHTML=`<div class="scrim" data-act="mclose"></div><div class="sheet"><button class="x2" data-act="mclose" aria-label="Close">×</button><div id="kd" class="mut">Loading…</div></div>`;
 try{
  const[d,w]=await Promise.all([api('/kanji/'+encodeURIComponent(k)),api('/words/'+encodeURIComponent(k)).catch(()=>[])]);
  const kun=d.kun_readings||[],on=d.on_readings||[],rd=(kun[0]||on[0]||'').replace(/[.\-]/g,'');
  const have=!!S.custom['c:'+k]||KJ.some(x=>x.jp===k);
  const words=w.slice(0,6).map(x=>{const v=(x.variants&&x.variants[0])||{};const g=((x.meanings&&x.meanings[0]&&x.meanings[0].glosses)||[]).slice(0,2).join('; ');return`<li><span class="jp">${esc(v.written||'')}</span> <span class="mut">${esc(v.pronounced||'')}</span> ${esc(g)}</li>`}).join('');
  const el=$('#kd');if(!el)return;
  el.className='';el.style.display='grid';el.style.gap='14px';
  el.innerHTML=`<div class="kdet"><div class="jp">${esc(k)}</div><div><h2>${esc((d.meanings||[]).slice(0,3).join(', '))}</h2><div class="mut">${d.stroke_count||'?'} strokes${d.grade?' · grade '+d.grade:''}${d.jlpt?' · JLPT N'+d.jlpt:''}</div></div></div><dl class="kv"><dt>Kun readings</dt><dd class="jp">${esc(kun.join('、')||'None')}</dd><dt>On readings</dt><dd class="jp">${esc(on.join('、')||'None')}</dd></dl>${words?`<div><div class="sec" style="margin:0 0 6px">Common words</div><ul class="words">${words}</ul></div>`:''}<div style="display:flex;gap:10px;flex-wrap:wrap">${rd?`<button class="btn" data-act="say" data-t="${esc(rd)}">Listen</button>`:''}<button class="btn hot" data-act="kadd" data-k="${esc(k)}" data-r="${esc(rd)}" data-m="${esc((d.meanings||[]).slice(0,3).join(', '))}" ${have?'disabled':''}>${have?'In your practice':'Add to practice'}</button></div>`;
 }catch(e){const el=$('#kd');if(el){el.textContent='Could not load details for this kanji. Check the character and your connection, then try again.'}}}

/* ---------- events ---------- */
const H={
 nav:t=>go(t.dataset.v),
 lesson:t=>{const ui=+t.dataset.u,li=+t.dataset.l,g=FLAT.findIndex(f=>f.ui===ui&&f.li===li);if(g>0&&!S.done[FLAT[g-1].id]){toast('Finish the previous lesson, or use Jump ahead on the unit.');return}startLesson(ui,li)},
 test:t=>startTest(+t.dataset.u),
 review:()=>startPractice(),
 say:t=>say(t.dataset.t,t.dataset.r?+t.dataset.r:undefined),
 sayd:t=>{const e=cur();if(e&&e.dlg)sayDialog(e.dlg,t.dataset.r?+t.dataset.r:undefined)},
 quit:()=>{SES.quit=true;renderSession()},qno:()=>{SES.quit=false;renderSession()},qyes:()=>exitSession(),
 inext:()=>{SES.ii++;if(SES.ii>=SES.intro.length)SES.phase='q';renderSession()},
 opt:t=>{const ex=cur();if(ex.checked)return;ex.sel=+t.dataset.i;renderSession()},
 check:()=>check(),
 skip:()=>{const ex=cur();if(ex.checked)return;if(ex.kind==='match'){ex.miss=Math.max(1,ex.miss);ex.done=ex.L.map(x=>x.id);grade(true)}else{if(ex.kind==='type')ex.val='';grade(false)}},
 cont:()=>cont(),exit:()=>exitSession(),
 pick:t=>{const ex=cur();if(ex.checked)return;ex.picked.push(+t.dataset.i);renderSession()},
 unpick:t=>{const ex=cur();if(ex.checked)return;ex.picked.splice(+t.dataset.i,1);renderSession()},
 mL:t=>{const ex=cur();if(ex.checked)return;ex.selL=+t.dataset.i;say(ex.L[ex.selL].t);renderSession()},
 mR:t=>{const ex=cur();if(ex.checked||ex.selL==null)return;const l=ex.L[ex.selL],i=+t.dataset.i,r=ex.R[i];
  if(l.id===r.id){ex.done.push(l.id);ex.selL=null;tone(700,.08);if(ex.done.length===ex.L.length){grade(true);return}renderSession()}
  else{ex.miss++;ex.flash={l:ex.selL,r:i};ex.selL=null;sfx(false);renderSession();setTimeout(()=>{ex.flash=null;if(cur()===ex&&!ex.checked)renderSession()},450)}},
 jlv:t=>{JL.lv=t.dataset.k;renderMain()},
 lv:t=>{if(!isFree(t.dataset.k,+t.dataset.u)){paywall();return}startLv(t.dataset.k,+t.dataset.u,+t.dataset.l)},
 mock5:t=>{const k=LV[t.dataset.k]?t.dataset.k:tgtLv();if(!mockFree(k,false)){paywall();return}startMockL(k,false)},
 mockf:t=>{const k=LV[t.dataset.k]?t.dataset.k:tgtLv();if(!mockFree(k,true)){paywall();return}startMockL(k,true)},
 drill:t=>{const k=LV[t.dataset.k]?t.dataset.k:tgtLv();if(!drillFree(k)){paywall();return}startDrillL(k,t.dataset.s)},
 drillg:()=>{const k=tgtLv();if(!drillFree(k)){paywall();return}startDrillL(k,'Grammar')},
 unlock:()=>{const v=(($('#lic')||{}).value||($('#lic2')||{}).value||'').trim();if(codeOk(v)){S.pro=true;save();H.mclose();toast('Unlocked. Enjoy the full course.');renderMain()}else toast('That code is not valid. Check it and try again.')},
 next:()=>{const n=nextAny();if(!n){toast('Course finished. Try a mock exam.');return}if(n.kind==='k')startLesson(n.ui,n.li);else{if(!isFree(n.k,n.ui)){paywall();return}startLv(n.k,n.ui,n.li)}},
 flash:()=>startFlash(),mist:()=>startMistakes(),write:()=>openWrite(),
 flip:()=>{const ex=cur();if(ex.flip)return;ex.flip=true;renderSession();if(ex.speak)say(ex.speak)},
 fa:()=>flashRate(false),fg:()=>flashRate(true),
 lib:t=>{LIB=t.dataset.s;renderMain()},
 wset:t=>{WR.set=t.dataset.s;openWrite()},
 wclear:()=>{const c=$('#wc');if(c)c.getContext('2d').clearRect(0,0,c.width,c.height)},
 wguide:()=>{const g=$('#wg');if(g)g.classList.toggle('off')},
 wreveal:()=>{const a=$('#wa');if(a)a.classList.remove('off');if(WR.cur)say(WR.cur.jp)},
 wnext:()=>wNext(),
 ptl:t=>{S.profile.lv=t.dataset.k;JL.lv=null;save();renderMain()},
 obtl:t=>{S.profile.lv=t.dataset.k;document.querySelectorAll('#ob-lv button').forEach(b=>b.classList.toggle('on',b===t))},
 pmins:t=>{S.profile.mins=+t.dataset.v;save();renderMain()},
 obexam:t=>{const i=$('#ob-date');if(i)i.value=t.dataset.d},
 obmins:t=>{S.profile.mins=+t.dataset.v;document.querySelectorAll('#ob-mins button').forEach(b=>b.classList.toggle('on',b===t))},
 obgo:()=>{const n=$('#ob-name'),d=$('#ob-date');S.profile.name=((n&&n.value)||'').trim().slice(0,30);S.profile.exam=(d&&d.value)||'';S.profile.ob=true;save();H.mclose();renderMain()},
 kgrade:t=>loadGrade(+t.dataset.g),
 beep:()=>{S.sound=true;tone(660,.15);tone(880,.2,.15)},
 recheck:()=>{loadVoices();renderMain();toast(jaVoice?'Japanese voice found':'Still no Japanese voice')},
 kj:t=>openKanji(t.dataset.k),
 mclose:()=>{const m=$('#modal');m.className='';m.innerHTML=''},
 kadd:t=>{const k=t.dataset.k;S.custom['c:'+k]={id:'c:'+k,jp:k,rom:t.dataset.r,en:t.dataset.m,type:'kanji'};S.srs['c:'+k]={b:0,d:today()};indexAll();save();t.disabled=true;t.textContent='In your practice';toast('Added to your review deck')},
 cscript:t=>{CS=t.dataset.s;renderMain()},
 goal:t=>{S.goal=+t.dataset.g;save();renderMain()},
 theme:t=>{S.theme=t.dataset.t||null;applyTheme();save();renderMain()},
 sound:t=>{S.sound=t.dataset.v==='1';save();renderMain()},
 reset:()=>{if(!RESET){RESET=true;renderMain();return}try{localStorage.removeItem(LS)}catch(e){}S={xp:0,streak:0,last:null,done:{},srs:{},hist:{},goal:30,answered:0,correct:0,theme:null,sound:true,custom:{},mocks:[],profile:{name:"",exam:"",mins:20,ob:false},mistakes:{},log:{},pro:S.pro};RESET=false;applyTheme();indexAll();renderMain();toast('Progress erased')}
};
document.addEventListener('click',e=>{const t=e.target.closest('[data-act]');if(!t||t.disabled)return;const f=H[t.dataset.act];if(f)f(t,e)});
document.addEventListener('submit',e=>{if(e.target.id==='ksearch'){e.preventDefault();const m=($('#ks').value||'').match(/[一-鿿]/);if(!m){toast('Enter a kanji character, for example 学');return}openKanji(m[0])}});
document.addEventListener('input',e=>{if(e.target.id==='ti'){const c=$('#chk');if(c)c.disabled=!e.target.value.trim()}});
document.addEventListener('keydown',e=>{
 if(!SES||SES.quit)return;
 if(e.key==='Enter'){if(e.target.closest&&e.target.closest('button'))return;e.preventDefault();
  if(SES.phase==='q'){const ex=cur();if(ex.checked)cont();else if(ex.kind!=='match')check()}
  else if(SES.phase==='intro')H.inext();else if(SES.phase==='done')exitSession();return}
 if(SES.phase==='q'&&/^[1-4]$/.test(e.key)){const ex=cur();if(ex.kind==='mc'&&!ex.checked&&ex.opts[+e.key-1]!==undefined){ex.sel=+e.key-1;renderSession()}}});

document.addEventListener('change',e=>{const id=e.target.id;if(id==='pf-exam'){S.profile.exam=e.target.value;save();renderMain()}else if(id==='pf-name'){S.profile.name=e.target.value.trim().slice(0,30);save();toast('Saved')}});
