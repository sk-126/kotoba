/* ---------- level registry: every JLPT level N5..N1 is described the same way ---------- */
const LVK=['n5','n4','n3','n2','n1'];
const LV={};
function regLv(k,units){const F=[],G=[],R=[],D=[];
 units.forEach((u,ui)=>u.lessons.forEach((L,li)=>{F.push({ui,li,id:k+'u'+ui+'l'+li});(L.gram||[]).forEach(q=>G.push(q));if(L.read)L.read.qs.forEach(q=>R.push([L.read,q]));if(L.listen)L.listen.forEach(d=>D.push(d))}));
 LV[k]={k,n:k.toUpperCase(),lv:+k[1],units,F,G,R,D}}
regLv('n5',N5);regLv('n4',N4);regLv('n3',N3);regLv('n2',N2);regLv('n1',N1);
const lid=(ui,li)=>'u'+ui+'l'+li;
const ALL={};let ALLL=[];
function indexAll(){Object.keys(ALL).forEach(k=>delete ALL[k]);UNITS.forEach(u=>u.lessons.forEach(L=>(L.items||[]).forEach(i=>ALL[i.id]=i)));LVK.forEach(k=>LV[k].units.forEach(u=>u.lessons.forEach(L=>(L.items||[]).forEach(i=>ALL[i.id]=i))));Object.values(S.custom).forEach(i=>ALL[i.id]=i);ALLL=Object.values(ALL)}
indexAll();
const EXTRA=['が','も','の','へ','で','と'];
const ALLSENT=[];UNITS.forEach(u=>u.lessons.forEach(L=>(L.sentences||[]).forEach(s=>ALLSENT.push(s))));
const lvDone=k=>LV[k].F.filter(f=>S.done[f.id]).length;
const tgtLv=()=>LVK.includes(S.profile.lv)?S.profile.lv:'n5';
