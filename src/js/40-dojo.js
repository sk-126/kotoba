/* ---------- Kana Dojo: chart, detail sheet, writing, three timed games ---------- */
const MNEM={'あ':'A person with arms wide, saying "ah!"','い':'Two eels standing side by side: "ee"','う':'A little U-shaped tube: "oo"','え':'An exotic bird with a fancy tail: "eh"','お':'A person on one leg holding a ball: "oh"',
'か':'A karate chop with a kick: "ka"','き':'A key with two teeth: "key"','く':'A cuckoo\'s beak: "ku"','け':'A keg tipped on its side: "ke"','こ':'Two koi fish lying one above the other: "ko"',
'さ':'A samurai swinging a sword: "sa"','し':'A fishing hook, with a "she" on the line','す':'A curl of noodles on a swing: "su"','せ':'A person bending to say "say cheese"','そ':'A zigzag of sewing thread: "so"',
'た':'It reads like the letters t + a: "ta"','ち':'A cheerleader with a ribbon: "chi"','つ':'A tsunami wave rolling in: "tsu"','て':'A telephone pole with a bent arm: "te"','と':'A toe with a thorn stuck in it: "to"',
'な':'A nun kneeling by a cross: "na"','に':'A knee, bent: "ni"','ぬ':'Noodles tangled in a loop: "nu"','ね':'A cat (neko) curled up with its tail: "ne"','の':'A "no entry" sign swirl: "no"',
'は':'A person laughing: "ha ha"','ひ':'A smiling mouth: "hee hee"','ふ':'Mount Fuji with a cloud: "fu"','へ':'A hill. Say "heh": "he"','ほ':'Santa at the end of "ho ho ho"',
'ま':'A mother with a baby on her back: "ma"','み':'The "mi" of do-re-mi, with the number 21 hidden in it','む':'A cow\'s horns and tail: "moo"','め':'An eye: "me"','も':'A fish hook with "more" worms: "mo"',
'や':'A yak with horns: "ya"','ゆ':'A fish making a U-turn: "you"','よ':'A yo-yo on a string: "yo"',
'ら':'A rabbit sitting up: "ra"','り':'Two reeds beside a river: "ri"','る':'A route with a loop: "ru"','れ':'A person kneeling, ready: "re"','ろ':'A road bending left, like る opened up: "ro"',
'わ':'A "wow" person with a pointed hat: "wa"','を':'Sounds like "o". Used almost only as the object marker','ん':'Like a lowercase h or n. The only sound with no vowel'};
const CONF={'ぬ':'め','め':'ぬ','ね':'れ・わ','れ':'ね・わ','わ':'ね・れ','る':'ろ','ろ':'る','は':'ほ','ほ':'は','さ':'き','き':'さ','い':'り','り':'い','こ':'に','に':'こ','あ':'お','お':'あ','ソ':'ン','ン':'ソ','シ':'ツ','ツ':'シ','ウ':'ワ','ワ':'ウ'};
const BASEH=[];HIRA.forEach(([n,t])=>kana(t,'h').forEach(i=>BASEH.push(i.jp)));
const BASEK=[];KATA.forEach(([n,t])=>kana(t,'k').forEach(i=>BASEK.push(i.jp)));
const k2h=c=>{const i=BASEK.indexOf(c);return i>=0?BASEH[i]:null};
S.dojo=S.dojo||{best:{}};S.dojo.best=S.dojo.best||{};
const DJ={sc:'h',moment:null,sprint:null};
const kanaPool=sc=>{const out=[];const sets=sc==='k'?[[KATA,KATA2,'k']]:sc==='m'?[[HIRA,HIRA2,'h'],[KATA,KATA2,'k']]:[[HIRA,HIRA2,'h']];
 sets.forEach(([a,b,s])=>[a,b].forEach(r=>r.forEach(([n,t])=>kana(t,s).forEach(i=>out.push(i)))));return out};
