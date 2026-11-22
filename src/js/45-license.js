/* ---------- free preview and unlock ---------- */
/* Free: all kana lessons, Dojo, Library, the first two N5 units, N5 quick mock and N5 drills.
   Unlocked: every unit of N5 to N1, all full mocks and drills. Codes are checked in the app.
   This is a deterrent, not real security: a server is needed to stop determined copying. */
const AL='ABCDEFGHJKMNPQRSTUVWXYZ23456789';
function licHash(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)>>>0}let o='';for(let i=0;i<4;i++){o+=AL[h%AL.length];h=Math.floor(h/AL.length)}return o}
function codeOk(c){const m=/^KOTO-([A-Z2-9]{4})-([A-Z2-9]{4})$/.exec(String(c||'').trim().toUpperCase());return !!m&&licHash(LIC_SALT+m[1])===m[2]}
const isPro=()=>FULL||!!S.pro;
const isFree=(k,ui)=>isPro()||(k==='n5'&&ui<2);
const mockFree=(k,full)=>isPro()||(k==='n5'&&!full);
const drillFree=k=>isPro()||k==='n5';
function perks(){return `<ul class="perks"><li>All 5 levels: N5, N4, N3, N2 and N1</li><li>Full mock exams with section scores</li><li>Readiness estimate for every level</li><li>All future content updates</li></ul>`}
function unlockCard(){if(isPro())return '';
 return `<div class="card" style="display:grid;gap:10px"><h3>Unlock Kotoba</h3><p class="sub">You are on the free preview: all kana lessons, the first two N5 units and a quick N5 mock.</p>${perks()}<div style="display:flex;gap:8px;flex-wrap:wrap"><input class="inp" id="lic2" placeholder="KOTO-XXXX-XXXX" autocapitalize="characters" autocomplete="off" style="flex:1;min-width:160px"><button class="btn" data-act="unlock">Unlock</button></div>${PAY_URL?`<a class="btn block" href="${esc(PAY_URL)}" target="_blank" rel="noopener">Get access code · ${esc(PRICE)}</a>`:'<p class="mut">Ask the seller for an access code.</p>'}</div>`}
function paywall(){
 const m=$('#modal');m.className='on';
 m.innerHTML=`<div class="scrim" data-act="mclose"></div><div class="sheet"><button class="x2" data-act="mclose" aria-label="Close">×</button><h2>Unlock the full course</h2><p class="sub">This part is not in the free preview.</p>${perks()}<div class="obf"><label for="lic">Access code</label><input class="inp" id="lic" placeholder="KOTO-XXXX-XXXX" autocapitalize="characters" autocomplete="off"></div><button class="btn block" data-act="unlock">Unlock</button>${PAY_URL?`<a class="ghost block" href="${esc(PAY_URL)}" target="_blank" rel="noopener" style="text-align:center">Get an access code · ${esc(PRICE)}</a>`:'<p class="mut">Ask the seller for an access code.</p>'}</div>`}
