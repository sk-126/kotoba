/* ---------- course data ---------- */
const kana=(s,sc)=>s.split(',').map(x=>{const p=x.trim().split(' ');return{id:sc+':'+p[0],jp:p[0],rom:p[1],en:p[1],type:'kana',script:sc}});
const HIRA=[["Vowels","あ a,い i,う u,え e,お o"],["K row","か ka,き ki,く ku,け ke,こ ko"],["S row","さ sa,し shi,す su,せ se,そ so"],["T row","た ta,ち chi,つ tsu,て te,と to"],["N row","な na,に ni,ぬ nu,ね ne,の no"],["H row","は ha,ひ hi,ふ fu,へ he,ほ ho"],["M row","ま ma,み mi,む mu,め me,も mo"],["Y row","や ya,ゆ yu,よ yo"],["R row","ら ra,り ri,る ru,れ re,ろ ro"],["W and N","わ wa,を wo,ん n"]];
const HIRA2=[["G row","が ga,ぎ gi,ぐ gu,げ ge,ご go"],["Z row","ざ za,じ ji,ず zu,ぜ ze,ぞ zo"],["D row","だ da,で de,ど do"],["B row","ば ba,び bi,ぶ bu,べ be,ぼ bo"],["P row","ぱ pa,ぴ pi,ぷ pu,ぺ pe,ぽ po"]];
const KATA=[["Vowels","ア a,イ i,ウ u,エ e,オ o"],["K row","カ ka,キ ki,ク ku,ケ ke,コ ko"],["S row","サ sa,シ shi,ス su,セ se,ソ so"],["T row","タ ta,チ chi,ツ tsu,テ te,ト to"],["N row","ナ na,ニ ni,ヌ nu,ネ ne,ノ no"],["H row","ハ ha,ヒ hi,フ fu,ヘ he,ホ ho"],["M row","マ ma,ミ mi,ム mu,メ me,モ mo"],["Y row","ヤ ya,ユ yu,ヨ yo"],["R row","ラ ra,リ ri,ル ru,レ re,ロ ro"],["W and N","ワ wa,ヲ wo,ン n"]];
const KATA2=[["G row","ガ ga,ギ gi,グ gu,ゲ ge,ゴ go"],["Z row","ザ za,ジ ji,ズ zu,ゼ ze,ゾ zo"],["D row","ダ da,デ de,ド do"],["B row","バ ba,ビ bi,ブ bu,ベ be,ボ bo"],["P row","パ pa,ピ pi,プ pu,ペ pe,ポ po"]];
const V=(a,t)=>a.split(';').map(x=>{const p=x.split('|');return{id:'v:'+p[0],jp:p[0],rom:p[1],en:p[2],type:t||'vocab'}});
const KJ=V('日|nichi / hi|Sun, day;月|getsu / tsuki|Moon, month;火|ka / hi|Fire;水|sui / mizu|Water;木|moku / ki|Tree;金|kin / kane|Gold, money;土|do / tsuchi|Earth, soil;人|jin / hito|Person;大|dai / ookii|Big;小|shou / chiisai|Small;山|san / yama|Mountain;川|sen / kawa|River;口|kou / kuchi|Mouth;目|moku / me|Eye;手|shu / te|Hand','kanji').map(k=>(k.id='k:'+k.jp,k));
const kl=(t,a)=>({title:t,items:a});
const SENT=[
 {tip:["です (desu) works like 'is / am / are'.","は (wa) marks the topic: 'As for me…'.","Japanese puts the verb or です last."],s:[
  [['わたし','は','がくせい','です'],'I am a student.'],[['これ','は','みず','です'],'This is water.'],[['あれ','は','えき','です'],'That is a station.'],[['わたし','は','インドじん','です'],'I am Indian.'],[['せんせい','は','ともだち','です'],'The teacher is my friend.']]},
 {tip:["を (o) marks the thing you act on: みずを のみます.","に (ni) marks where you go: がっこうに いきます.","ます (masu) makes a verb polite."],s:[
  [['みず','を','のみ','ます'],'I drink water.'],[['ごはん','を','たべ','ます'],'I eat rice.'],[['がっこう','に','いき','ます'],'I go to school.'],[['えき','に','いき','ます'],'I go to the station.'],[['さかな','を','かい','ます'],'I buy fish.']]},
 {tip:["Add か (ka) to the end to make a question.","どこ (doko) = where, なん (nan) = what."],s:[
  [['トイレ','は','どこ','です','か'],'Where is the toilet?'],[['えき','は','どこ','です','か'],'Where is the station?'],[['これ','は','なん','です','か'],'What is this?'],[['おちゃ','を','のみ','ます','か'],'Do you drink tea?'],[['ともだち','は','がくせい','です','か'],'Is your friend a student?']]}
];
const UNITS=[
 {title:'Hiragana',sub:'The 46 core sounds of Japanese',lessons:HIRA.map(([n,s])=>kl(n,kana(s,'h')))},
 {title:'Hiragana Voiced',sub:'Add two dots or a circle: が ざ だ ば ぱ',lessons:HIRA2.map(([n,s])=>kl(n,kana(s,'h')))},
 {title:'Katakana',sub:'For loanwords: ホテル, パン, トイレ',lessons:KATA.map(([n,s])=>kl(n,kana(s,'k')))},
 {title:'Katakana Voiced',sub:'ガ ザ ダ バ パ',lessons:KATA2.map(([n,s])=>kl(n,kana(s,'k')))},
 {title:'Greetings',sub:'Your first real Japanese',lessons:[kl('Hello and thanks',V('こんにちは|konnichiwa|Hello;おはよう|ohayou|Good morning;こんばんは|konbanwa|Good evening;ありがとう|arigatou|Thank you;さようなら|sayounara|Goodbye')),kl('Polite phrases',V('すみません|sumimasen|Excuse me;ごめんなさい|gomennasai|I am sorry;はい|hai|Yes;いいえ|iie|No;おねがいします|onegaishimasu|Please'))]},
 {title:'People and Self',sub:'Talk about yourself and others',lessons:[kl('Who',V('わたし|watashi|I, me;あなた|anata|You;ともだち|tomodachi|Friend;せんせい|sensei|Teacher;がくせい|gakusei|Student')),kl('Basics',V('かぞく|kazoku|Family;ひと|hito|Person;なまえ|namae|Name;にほん|nihon|Japan;インド|indo|India'))]},
 {title:'Numbers',sub:'Count from 1 to 100',lessons:[kl('One to five',V('一|ichi|One;二|ni|Two;三|san|Three;四|yon / shi|Four;五|go|Five')),kl('Six to hundred',V('六|roku|Six;七|nana / shichi|Seven;八|hachi|Eight;九|kyuu / ku|Nine;十|juu|Ten;百|hyaku|Hundred'))]},
 {title:'Food and Drink',sub:'Order with confidence',lessons:[kl('Staples',V('みず|mizu|Water;おちゃ|ocha|Tea;ごはん|gohan|Rice, meal;さかな|sakana|Fish;にく|niku|Meat')),kl('More food',V('やさい|yasai|Vegetables;たまご|tamago|Egg;パン|pan|Bread;くだもの|kudamono|Fruit;すし|sushi|Sushi'))]},
 {title:'Places and Travel',sub:'Find your way around',lessons:[kl('Around town',V('えき|eki|Station;がっこう|gakkou|School;みせ|mise|Shop;びょういん|byouin|Hospital;ホテル|hoteru|Hotel')),kl('Getting there',V('トイレ|toire|Toilet;みち|michi|Road;くうこう|kuukou|Airport;でんしゃ|densha|Train;みぎ|migi|Right;ひだり|hidari|Left'))]},
 {title:'Verbs and Time',sub:'Do things and say when',lessons:[kl('Everyday verbs',V('たべる|taberu|To eat;のむ|nomu|To drink;いく|iku|To go;くる|kuru|To come;みる|miru|To see')),kl('More verbs and time',V('する|suru|To do;かう|kau|To buy;はなす|hanasu|To speak;きょう|kyou|Today;あした|ashita|Tomorrow;きのう|kinou|Yesterday'))]},
 {title:'Sentences',sub:'Build real sentences with は を に か',lessons:SENT.map((g,i)=>({title:['Topic and です','Particles を and に','Asking questions'][i],tip:g.tip,sentences:g.s.map(x=>({tokens:x[0],en:x[1]}))}))},
 {title:'Kanji Starter',sub:'15 essential kanji',lessons:[kl('Sun, moon, fire',KJ.slice(0,5)),kl('Nature and people',KJ.slice(5,10)),kl('Body and size',KJ.slice(10,15))]}
];
const FLAT=[];UNITS.forEach((u,ui)=>u.lessons.forEach((L,li)=>FLAT.push({ui,li,id:'u'+ui+'l'+li,title:L.title})));