function viewDojo(){
 const sc=DJ.sc==='k'?'k':'h',R=sc==='h'?[HIRA,HIRA2]:[KATA,KATA2];
 if(!DJ.moment)DJ.moment=one(kanaPool('h'));
 const m=DJ.moment,hh=m.script==='k'?k2h(m.jp):m.jp;
 const rows=a=>a.map(([n,s])=>{const it=kana(s,sc),cells=it.map(x=>{const mm=S.srs[x.id]&&S.srs[x.id].b>=3;return`<button class="kcell ${mm?'m':''}" data-act="kdet" data-id="${esc(x.id)}" aria-label="${esc(x.jp+' '+x.rom)}"><span class="jp">${x.jp}</span><small>${x.rom}</small></button>`});while(cells.length<5)cells.push('<span class="kcell e"></span>');return`<div class="crow2">${cells.join('')}</div>`}).join('');
 const bs=S.dojo.best,ear=canListen();
 const mode=(id,j,t,s)=>`<button class="dmode" data-act="game" data-m="${id}"><span class="dj jp">${j}</span><b>${t}</b><span class="s">${s}</span><span class="best">${bs[id]?'Best '+bs[id]:'No score yet'}</span></button>`;
 const known=[...BASEH,...BASEK].filter(c=>{const id=(BASEH.includes(c)?'h:':'k:')+c;return S.srs[id]&&S.srs[id].b>=3}).length;
 return `<div class="dojo"><div><h1 class="h1">Kana Dojo</h1><p class="sub">Learn every character by sight, sound and hand. ${known} of 92 basic kana feel solid.</p></div>
 <div class="card kmoment"><button class="kbigc jp" data-act="kdet" data-id="${esc(m.id)}" aria-label="Open ${esc(m.jp)}"><span>${m.jp}</span></button><div style="display:grid;gap:6px"><div class="mut">Kana of the moment</div><div class="big">${esc(m.rom)}</div><p class="mut">${esc(MNEM[hh]||'')}</p><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn sm" data-act="say" data-t="${esc(m.jp)}">${ico('vol')} Hear it</button><button class="ghost" data-act="kmoment">Another</button></div></div></div>
 <div class="seg" role="tablist" aria-label="Script"><button class="${DJ.sc==='h'?'on':''}" data-act="dsc" data-s="h">Hiragana</button><button class="${DJ.sc==='k'?'on':''}" data-act="dsc" data-s="k">Katakana</button><button class="${DJ.sc==='m'?'on':''}" data-act="dsc" data-s="m">Mixed</button></div>
 <div class="dgrid">${mode('sprint','あ','Sprint','60 seconds. See a kana, pick its sound. Chain correct answers for a combo.')}${mode('rev','a','Reverse','See the sound, find the kana. Builds recall for writing.')}${mode('ear','♪',ear?'Ear training':'Ear training (needs a Japanese voice)','Listen, then pick the character you heard.')}<button class="dmode" data-act="write"><span class="dj jp">書</span><b>Writing pad</b><span class="s">Trace the guide, hide it, then write from memory.</span><span class="best">Hand practice</span></button></div>
 <div class="card"><h3 style="margin-bottom:4px">${sc==='h'?'Hiragana':'Katakana'} chart</h3><p class="mut" style="margin-bottom:6px">Tap a character for its sound, memory picture and look-alikes. Green means you know it well.</p><div class="chart2"><div class="sec">Basic</div>${rows(R[0])}<div class="sec">Voiced</div>${rows(R[1])}</div></div></div>`}
function kanaItem(id){return ALL[id]||kanaPool('m').find(x=>x.id===id)}
function openKana(id){
 const x=kanaItem(id);if(!x)return;const hh=x.script==='k'?k2h(x.jp):x.jp,cf=CONF[x.jp];
 const m=$('#modal');m.className='on';
 m.innerHTML=`<div class="scrim" data-act="mclose"></div><div class="sheet"><button class="x2" data-act="mclose" aria-label="Close">×</button><div class="kdet"><div class="kb jp"><span>${x.jp}</span></div><div class="rom">${esc(x.rom)}</div><div class="mut">${x.script==='k'?'Katakana'+(hh?' form of '+hh:''):'Hiragana'}</div>
 <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center"><button class="btn" data-act="say" data-t="${esc(x.jp)}">${ico('vol')} Hear it</button><button class="ghost" data-act="say" data-t="${esc(x.jp)}" data-r="0.5">Slow</button><button class="ghost" data-act="kwrite" data-id="${esc(x.id)}">Write it</button></div>
 ${MNEM[hh]?`<div class="mnem"><b>Memory picture</b>${esc(MNEM[hh])}</div>`:''}${cf?`<div class="confuse">Do not mix up with <span class="jp">${esc(cf)}</span></div>`:''}<p class="mut">Memory pictures are study aids, not etymology.</p></div></div>`;
 say(x.jp)}
/* ----- games ----- */
let G=null;
const gEl=()=>$('#game');
function startGame(mode){
 if(mode==='ear'&&!canListen()){toast('Ear training needs a Japanese voice. See Progress, then Sound test.');return}
 const pool=kanaPool(DJ.sc);
 G={mode,pool,t:60,score:0,hits:0,miss:0,combo:0,maxc:0,cur:null,locked:false,last:null,tid:null};
 gEl().classList.add('on');nextG();G.tid=setInterval(gTick,1000)}
function gTick(){if(!G)return;G.t--;const b=$('#gbar'),bw=$('#gtb');if(b)b.style.transform='scaleX('+Math.max(0,G.t/60)+')';if(bw)bw.classList.toggle('low',G.t<=10);if(G.t<=0)endG()}
function nextG(){
 let it;do{it=one(G.pool)}while(G.last&&it.id===G.last&&G.pool.length>1);G.last=it.id;
 const rev=G.mode!=='sprint';
 const key=rev?(x=>x.jp):(x=>x.rom),seen=new Set([key(it)]),opts=[it];
 for(const p of shuffle(G.pool)){const k=key(p);if(!seen.has(k)){seen.add(k);opts.push(p);if(opts.length===4)break}}
 G.cur={it,opts:shuffle(opts),rev};G.locked=false;renderG();
 if(G.mode==='ear')say(it.jp)}
function renderG(){
 const c=G.cur,it=c.it,mult=1+Math.min(4,Math.floor(G.combo/5));
 const prompt=G.mode==='sprint'?`<span class="jp">${it.jp}</span>`:G.mode==='rev'?`<span style="font-family:var(--f-ui);font-size:.6em">${esc(it.rom)}</span>`:`<button data-act="gsay" aria-label="Play again">${ico('vol')}</button>`;
 gEl().innerHTML=`<div class="ghead"><button class="x" data-act="gquit" aria-label="Quit">×</button><div class="tbar" id="gtb"><i id="gbar" style="transform:scaleX(${Math.max(0,G.t/60)})"></i></div><div class="gscore" id="gsc">${G.score}</div></div>
 <div class="gbody"><div class="gcombo" id="gcombo">${G.combo>=2?ico('flame')+' '+G.combo+' in a row'+(mult>1?' · x'+mult:''):'&nbsp;'}</div><div class="gprompt" id="gpr" style="${G.mode==='ear'?'font-size:90px':''}">${prompt}</div>
 <div class="gopts">${c.opts.map((o,i)=>`<button class="gopt ${c.rev?'jp':''}" data-act="gans" data-i="${i}">${c.rev?o.jp:esc(o.rom)}</button>`).join('')}</div></div>`}
function answerG(i){
 if(!G||G.locked)return;G.locked=true;const c=G.cur,pick=c.opts[i],ok=pick.id===c.it.id;
 const btns=[...gEl().querySelectorAll('.gopt')];
 srsUp(c.it.id,ok);trackMiss([c.it.id],ok);save();
 if(ok){G.hits++;G.combo++;G.maxc=Math.max(G.maxc,G.combo);const mult=1+Math.min(4,Math.floor((G.combo-1)/5));G.score+=10*mult;btns[i].classList.add('ok');sfx(true);
  const pr=$('#gpr');if(pr){pr.classList.remove('pop');void pr.offsetWidth;pr.classList.add('pop')}
  const fx=document.createElement('div');fx.className='fx';fx.textContent='+'+10*mult;fx.style.left=(30+Math.random()*40)+'%';fx.style.top='28%';gEl().querySelector('.gbody').appendChild(fx);
  const sc=$('#gsc');if(sc)sc.textContent=G.score;setTimeout(()=>{if(G)nextG()},260)}
 else{G.miss++;G.combo=0;G.t=Math.max(0,G.t-3);btns[i].classList.add('bad');btns.forEach((b,j)=>{if(c.opts[j].id===c.it.id)b.classList.add('ok')});sfx(false);
  const pr=$('#gpr');if(pr){pr.classList.remove('shk');void pr.offsetWidth;pr.classList.add('shk')}
  say(c.it.jp);setTimeout(()=>{if(G){if(G.t<=0)endG();else nextG()}},900)}}
function endG(){
 if(!G)return;clearInterval(G.tid);const g=G;G=null;
 const tot=g.hits+g.miss,acc=tot?Math.round(g.hits/tot*100):0,old=S.dojo.best[g.mode]||0,nb=g.score>old;
 if(nb)S.dojo.best[g.mode]=g.score;const xp=Math.min(30,Math.round(g.score/15));if(xp>0)award(xp);save();
 const nm={sprint:'Sprint',rev:'Reverse',ear:'Ear training'}[g.mode];
 gEl().innerHTML=`<div class="ghead"><button class="x" data-act="gclose" aria-label="Close">×</button><div style="flex:1"></div></div><div class="gbody"><div class="gres">${ensoSVG('闘')}<div class="mut">${nm} · time is up</div><div class="bigs">${g.score}</div>${nb?'<div class="pill" style="background:var(--gold);color:var(--on-gold)">New best</div>':`<div class="mut">Best ${old}</div>`}
 <div class="row"><div class="st"><b>${acc}%</b><span>Accuracy</span></div><div class="st"><b>${g.maxc}</b><span>Best streak</span></div><div class="st"><b>+${xp}</b><span>XP</span></div></div>
 <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center"><button class="btn okb" data-act="game" data-m="${g.mode}">Play again</button><button class="ghost" data-act="gclose">Back to Dojo</button></div></div></div>`;
 if(nb)petalBurst(gEl())}
function closeG(){if(G){clearInterval(G.tid);G=null}gEl().classList.remove('on');gEl().innerHTML='';if(view==='dojo')renderMain()}
document.addEventListener('keydown',e=>{if(!G||G.locked)return;if(/^[1-4]$/.test(e.key))answerG(+e.key-1)});
Object.assign(H,{
 dsc:t=>{DJ.sc=t.dataset.s;renderMain()},
 kmoment:()=>{DJ.moment=one(kanaPool('h'));renderMain()},
 kdet:t=>openKana(t.dataset.id),
 kwrite:t=>{const x=kanaItem(t.dataset.id);WR.set=x.script;WR.fixed=x;openWrite()},
 game:t=>startGame(t.dataset.m),
 gans:t=>answerG(+t.dataset.i),
 gsay:()=>{if(G&&G.cur)say(G.cur.it.jp)},
 gquit:closeG,gclose:closeG});
