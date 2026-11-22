/* ---------- JLPT N5 course (original practice material in the official exam formats) ---------- */
const RB='あa いi うu えe おo かka きki くku けke こko さsa しshi すsu せse そso たta ちchi つtsu てte とto なna にni ぬnu ねne のno はha ひhi ふfu へhe ほho まma みmi むmu めme もmo やya ゆyu よyo らra りri るru れre ろro わwa をo んn がga ぎgi ぐgu げge ごgo ざza じji ずzu ぜze ぞzo だda ぢji づzu でde どdo ばba びbi ぶbu べbe ぼbo ぱpa ぴpi ぷpu ぺpe ぽpo';
const RMAP={};RB.split(' ').forEach(p=>{RMAP[p[0]]=p.slice(1)});
function toRomaji(s){
 s=s.replace(/[ァ-ヶ]/g,c=>String.fromCharCode(c.charCodeAt(0)-0x60));
 let out='',dbl=false;
 for(const ch of s){
  if(ch==='っ'){dbl=true;continue}
  if(ch==='ー'){out+=out.slice(-1);continue}
  if('ゃゅょ'.includes(ch)){const v={'ゃ':'a','ゅ':'u','ょ':'o'}[ch],b=out.slice(0,-1);out=/(sh|ch|j)$/.test(b)?b+v:b+'y'+v;continue}
  let r=RMAP[ch];if(r===undefined){out+=ch;continue}
  if(dbl){r=(r[0]==='c'?'t':r[0])+r;dbl=false}
  out+=r}
 return out}
let CURL=5;
const mkW=s=>s.split(';').map(x=>{const p=x.trim().split('|'),kana=p[1]||p[0];return{id:'n'+CURL+':'+p[0]+':'+kana,jp:p[0],kana,rom:p[3]||toRomaji(kana),en:p[2],type:'vocab',lvl:CURL}});
const mkK=s=>s.split(';').map(x=>{const p=x.trim().split('|');return{id:'n'+CURL+'k:'+p[0],jp:p[0],kana:p[1],rom:toRomaji(p[1]),en:p[2],more:p[3]||'',type:'kanji',lvl:CURL}});
const LW=(t,s)=>({title:t,items:mkW(s)});
const LK=(t,s)=>({title:t,items:mkK(s)});
const LG=(t,tip,qs)=>({title:t,tip:Array.isArray(tip)?tip:String(tip).split(/(?<=[.。])\s+/),gram:qs.map(q=>({s:q[0],o:q[1],a:q[2],w:q[3]||''}))});
const LR=(t,jp,en,qs)=>({title:t,read:{jp,en,qs}});
const N5_OLD=[
{title:'People and Time',sub:'Family, days, and telling when',lessons:[
 LW('People',`私|わたし|I, me;友達|ともだち|friend;先生|せんせい|teacher;学生|がくせい|student;家族|かぞく|family;子供|こども|child;男の人|おとこのひと|man;女の人|おんなのひと|woman`),
 LW('Family',`父|ちち|my father;母|はは|my mother;兄|あに|my older brother;姉|あね|my older sister;弟|おとうと|my younger brother;妹|いもうと|my younger sister;お父さん|おとうさん|father (someone else's);お母さん|おかあさん|mother (someone else's)`),
 LW('Days of the week',`月曜日|げつようび|Monday;火曜日|かようび|Tuesday;水曜日|すいようび|Wednesday;木曜日|もくようび|Thursday;金曜日|きんようび|Friday;土曜日|どようび|Saturday;日曜日|にちようび|Sunday;何曜日|なんようび|what day of the week`),
 LW('Time words',`今日|きょう|today;明日|あした|tomorrow;昨日|きのう|yesterday;毎日|まいにち|every day;今|いま|now;朝|あさ|morning;夜|よる|night;今年|ことし|this year`),
 LW('More time words',`午前|ごぜん|AM, morning;午後|ごご|PM, afternoon;来週|らいしゅう|next week;先週|せんしゅう|last week;毎朝|まいあさ|every morning;誕生日|たんじょうび|birthday;時間|じかん|time, hour;昼|ひる|noon, daytime`)]},
{title:'Numbers and Dates',sub:'Counting, money, months',lessons:[
 LW('Counting things and people',`一つ|ひとつ|one (thing);二つ|ふたつ|two (things);三つ|みっつ|three (things);四つ|よっつ|four (things);五つ|いつつ|five (things);一人|ひとり|one person;二人|ふたり|two people;何人|なんにん|how many people`),
 LW('Money and questions',`百|ひゃく|hundred;千|せん|thousand;万|まん|ten thousand;円|えん|yen;お金|おかね|money;いくら||how much;何時|なんじ|what time;何|なに|what`),
 LW('Months 1 to 8',`一月|いちがつ|January;二月|にがつ|February;三月|さんがつ|March;四月|しがつ|April;五月|ごがつ|May;六月|ろくがつ|June;七月|しちがつ|July;八月|はちがつ|August`),
 LW('Months 9 to 12 and dates',`九月|くがつ|September;十月|じゅうがつ|October;十一月|じゅういちがつ|November;十二月|じゅうにがつ|December;何月|なんがつ|what month;十一日|じゅういちにち|the 11th;何日|なんにち|what date;今月|こんげつ|this month`)]},
{title:'Food, Home and Things',sub:'Everyday objects and meals',lessons:[
 LW('Eating out',`注文|ちゅうもん|order;席|せき|seat;予約|よやく|reservation;夕方|ゆうがた|evening;喫茶店|きっさてん|coffee shop;食堂|しょくどう|cafeteria;味|あじ|taste;食事|しょくじ|meal`),
 LW('Food',`水|みず|water;牛乳|ぎゅうにゅう|milk;コーヒー||coffee;肉|にく|meat;魚|さかな|fish;野菜|やさい|vegetables;果物|くだもの|fruit;卵|たまご|egg`),
 LW('More food',`パン||bread;りんご||apple;みかん||mandarin orange;塩|しお|salt;砂糖|さとう|sugar;ビール||beer;お酒|おさけ|alcohol, sake;紅茶|こうちゃ|black tea`),
 LW('Around the house',`家|いえ|house, home;部屋|へや|room;台所|だいどころ|kitchen;玄関|げんかん|entrance;窓|まど|window;ドア||door;机|つくえ|desk;椅子|いす|chair`),
 LW('Things you carry',`本|ほん|book;鞄|かばん|bag;傘|かさ|umbrella;靴|くつ|shoes;服|ふく|clothes;帽子|ぼうし|hat;時計|とけい|clock, watch;電話|でんわ|telephone`),
 LW('More things',`写真|しゃしん|photo;映画|えいが|movie;音楽|おんがく|music;新聞|しんぶん|newspaper;辞書|じしょ|dictionary;手紙|てがみ|letter;切符|きっぷ|ticket;鉛筆|えんぴつ|pencil`),
 LW('School and work',`テレビ||TV;ペン||pen;ノート||notebook;カメラ||camera;ラジオ||radio;宿題|しゅくだい|homework;試験|しけん|exam;仕事|しごと|work, job`)]},
{title:'Places and Nature',sub:'Getting around and the world outside',lessons:[
 LW('Places',`学校|がっこう|school;会社|かいしゃ|company;病院|びょういん|hospital;駅|えき|station;銀行|ぎんこう|bank;郵便局|ゆうびんきょく|post office;図書館|としょかん|library;店|みせ|shop`),
 LW('More places',`公園|こうえん|park;空港|くうこう|airport;大学|だいがく|university;教室|きょうしつ|classroom;レストラン||restaurant;ホテル||hotel;トイレ||toilet;道|みち|road`),
 LW('Transport and country',`電車|でんしゃ|train;車|くるま|car;自転車|じてんしゃ|bicycle;飛行機|ひこうき|airplane;町|まち|town;国|くに|country;外国|がいこく|foreign country;地下鉄|ちかてつ|subway`),
 LW('Position words',`上|うえ|above, up;下|した|below, down;中|なか|inside;前|まえ|front, before;後ろ|うしろ|behind;右|みぎ|right;左|ひだり|left;隣|となり|next to`),
 LW('Directions',`外|そと|outside;東|ひがし|east;西|にし|west;南|みなみ|south;北|きた|north;横|よこ|side;近く|ちかく|nearby;向こう|むこう|the other side`),
 LW('Weather and nature',`天気|てんき|weather;雨|あめ|rain;雪|ゆき|snow;風|かぜ|wind;空|そら|sky;山|やま|mountain;川|かわ|river;海|うみ|sea`),
 LW('Animals and body',`花|はな|flower;木|き|tree;犬|いぬ|dog;猫|ねこ|cat;鳥|とり|bird;手|て|hand;足|あし|foot, leg;目|め|eye`),
 LW('Body and health',`耳|みみ|ear;口|くち|mouth;顔|かお|face;頭|あたま|head;体|からだ|body;病気|びょうき|illness;薬|くすり|medicine;おなか||stomach`)]},
{title:'Adjectives',sub:'Describe people, places and things',lessons:[
 LW('Size and price',`大きい|おおきい|big;小さい|ちいさい|small;新しい|あたらしい|new;古い|ふるい|old (things);高い|たかい|tall, expensive;安い|やすい|cheap;長い|ながい|long;短い|みじかい|short`),
 LW('Quantity and speed',`多い|おおい|many;少ない|すくない|few;良い|いい|good;悪い|わるい|bad;早い|はやい|early, fast;遅い|おそい|slow, late;広い|ひろい|spacious;狭い|せまい|narrow`),
 LW('Temperature and distance',`暑い|あつい|hot (weather);寒い|さむい|cold (weather);冷たい|つめたい|cold (to touch);熱い|あつい|hot (to touch);重い|おもい|heavy;軽い|かるい|light;近い|ちかい|near;遠い|とおい|far`),
 LW('Feelings and difficulty',`忙しい|いそがしい|busy;楽しい|たのしい|fun;面白い|おもしろい|interesting;難しい|むずかしい|difficult;易しい|やさしい|easy;おいしい||delicious;若い|わかい|young;強い|つよい|strong`),
 LW('Colors',`白い|しろい|white;黒い|くろい|black;赤い|あかい|red;青い|あおい|blue;黄色い|きいろい|yellow;茶色|ちゃいろ|brown;緑|みどり|green;色|いろ|color`),
 LW('Na-adjectives',`きれい||pretty, clean;静か|しずか|quiet;にぎやか||lively;元気|げんき|healthy, energetic;有名|ゆうめい|famous;親切|しんせつ|kind;便利|べんり|convenient;好き|すき|liked`),
 LW('More na-adjectives',`嫌い|きらい|disliked;上手|じょうず|skilled;下手|へた|unskilled;大丈夫|だいじょうぶ|all right;暇|ひま|free (time);同じ|おなじ|same;いろいろ||various;だめ||no good`)]},
{title:'Verbs',sub:'The action words you need most',lessons:[
 LW('Daily verbs',`食べる|たべる|to eat;飲む|のむ|to drink;行く|いく|to go;来る|くる|to come;帰る|かえる|to return home;見る|みる|to see, watch;聞く|きく|to listen, ask;読む|よむ|to read`),
 LW('More daily verbs',`書く|かく|to write;話す|はなす|to speak;会う|あう|to meet;買う|かう|to buy;起きる|おきる|to wake up;寝る|ねる|to sleep;する||to do;働く|はたらく|to work`),
 LW('Activities',`休む|やすむ|to rest;歌う|うたう|to sing;泳ぐ|およぐ|to swim;遊ぶ|あそぶ|to play;待つ|まつ|to wait;持つ|もつ|to hold, carry;取る|とる|to take;使う|つかう|to use`),
 LW('Movement and objects',`作る|つくる|to make;入る|はいる|to enter;出る|でる|to go out;乗る|のる|to ride;降りる|おりる|to get off;着る|きる|to wear (top);開ける|あける|to open (something);閉める|しめる|to close (something)`),
 LW('Knowing and learning',`教える|おしえる|to teach;習う|ならう|to learn;住む|すむ|to live (reside);知る|しる|to know;分かる|わかる|to understand;言う|いう|to say;思う|おもう|to think;洗う|あらう|to wash`),
 LW('Giving and borrowing',`勉強|べんきょう|study;歩く|あるく|to walk;立つ|たつ|to stand;貸す|かす|to lend;借りる|かりる|to borrow;あげる||to give;もらう||to receive;見せる|みせる|to show`)]},
{title:'Useful Words',sub:'Adverbs, question words, connectors',lessons:[
 LW('Adverbs',`とても||very;ちょっと||just a moment, a bit;たくさん||a lot;もう||already;まだ||not yet, still;いつも||always;よく||often, well;時々|ときどき|sometimes`),
 LW('More adverbs',`全然|ぜんぜん|not at all;一番|いちばん|most, number one;すぐ||right away;ゆっくり||slowly;一緒に|いっしょに|together;少し|すこし|a little, few;初めて|はじめて|for the first time;本当|ほんとう|truly, really`),
 LW('Question words',`誰|だれ|who;どこ||where;いつ||when;どう||how;どれ||which one;どの||which (before a noun);なぜ||why;どちら||which of two`),
 LW('Connectors and pointers',`でも||but;そして||and then;それから||after that;だから||so, therefore;じゃあ||well then;それ||that (near you);あれ||that over there;ここ||here`)]},
{title:'N5 Kanji',sub:'About 96 kanji from the N5 range',lessons:[
 LK('Numbers 1 to 8',`一|いち|one;二|に|two;三|さん|three;四|よん|four|し, よ;五|ご|five;六|ろく|six;七|なな|seven|しち;八|はち|eight`),
 LK('Big numbers and the sun',`九|きゅう|nine|く;十|じゅう|ten|とお;百|ひゃく|hundred;千|せん|thousand|ち;万|まん|ten thousand;円|えん|yen;年|ねん|year|とし;日|にち|day, sun|ひ, か`),
 LK('Days of the week',`月|げつ|moon, month|つき, がつ;火|か|fire|ひ;水|すい|water|みず;木|もく|tree|き;金|きん|gold, money|かね;土|ど|earth|つち;曜|よう|day of the week;週|しゅう|week`),
 LK('Time',`時|じ|time, o'clock|とき;分|ふん|minute|わ(かる);半|はん|half;午|ご|noon;前|ぜん|before|まえ;後|ご|after|あと, うし(ろ);今|こん|now|いま;毎|まい|every`),
 LK('People',`人|じん|person|ひと, にん;男|だん|man|おとこ;女|じょ|woman|おんな;子|し|child|こ;父|ふ|father|ちち;母|ぼ|mother|はは;友|ゆう|friend|とも;先|せん|previous, ahead|さき`),
 LK('School and country',`学|がく|study;校|こう|school;生|せい|life, student|い(きる), う(まれる);何|なに|what|なん;国|こく|country|くに;語|ご|language|かた(る);名|めい|name|な;外|がい|outside|そと`),
 LK('Size and position',`大|だい|big|おお(きい);小|しょう|small|ちい(さい), こ;中|ちゅう|middle|なか;上|じょう|up|うえ, あ(げる);下|か|down|した, さ(げる);右|う|right|みぎ;左|さ|left|ひだり;長|ちょう|long|なが(い)`),
 LK('Nature',`山|さん|mountain|やま;川|せん|river|かわ;田|でん|rice field|た;天|てん|heaven|あま;気|き|spirit, air;雨|う|rain|あめ;花|か|flower|はな;空|くう|sky|そら, あ(く)`),
 LK('Body and strength',`目|もく|eye|め;耳|じ|ear|みみ;口|こう|mouth|くち;手|しゅ|hand|て;足|そく|foot, leg|あし;力|りょく|power|ちから;白|はく|white|しろ;高|こう|high|たか(い)`),
 LK('Action kanji 1',`見|けん|see|み(る);聞|ぶん|hear|き(く);読|どく|read|よ(む);書|しょ|write|か(く);話|わ|talk|はな(す);行|こう|go|い(く), ゆ(く);来|らい|come|く(る);出|しゅつ|exit|で(る), だ(す)`),
 LK('Action kanji 2',`入|にゅう|enter|はい(る), い(れる);休|きゅう|rest|やす(む);買|ばい|buy|か(う);食|しょく|eat|た(べる);飲|いん|drink|の(む);電|でん|electricity;車|しゃ|car|くるま;駅|えき|station`),
 LK('Adjectives and directions',`新|しん|new|あたら(しい);古|こ|old|ふる(い);安|あん|cheap|やす(い);本|ほん|book, origin|もと;東|とう|east|ひがし;西|せい|west|にし;南|なん|south|みなみ;北|ほく|north|きた`)]},
{title:'N5 Grammar',sub:'24 patterns, each with a short drill',lessons:[
 LG('は and です',['A は B です means "A is B".','は is written は but read "wa".','わたしは がくせいです。 I am a student.'],[
  ["わたしは がくせい＿＿。\n(I am a student.)",["です","ます","ですか","でした"],0,"A noun sentence ends with です."],
  ["これ＿＿ わたしの ほんです。\n(This is my book.)",["は","を","に","で"],0,"は marks the topic of the sentence."],
  ["やまださんは せんせい＿＿。\n(Is Mr. Yamada a teacher?)",["ですか","です","でした","ます"],0,"Add か to turn a statement into a question."]]),
 LG('の for possession',['A の B means "B of A" or "A\'s B".','わたしの ほん = my book','にほんごの ほん = a Japanese-language book'],[
  ["わたし＿＿ ほん\n(my book)",["の","は","を","に"],0,"の links two nouns."],
  ["これは せんせい＿＿ かさです。\n(This is the teacher's umbrella.)",["の","は","を","と"],0,"の shows who owns it."],
  ["にほんご＿＿ ほんを よみます。\n(I read a Japanese-language book.)",["の","を","に","が"],0,"の joins にほんご and ほん."]]),
 LG('も means also',['A も B です means "A is also B".','わたしは がくせいです。ともだちも がくせいです。'],[
  ["わたしは がくせいです。ともだち＿＿ がくせいです。\n(My friend is a student too.)",["も","は","を","の"],0,"も replaces は when you add \"also\"."],
  ["コーヒーを のみます。わたし＿＿ のみます。\n(I drink it too.)",["も","を","に","で"],0,"も means \"too\"."],
  ["これは ペンです。それ＿＿ ペンです。\n(That is also a pen.)",["も","を","に","か"],0,"も marks the added topic."]]),
 LG('か and question words',['Add か at the end to ask a question.','なん = what, だれ = who, どこ = where','トイレは どこですか。 Where is the toilet?'],[
  ["これは なんです＿＿。\n(What is this?)",["か","よ","ね","の"],0,"か makes a question."],
  ["トイレは ＿＿ですか。\n(Where is the toilet?)",["どこ","だれ","いつ","なに"],0,"どこ means where."],
  ["あの ひとは ＿＿ですか。\n(Who is that person?)",["だれ","どこ","いつ","いくら"],0,"だれ means who."]]),
 LG('を marks the object',['を marks what the action is done to.','みずを のみます。 I drink water.'],[
  ["みず＿＿ のみます。\n(I drink water.)",["を","は","に","で"],0,"を marks the object of the verb."],
  ["にほんごの ほん＿＿ よみます。\n(I read a Japanese book.)",["を","に","へ","が"],0,"よみます acts on the book, so を."],
  ["パン＿＿ たべます。\n(I eat bread.)",["を","に","で","と"],0,"The thing eaten takes を."]]),
 LG('に for time and destination',['に marks a point in time: 7じに おきます。','に marks a destination: がっこうに いきます。'],[
  ["7じ＿＿ おきます。\n(I wake up at 7.)",["に","を","で","は"],0,"A clock time takes に."],
  ["あした がっこう＿＿ いきます。\n(I will go to school tomorrow.)",["に","を","で","と"],0,"The destination of いきます takes に."],
  ["にちようび＿＿ ともだちに あいます。\n(I meet a friend on Sunday.)",["に","を","で","が"],0,"A day takes に."]]),
 LG('で for place and means',['で marks where an action happens: としょかんで よみます。','で marks the tool or vehicle: バスで いきます。'],[
  ["としょかん＿＿ ほんを よみます。\n(I read a book at the library.)",["で","に","を","の"],0,"で marks where the action takes place."],
  ["バス＿＿ いきます。\n(I go by bus.)",["で","を","が","も"],0,"で marks the means of transport."],
  ["はし＿＿ たべます。\n(I eat with chopsticks.)",["で","に","を","と"],0,"で marks the tool."]]),
 LG('と for and, with',['A と B means "A and B".','ともだちと いきます。 I go with a friend.'],[
  ["ともだち＿＿ えいがを みます。\n(I watch a movie with a friend.)",["と","を","に","で"],0,"と means with."],
  ["ほん＿＿ ノートを かいました。\n(I bought a book and a notebook.)",["と","を","に","が"],0,"と joins two nouns."],
  ["かぞく＿＿ レストランに いきます。\n(I go to a restaurant with my family.)",["と","を","で","の"],0,"と means with."]]),
 LG('から and まで',['から = from, まで = until, to','9じから 5じまで はたらきます。 I work from 9 to 5.'],[
  ["9じ＿＿ 5じまで はたらきます。\n(I work from 9 to 5.)",["から","まで","に","で"],0,"から marks the start."],
  ["げつようびから きんようび＿＿ はたらきます。\n(I work Monday to Friday.)",["まで","から","に","を"],0,"まで marks the end."],
  ["うち＿＿ がっこうまで あるきます。\n(I walk from home to school.)",["から","まで","を","が"],0,"から marks where you start."]]),
 LG('ます form (present)',['Polite present: たべます, のみます, いきます','Negative: たべません','Verbs ending in ます are polite and used for habits and the future.'],[
  ["まいあさ コーヒーを のみ＿＿。\n(I drink coffee every morning.)",["ます","ません","ました","ましょう"],0,"A habit uses the present ます form."],
  ["わたしは さかなを たべ＿＿。\n(I do not eat fish.)",["ません","ます","ました","ましょう"],0,"ません makes it negative."],
  ["あした ともだちに あい＿＿。\n(I will meet a friend tomorrow.)",["ます","ません","ました","ませんでした"],0,"Future plans use ます."]]),
 LG('Past tense: ました',['Past: たべました','Past negative: たべませんでした'],[
  ["きのう えいがを み＿＿。\n(I watched a movie yesterday.)",["ました","ます","ません","ましょう"],0,"Yesterday needs the past form ました."],
  ["けさ あさごはんを たべ＿＿。\n(I did not eat breakfast this morning.)",["ませんでした","ません","ました","ます"],0,"ませんでした is the past negative."],
  ["せんしゅう がっこうに いき＿＿。\n(I did not go to school last week.)",["ませんでした","ません","ました","ます"],0,"Last week plus not going means ませんでした."]]),
 LG('ましょう and ませんか',['Let us: いきましょう','Would you like to: いきませんか','Both invite someone to do something together.'],[
  ["いっしょに ひるごはんを たべ＿＿。\n(Won't you eat lunch with me?)",["ませんか","ました","ません","ます"],0,"ませんか is a polite invitation."],
  ["さあ、うちへ かえり＿＿。\n(Come on, let's go home.)",["ましょう","ません","ました","ますか"],0,"ましょう means let us."],
  ["あした えいがを みに いき＿＿。\n(Let's go see a movie tomorrow.)",["ましょう","ませんでした","ました","ません"],0,"ましょう suggests doing it together."]]),
 LG('たい for wanting',['Verb stem + たいです means "I want to".','すしを たべたいです。 I want to eat sushi.','Negative: たくないです'],[
  ["わたしは すしを たべ＿＿。\n(I want to eat sushi.)",["たいです","ますです","たくです","ましたい"],0,"Stem + たいです expresses want."],
  ["きょうは どこにも いき＿＿。\n(I don't want to go anywhere today.)",["たくないです","たいないです","たくません","ませんたい"],0,"Negative of たい is たくない."],
  ["なにを のみ＿＿か。\n(What do you want to drink?)",["たいです","たくです","ますです","ましたい"],0,"たいですか asks what someone wants."]]),
 LG('ている for ongoing actions',['Verb て-form + います means "is doing".','いま テレビを みています。 I am watching TV now.','It also shows a state: すんでいます = lives'],[
  ["いま テレビを み＿＿。\n(I am watching TV now.)",["ています","ていません","ました","たいです"],0,"ています shows an action in progress."],
  ["ははは いま りょうりを し＿＿。\n(My mother is cooking now.)",["ています","ていません","ましょう","ました"],0,"Cooking now is ています."],
  ["わたしは とうきょうに すん＿＿。\n(I live in Tokyo.)",["でいます","ています","いています","でます"],0,"すむ becomes すんで, so すんでいます."]]),
 LG('てください for requests',['て-form + ください means "please do".','ちょっと まってください。 Please wait a moment.'],[
  ["ここに なまえを かい＿＿。\n(Please write your name here.)",["てください","でください","ましょう","ませんか"],0,"かく becomes かいて."],
  ["ゆっくり はなし＿＿。\n(Please speak slowly.)",["てください","でください","ました","ません"],0,"はなす becomes はなして."],
  ["この ほんを よん＿＿。\n(Please read this book.)",["でください","てください","いてください","ってください"],0,"よむ becomes よんで."]]),
 LG('Prohibition and permission',['ないでください = please do not','てはいけません = must not','てもいいです = may'],[
  ["ここで たばこを すわ＿＿。\n(Please do not smoke here.)",["ないでください","なくてください","ませんでください","ないください"],0,"ない-form + でください asks someone not to."],
  ["ここに はいって＿＿。\n(You must not enter here.)",["はいけません","もいいです","ください","ましょう"],0,"てはいけません is a prohibition."],
  ["この ペンを つかっても＿＿ですか。\n(May I use this pen?)",["いい","だめ","ない","いけません"],0,"てもいいですか asks permission."]]),
 LG('い-adjectives: negative and past',['Negative: い becomes くないです.','Past: い becomes かったです.','おいしい → おいしくないです → おいしかったです'],[
  ["この りょうりは おいし＿＿。\n(This dish is not delicious.)",["くないです","じゃないです","ないです","ではないです"],0,"Drop い and add くないです."],
  ["きのうは さむ＿＿。\n(It was cold yesterday.)",["かったです","いでした","くなかった","でした"],0,"Drop い and add かったです."],
  ["あの みせは やす＿＿。\n(That shop is cheap.)",["いです","です","だです","くです"],0,"The plain form already ends in い."]]),
 LG('な-adjectives',['な-adjective + noun: しずかな へや','Negative: きれいじゃありません','Likes and skills use が: すしが すきです。'],[
  ["ここは しずか＿＿ へやです。\n(This is a quiet room.)",["な","の","に","で"],0,"な links a な-adjective to a noun."],
  ["わたしは すし＿＿ すきです。\n(I like sushi.)",["が","を","に","は"],0,"すき takes が for the thing liked."],
  ["この まちは きれい＿＿ ありません。\n(This town is not pretty.)",["じゃ","くない","な","に"],0,"じゃありません is the negative of a noun or な-adjective."]]),
 LG('が for but and for ability',['が at the end of a clause means "but".','Skills and understanding take が: えいごが わかります。'],[
  ["にほんごは むずかしいです＿＿、おもしろいです。\n(Japanese is difficult, but interesting.)",["が","を","に","と"],0,"が links two contrasting clauses."],
  ["わたしは りょうり＿＿ じょうずです。\n(I am good at cooking.)",["が","を","に","で"],0,"じょうず takes が."],
  ["ははは えいご＿＿ わかります。\n(My mother understands English.)",["が","を","に","で"],0,"わかります takes が."]]),
 LG('あります and います',['あります = there is (things, plants)','います = there is (people, animals)','Negative: ありません, いません'],[
  ["つくえの うえに ほんが＿＿。\n(There is a book on the desk.)",["あります","います","ありません","いません"],0,"A book is a thing, so あります."],
  ["へやに ねこが＿＿。\n(There is a cat in the room.)",["います","あります","いません","ありません"],0,"A cat is an animal, so います."],
  ["いえに くるまは＿＿。\n(There is no car at home.)",["ありません","いません","ですか","ました"],0,"A car is a thing, and the sentence is negative."]]),
 LG('Comparing: より and いちばん',['A より B のほうが ～ means "B is more ～ than A".','いちばん = the most','どちらが = which of the two'],[
  ["ねこ＿＿ いぬの ほうが すきです。\n(I like dogs more than cats.)",["より","から","まで","も"],0,"より marks what you compare against."],
  ["りんごと みかんと、どちら＿＿ すきですか。\n(Which do you like more, apples or mandarins?)",["が","を","に","で"],0,"どちらが asks which of two."],
  ["くだもので なにが＿＿ すきですか。\n(Which fruit do you like the most?)",["いちばん","とても","もう","まだ"],0,"いちばん means the most."]]),
 LG('から for reasons',['Reason + から means "because" or "so".','あめですから、うちに います。'],[
  ["あめです＿＿、うちに います。\n(It is raining, so I stay home.)",["から","まで","より","と"],0,"から follows the reason."],
  ["さむいです＿＿、コートを きます。\n(It is cold, so I wear a coat.)",["から","まで","を","に"],0,"から links the reason to the result."],
  ["いそがしかった＿＿、ともだちに あいませんでした。\n(I was busy, so I did not meet my friend.)",["から","より","で","と"],0,"から gives the reason."]]),
 LG('に いきます for purpose',['Verb stem or noun + に いきます means "go in order to".','かいものに いきます。 I go shopping.'],[
  ["デパートへ かいもの＿＿ いきます。\n(I go to the department store to shop.)",["に","を","で","と"],0,"に marks the purpose."],
  ["ともだちと えいがを み＿＿ いきます。\n(I go to see a movie with a friend.)",["に","で","を","と"],0,"Stem + に いきます."],
  ["としょかんへ ほんを かり＿＿ いきます。\n(I go to the library to borrow a book.)",["に","で","を","と"],0,"Stem + に shows purpose."]]),
 LG('もう and まだ',['もう + past = already','まだ + negative = not yet','ぜんぜん + negative = not at all'],[
  ["しゅくだいは ＿＿ おわりました。\n(I have already finished my homework.)",["もう","まだ","ぜんぜん","いつも"],0,"もう means already."],
  ["ごはんを たべましたか。 いいえ、＿＿ たべていません。\n(Have you eaten? No, not yet.)",["まだ","もう","とても","いつも"],0,"まだ with the negative means not yet."],
  ["わたしは さかなを ＿＿ たべません。\n(I never eat fish.)",["ぜんぜん","とても","もう","よく"],0,"ぜんぜん goes with a negative."]])]},
{title:'N5 Reading',sub:'Short passages like the exam',lessons:[
 LR('My neighborhood',"わたしの うちは えきから ちかいです。うちの ちかくに こうえんが あります。まいあさ、こうえんで いぬと あるきます。","My house is close to the station. There is a park near my house. Every morning I walk with my dog in the park.",[["Where does the writer walk every morning?",["In the park","At the station","At school","At the library"],0],["Where is the writer's house?",["Close to the station","Far from the station","Next to a school","Near a hospital"],0]]),
 LR('Sunday diary',"きょうは にちようびです。あさ はやく おきて、せんたくを しました。ひるは ともだちと レストランで ごはんを たべました。ごご、えいがを みました。","Today is Sunday. I got up early in the morning and did the laundry. For lunch I ate at a restaurant with a friend. In the afternoon I watched a movie.",[["What did the writer do in the afternoon?",["Watched a movie","Did the laundry","Ate lunch","Went to school"],0],["Who did the writer eat lunch with?",["A friend","Family","A teacher","Nobody"],0]]),
 LR('A notice',"たなかさんへ。あしたの かいぎは 10じからです。1じかんで おわります。へやは 2かいの 3ばんです。やまだ","To Mr. Tanaka: Tomorrow's meeting starts at 10. It will end in one hour. The room is number 3 on the second floor. Yamada",[["What time does the meeting end?",["11:00","10:00","1:00","3:00"],0],["Where is the meeting room?",["Second floor","First floor","Third floor","Room 10"],0]]),
 LR('Shopping',"わたしは きのう デパートへ いきました。あたらしい くつを かいました。5,000えんでした。すこし たかかったですが、とても きれいです。","Yesterday I went to a department store. I bought new shoes. They cost 5,000 yen. They were a little expensive, but they are very pretty.",[["What did the writer buy?",["Shoes","A bag","A hat","Clothes"],0],["How was the price?",["A little expensive","Very cheap","Free","Too cheap"],0]])]}
];
const LD=(t,items)=>({title:t,listen:items.map(d=>({lines:d[0],q:d[1],o:d[2],a:d[3],en:d[4]}))});
const N5_NEW={
greet:{title:'Greetings and Phrases',sub:'What you say every day in Japan',lessons:[
 LW('Greetings',`おはようございます||good morning;こんにちは||hello|konnichiwa;こんばんは||good evening|konbanwa;さようなら||goodbye;おやすみなさい||good night;ありがとうございます||thank you (polite);すみません||excuse me, sorry;ごめんなさい||I am sorry`),
 LW('Daily phrases',`いただきます||said before eating;ごちそうさまでした||said after eating;いってきます||I am leaving (home);いってらっしゃい||see you (to one leaving);ただいま||I am home;おかえりなさい||welcome back;はじめまして||nice to meet you;よろしくおねがいします||please treat me well`),
 LW('Replies and requests',`はい||yes;いいえ||no;どういたしまして||you are welcome;おねがいします||please (a request);ください||please give me;だいじょうぶです||it is okay;しつれいします||excuse me (entering, leaving);おげんきですか||how are you?`)]},
count:{title:'Counters and Calendar',sub:'Clock times, months, dates and counters',lessons:[
 LW('Clock times',`一時|いちじ|1 o'clock;四時|よじ|4 o'clock;七時|しちじ|7 o'clock;九時|くじ|9 o'clock;一分|いっぷん|one minute;三分|さんぷん|three minutes;十分|じゅっぷん|ten minutes;半|はん|half past`),
 LW('Dates 1 to 8',`十一日|じゅういちにち|the 11th;二日|ふつか|the 2nd, two days;三日|みっか|the 3rd, three days;四日|よっか|the 4th, four days;五日|いつか|the 5th, five days;六日|むいか|the 6th, six days;七日|なのか|the 7th, seven days;八日|ようか|the 8th, eight days`),
 LW('More dates',`九日|ここのか|the 9th, nine days;十日|とおか|the 10th, ten days;十四日|じゅうよっか|the 14th;二十日|はつか|the 20th;二十四日|にじゅうよっか|the 24th;十五日|じゅうごにち|the 15th;毎月|まいつき|every month;毎年|まいとし|every year`),
 LW('Counters',`一枚|いちまい|one flat thing;一本|いっぽん|one long thing;一冊|いっさつ|one book;一台|いちだい|one machine, vehicle;一匹|いっぴき|one small animal;一杯|いっぱい|one cup, glass;一回|いっかい|one time;一階|いっかい|first floor`),
 LW('How many?',`一歳|いっさい|one year old;二十歳|はたち|twenty years old;何歳|なんさい|how old;何階|なんがい|what floor;何番|なんばん|what number;何本|なんぼん|how many long things;何枚|なんまい|how many flat things;何回|なんかい|how many times`)]},
life:{title:'Everyday Life',sub:'Food, shopping, home, town and seasons',lessons:[
 LW('Jobs',`会社員|かいしゃいん|office worker;店員|てんいん|shop clerk;警察|けいさつ|police;歌手|かしゅ|singer;運転手|うんてんしゅ|driver;銀行員|ぎんこういん|bank clerk;高校生|こうこうせい|high school student;大学生|だいがくせい|university student`),
 LW('Meals',`朝ご飯|あさごはん|breakfast;昼ご飯|ひるごはん|lunch;晩ご飯|ばんごはん|dinner;料理|りょうり|cooking, dish;喫茶店|きっさてん|coffee shop;食堂|しょくどう|cafeteria;味|あじ|taste;食事|しょくじ|meal`),
 LW('Shopping',`買い物|かいもの|shopping;財布|さいふ|wallet;お釣り|おつり|change (money);袋|ふくろ|bag, sack;八百屋|やおや|greengrocer;肉屋|にくや|butcher;売る|うる|to sell;値段|ねだん|price`),
 LW('At home',`風呂|ふろ|bath;庭|にわ|garden;階段|かいだん|stairs;電気|でんき|electricity, light;冷蔵庫|れいぞうこ|refrigerator;洗濯|せんたく|laundry;掃除|そうじ|cleaning;料金|りょうきん|fee`),
 LW('Small objects',`眼鏡|めがね|glasses;紙|かみ|paper;箱|はこ|box;皿|さら|plate;箸|はし|chopsticks;コップ||glass, cup;スプーン||spoon;ナイフ||knife`),
 LW('In town',`交番|こうばん|police box;橋|はし|bridge;信号|しんごう|traffic light;交差点|こうさてん|intersection;角|かど|corner;番号|ばんごう|number;住所|じゅうしょ|address;地図|ちず|map`),
 LW('Seasons and weather',`春|はる|spring;夏|なつ|summer;秋|あき|autumn;冬|ふゆ|winter;晴れ|はれ|sunny;曇り|くもり|cloudy;今朝|けさ|this morning;今晩|こんばん|tonight`),
 LW('How often and when',`毎週|まいしゅう|every week;毎晩|まいばん|every night;来年|らいねん|next year;去年|きょねん|last year;今週|こんしゅう|this week;今度|こんど|next time;再来月|さらいげつ|month after next;明後日|あさって|day after tomorrow`)]},
adj2:{title:'More Adjectives',sub:'Opposites, feelings and na-adjectives',lessons:[
 LW('Opposites',`暗い|くらい|dark;明るい|あかるい|bright;汚い|きたない|dirty;甘い|あまい|sweet;辛い|からい|spicy;低い|ひくい|low;太い|ふとい|thick;細い|ほそい|thin`),
 LW('Feelings and states',`危ない|あぶない|dangerous;痛い|いたい|painful;眠い|ねむい|sleepy;欲しい|ほしい|wanted;優しい|やさしい|kind, gentle;可愛い|かわいい|cute;暖かい|あたたかい|warm;涼しい|すずしい|cool`),
 LW('More na-adjectives',`簡単|かんたん|simple;大切|たいせつ|important, precious;大変|たいへん|hard, serious;丈夫|じょうぶ|sturdy;立派|りっぱ|splendid;無理|むり|impossible;必要|ひつよう|necessary;素敵|すてき|wonderful`)]},
verb2:{title:'More Verbs',sub:'Actions, movement and everyday jobs',lessons:[
 LW('Start, stop, switch',`始まる|はじまる|to begin;終わる|おわる|to end;開く|あく|to open (by itself);閉まる|しまる|to close (by itself);付ける|つける|to turn on;消す|けす|to turn off;掛ける|かける|to hang, make a call;止まる|とまる|to stop`),
 LW('Movement',`走る|はしる|to run;曲がる|まがる|to turn;渡る|わたる|to cross;急ぐ|いそぐ|to hurry;呼ぶ|よぶ|to call;飛ぶ|とぶ|to fly;払う|はらう|to pay;置く|おく|to put, place`),
 LW('Body actions',`切る|きる|to cut;吸う|すう|to smoke, inhale;押す|おす|to push;引く|ひく|to pull;脱ぐ|ぬぐ|to take off;履く|はく|to wear (below the waist);浴びる|あびる|to take (a shower);磨く|みがく|to brush, polish`),
 LW('Mind and messages',`忘れる|わすれる|to forget;覚える|おぼえる|to remember;答える|こたえる|to answer;返す|かえす|to return (a thing);送る|おくる|to send;手伝う|てつだう|to help;掛かる|かかる|to take (time, money);要る|いる|to need`),
 LW('する words',`散歩|さんぽ|a walk;旅行|りょこう|travel;結婚|けっこん|marriage;質問|しつもん|question;練習|れんしゅう|practice;運転|うんてん|driving;コピー||copy;心配|しんぱい|worry`)]},
use2:{title:'More Useful Words',sub:'Connectors, pointers, school, health and hobbies',lessons:[
 LW('Degree and certainty',`もっと||more;ずっと||much more, all along;だんだん||gradually;必ず|かならず|without fail;きっと||surely;たぶん||probably;やっと||at last;まっすぐ||straight`),
 LW('Connecting ideas',`まず||first of all;次に|つぎに|next;最後に|さいごに|finally;例えば|たとえば|for example;それでは||well then;しかし||however;それに||besides;ところで||by the way`),
 LW('Pointing words',`これ||this;この||this (before a noun);そこ||there (near you);あそこ||over there;こちら||this way, this person;どなた||who (polite);いくつ||how many, how old;そちら||that way (near you)`),
 LW('General nouns',`物|もの|thing, object;事|こと|matter, thing;所|ところ|place;名前|なまえ|name;意味|いみ|meaning;趣味|しゅみ|hobby;夢|ゆめ|dream;用事|ようじ|errand`),
 LW('School and work',`授業|じゅぎょう|class, lesson;作文|さくぶん|composition;文|ぶん|sentence;字|じ|character, letter;漢字|かんじ|kanji;英語|えいご|English;留学生|りゅうがくせい|foreign student;会議|かいぎ|meeting`),
 LW('Health',`医者|いしゃ|doctor;風邪|かぜ|a cold;熱|ねつ|fever;歯|は|tooth;髪|かみ|hair;声|こえ|voice;背|せ|height, back;お大事に|おだいじに|take care (get well)`),
 LW('Sports and hobbies',`スポーツ||sports;テニス||tennis;サッカー||soccer;野球|やきゅう|baseball;スキー||skiing;プール||pool;ギター||guitar;ピアノ||piano`)]}};
const KEXTRA=[
 LK('Everyday kanji',`魚|ぎょ|fish|さかな;肉|にく|meat;茶|ちゃ|tea;米|べい|rice|こめ;店|てん|shop|みせ;道|どう|road|みち;町|ちょう|town|まち;村|そん|village|むら`),
 LK('More everyday kanji',`会|かい|meet|あ(う);社|しゃ|company;間|かん|interval|あいだ, ま;少|しょう|few|すく(ない), すこ(し);多|た|many|おお(い);好|こう|like|す(き);方|ほう|direction|かた;物|ぶつ|thing|もの`),
 LK('Verb kanji',`言|げん|say|い(う);立|りつ|stand|た(つ);作|さく|make|つく(る);使|し|use|つか(う);待|たい|wait|ま(つ);思|し|think|おも(う);知|ち|know|し(る);開|かい|open|ひら(く), あ(ける)`)];
const GEXTRA=[
 LG('これ, それ, あれ',['これ = this (near me)','それ = that (near you)','あれ = that over there (far from both)','これは ほんです。 This is a book.'],[
  ["＿＿は わたしの かばんです。\n(That one over there is my bag.)",["あれ","これ","どれ","ここ"],0,"あれ points at something far from both people."],
  ["A: ＿＿は なんですか。 B: それは ペンです。\n(A holds it up: What is this?)",["これ","あれ","どれ","そこ"],0,"A says これ for the thing in A's own hand; B says それ."],
  ["＿＿が あなたの かさですか。\n(Which one is your umbrella?)",["どれ","これ","それ","あれ"],0,"どれ asks which one among three or more."]]),
 LG('この, その, あの, どの',['Before a noun use この, その, あの, どの.','この ほん = this book','あの ひと = that person over there','どの ほん = which book'],[
  ["＿＿ ほんは わたしのです。\n(This book is mine.)",["この","これ","ここ","こう"],0,"A noun follows, so use この, not これ."],
  ["＿＿ かたは だれですか。\n(Who is that person over there?)",["あの","あれ","あそこ","どの"],0,"あの + noun means that over there."],
  ["＿＿ くつが すきですか。\n(Which shoes do you like?)",["どの","どれ","どこ","どう"],0,"どの + noun asks which."]]),
 LG('ここ, そこ, あそこ',['ここ = here, そこ = there (near you), あそこ = over there','Question word: どこ = where','トイレは あそこです。 The toilet is over there.'],[
  ["えきは ＿＿です。\n(The station is over there.)",["あそこ","あれ","あの","どの"],0,"Places use ここ, そこ, あそこ."],
  ["A: トイレは ＿＿ですか。 B: あちらです。\n(Where is the toilet?)",["どこ","どれ","どの","だれ"],0,"どこ asks about a place."],
  ["わたしは ＿＿で まって います。\n(I am waiting here.)",["ここ","これ","この","こう"],0,"ここ means the place where I am."]]),
 LG('だれの and どこの',['だれの = whose, どこの = from where','これは だれの かさですか。 Whose umbrella is this?','それは にほんの くるまです。 That is a Japanese car.'],[
  ["これは ＿＿ かばんですか。\n(Whose bag is this?)",["だれの","だれが","だれを","だれに"],0,"の after だれ asks about the owner."],
  ["これは わたし＿＿ かばんです。\n(This is my bag.)",["の","が","を","に"],0,"の shows ownership."],
  ["A: それは ＿＿ ほんですか。 B: にほんの ほんです。\n(What country's book is that?)",["どこの","だれの","いつの","なんの"],0,"どこの asks where it comes from."]]),
 LG('Location: に あります',['Place に thing が あります','つくえの うえに ほんが あります。 There is a book on the desk.','Use います for people and animals.'],[
  ["つくえの うえ＿＿ ほんが あります。\n(There is a book on the desk.)",["に","を","は","と"],0,"に marks the place where something exists."],
  ["いすの したに ねこ＿＿ います。\n(There is a cat under the chair.)",["が","を","で","へ"],0,"が marks what exists; います is for animals."],
  ["かばんの ＿＿に ほんが あります。\n(There is a book inside the bag.)",["なか","うしろ","となり","うえ"],0,"なか means inside."]]),
 LG('や and と for lists',['と = and (complete list)','や = and (examples, among others)','りんごや みかんを かいました。 I bought apples, mandarins and so on.'],[
  ["にくと さかな＿＿ たべます。\n(I eat meat and fish.)",["を","が","に","で"],0,"The whole list shares one を."],
  ["つくえの うえに ほんや ノート＿＿ あります。\n(There are books, notebooks and so on.)",["が","を","に","で"],0,"が marks things that exist."],
  ["りんご＿＿ みかんを かいました。\n(I bought apples, mandarins and so on.)",["や","と","が","も"],0,"や lists examples, with more implied."]]),
 LG('い-adjective + くて',['Change い to くて to join descriptions.','この へやは ひろくて あかるいです。 This room is spacious and bright.'],[
  ["この かばんは かるい＿＿ やすいです。\n(This bag is light and cheap.)",["くて","で","に","な"],0,"Drop い and add くて."],
  ["あの みせは おいしい＿＿ やすいです。\n(That shop is delicious and cheap.)",["くて","で","な","に"],0,"い-adjectives use くて."],
  ["この まちは しずか＿＿ きれいです。\n(This town is quiet and clean.)",["で","くて","に","な"],0,"な-adjectives use で."]]),
 LG('て-form: group 1',['う, つ, る → って (かう → かって)','む, ぶ, ぬ → んで (のむ → のんで)','く → いて (かく → かいて)','ぐ → いで (およぐ → およいで)','す → して (はなす → はなして)'],[
  ["のむ → ＿＿",["のんで","のって","のいて","のして"],0,"む changes to んで."],
  ["かく → ＿＿",["かいて","かって","かんで","かして"],0,"く changes to いて."],
  ["まつ → ＿＿",["まって","まいて","まんで","まして"],0,"つ changes to って."]]),
 LG('て-form: group 2 and 3',['る-verbs: drop る, add て (たべる → たべて)','する → して, くる → きて','いく is irregular: いって'],[
  ["たべる → ＿＿",["たべて","たべって","たべんで","たべいて"],0,"Drop る and add て."],
  ["くる → ＿＿",["きて","くて","こて","くって"],0,"くる is irregular."],
  ["いく → ＿＿",["いって","いいて","いんで","いきて"],0,"いく is the exception: いって."]]),
 LG('てから: after doing',['V1 てから V2 means "after V1, V2".','ごはんを たべてから、はを みがきます。 After eating, I brush my teeth.'],[
  ["しゅくだいを して＿＿、ねます。\n(I sleep after doing homework.)",["から","まで","より","ので"],0,"てから means after."],
  ["てを あらって＿＿ たべましょう。\n(Let us eat after washing hands.)",["から","まで","と","を"],0,"て-form + から = after."],
  ["おふろに はいって＿＿ ねます。\n(I go to bed after taking a bath.)",["から","まで","に","で"],0,"Order of actions."]]),
 LG('て for a sequence',['Join actions with the て-form. Only the last verb shows tense.','あさ おきて、かおを あらって、ごはんを たべました。'],[
  ["えきへ いって、でんしゃ＿＿ のります。\n(I go to the station and take the train.)",["に","を","で","が"],0,"のる takes に."],
  ["ほんを よんで、ねて＿＿。\n(I read a book and slept.)",["ました","ます","ません","ましょう"],0,"Only the final verb takes ました."],
  ["ともだちに あって、えいがを みて＿＿。\n(I met a friend and watched a movie.)",["ました","でした","ですか","だ"],0,"The last verb gives the tense."]]),
 LG('ない form',['Verb negative plain form: group 1 changes the last sound to あ + ない.','のむ → のまない, かく → かかない','たべる → たべない, する → しない, くる → こない'],[
  ["のむ → ＿＿",["のまない","のみない","のんない","のめない"],0,"む becomes ま before ない."],
  ["たべる → ＿＿",["たべない","たべらない","たべなかった","たべん"],0,"Drop る and add ない."],
  ["くる → ＿＿",["こない","きない","くない","くらない"],0,"くる is irregular: こない."]]),
 LG('ないで ください',['V ないで ください = Please do not V','ここで たばこを すわないで ください。 Please do not smoke here.'],[
  ["ここで しゃしんを とら＿＿ ください。\n(Please do not take photos here.)",["ないで","なくて","ません","ないと"],0,"ないで ください = please do not."],
  ["あした おくれ＿＿ ください。\n(Please do not be late tomorrow.)",["ないで","ませんで","なくて","ないと"],0,"Use the ない form + で."],
  ["でんわを し＿＿ ください。\n(Please do not call.)",["ないで","なくて","ませんで","ずに"],0,"し + ないで."]]),
 LG('ましょうか: shall I?',['V ましょうか = Shall I V? / Shall we V?','にもつを もちましょうか。 Shall I carry your luggage?'],[
  ["まどを あけ＿＿。\n(Shall I open the window?)",["ましょうか","ませんか","ますか","ました"],0,"ましょうか offers help."],
  ["いっしょに ひるごはんを たべ＿＿。\n(Shall we eat lunch together?)",["ましょうか","ましたか","ませんでした","ない"],0,"ましょうか invites."],
  ["てつだい＿＿。\n(Shall I help?)",["ましょうか","ました","ません","ますよ"],0,"Offer: ましょうか."]]),
 LG('ほしい: want a thing',['Noun が ほしいです = I want a noun','わたしは あたらしい くるまが ほしいです。','たい is for verbs; ほしい is for things.'],[
  ["わたしは あたらしい かばん＿＿ ほしいです。\n(I want a new bag.)",["が","を","に","で"],0,"The wanted thing takes が."],
  ["なにが ＿＿ですか。\n(What do you want?)",["ほしい","たい","ます","ある"],0,"ほしい goes with a noun."],
  ["あなたは ともだちが ＿＿か。\n(Do you want friends?)",["ほしいです","たいです","ありません","います"],0,"ほしいです + か."]]),
 LG('あげる, もらう',['あげる = give (to someone else)','もらう = receive','わたしは ともだちに はなを あげました。','ともだちから はなを もらいました。'],[
  ["わたしは ともだち＿＿ プレゼントを あげました。\n(I gave a present to my friend.)",["に","を","が","で"],0,"The receiver takes に."],
  ["ははから かばんを ＿＿ました。\n(I received a bag from my mother.)",["もらい","あげ","くれ","かい"],0,"もらいました = received."],
  ["わたしは せんせい＿＿ ほんを もらいました。\n(I received a book from my teacher.)",["に","を","で","が"],0,"に or から marks the giver."]]),
 LG('になります: become',['Noun / な-adj + に なります','い-adj (く) + なります','さむく なりました。 It became cold.','げんきに なりました。 I became well.'],[
  ["さむ＿＿ なりました。\n(It became cold.)",["く","に","で","が"],0,"い-adjectives use く."],
  ["へやが きれい＿＿ なりました。\n(The room became clean.)",["に","く","で","な"],0,"な-adjectives and nouns use に."],
  ["わたしは せんせい＿＿ なりました。\n(I became a teacher.)",["に","を","が","で"],0,"Noun + に なります."]]),
 LG('Nouns: past tense',['です → でした (was)','ではありません → ではありませんでした (was not)','きのうは あめでした。 It was rainy yesterday.'],[
  ["きのうは にちようび＿＿。\n(Yesterday was Sunday.)",["でした","です","ました","だった"],0,"Noun + でした."],
  ["きのうは あめでは ＿＿。\n(It was not rainy yesterday.)",["ありませんでした","ありません","ないです","ませんでした"],0,"Past negative noun form."],
  ["わたしは おととし がくせい＿＿。\n(I was a student two years ago.)",["でした","です","ます","でしょう"],0,"Past: でした."]]),
 LG('ね and よ',['ね = right? / isn\'t it? (agreement)','よ = I tell you (new information)','いい てんきですね。 Nice weather, isn\'t it?','あしたは やすみですよ。 Tomorrow is a holiday, you know.'],[
  ["いい てんき＿＿。\n(Nice weather, isn't it?)",["ですね","ですよ","ですか","でした"],0,"ね seeks agreement."],
  ["あしたは やすみ＿＿。\n(Tomorrow is a holiday, you know! Telling new information.)",["ですよ","ですね","ですか","でした"],0,"よ gives the listener new information."],
  ["これは おいしい＿＿。\n(This is delicious, isn't it?)",["ですね","ですか","でした","ます"],0,"ね checks agreement."]]),
 LG('Counters in sentences',['Things: ひとつ, ふたつ, みっつ','People: ひとり, ふたり, さんにん','Flat things: いちまい; long things: いっぽん','Counter goes after the object and particle.'],[
  ["りんごを ＿＿ ください。\n(Please give me three apples.)",["みっつ","さんにん","さんまい","さんぼん"],0,"Round objects use the つ series."],
  ["かぞくは ＿＿です。\n(There are four people in my family.)",["よにん","よっつ","よんまい","よんぼん"],0,"People use にん; four is よにん."],
  ["きっぷを ＿＿ ください。\n(Please give me two tickets.)",["にまい","ふたり","にほん","ふたつ"],0,"Flat things use まい."]]),
 LG('ごろ and ぐらい',['時刻 + ごろ = around (a time)','Amount + ぐらい = about (an amount)','7じごろ おきます。 I get up around 7.','1じかんぐらい かかります。 It takes about an hour.'],[
  ["あしたは 7じ＿＿ おきます。\n(Tomorrow I get up around 7.)",["ごろ","ぐらい","だけ","しか"],0,"ごろ goes with a clock time."],
  ["えきまで 10ぷん＿＿ かかります。\n(It takes about 10 minutes to the station.)",["ぐらい","ごろ","まで","から"],0,"ぐらい goes with an amount."],
  ["ここから がっこうまで 1じかん＿＿です。\n(It is about one hour from here to school.)",["ぐらい","ごろ","まで","に"],0,"Duration + ぐらい."]]),
 LG('あまり ... ません',['あまり + negative = not very','わたしは さかなを あまり たべません。','Positive verbs cannot go with あまり.'],[
  ["この ほんは ＿＿ おもしろくないです。\n(This book is not very interesting.)",["あまり","とても","よく","もう"],0,"あまり needs a negative."],
  ["わたしは コーヒーを ＿＿ のみません。\n(I do not drink coffee very much.)",["あまり","いつも","とても","よく"],0,"あまり ... ません."],
  ["きょうは ＿＿ いそがしくないです。\n(I am not very busy today.)",["あまり","たくさん","まだ","すぐ"],0,"あまり + negative."]]),
 LG('が できます: can',['Noun が できます = can do noun','Dictionary form + ことが できます','わたしは にほんごが できます。','およぐことが できます。 I can swim.'],[
  ["わたしは にほんご＿＿ できます。\n(I can speak Japanese.)",["が","を","に","で"],0,"The skill takes が."],
  ["ピアノを ひく ことが ＿＿。\n(I can play the piano.)",["できます","します","あります","います"],0,"できます = can."],
  ["およぐ＿＿が できますか。\n(Can you swim?)",["こと","もの","ところ","ひと"],0,"Dictionary form + こと + が できます."]]),
 LG('どのくらい: how long',['どのくらい = how long / how much','どのくらい かかりますか。 How long does it take?','ひとつ + かかります: takes (time or money)'],[
  ["いえから えきまで ＿＿ かかりますか。\n(How long does it take from home to the station?)",["どのくらい","どこ","だれ","なぜ"],0,"どのくらい asks amount or duration."],
  ["バスで 30ぷん ＿＿。\n(It takes 30 minutes by bus.)",["かかります","あります","います","します"],0,"かかります = takes (time)."],
  ["でんしゃで ＿＿ かかりますか。\n(How long by train?)",["どのくらい","どれ","どの","いつも"],0,"Ask duration."]]),
 LG('を ください and ですか',['Thing を ください = Please give me thing','これを ください。 Please give me this.','おねがいします is also used when ordering.'],[
  ["コーヒー＿＿ ください。\n(Please give me a coffee.)",["を","が","に","で"],0,"を marks what you ask for."],
  ["みずを ひとつ ＿＿。\n(Please give me one glass of water.)",["ください","ません","ですか","います"],0,"ください = please give."],
  ["その ほんを ＿＿ ください。\n(Please show me that book.)",["みせて","みせ","みせる","みせた"],0,"て-form + ください."]]),
 LG('なにも and だれも',['なにも + negative = nothing','だれも + negative = nobody','だれも いません。 Nobody is here.','なにも たべませんでした。 I ate nothing.'],[
  ["へやには ＿＿ いません。\n(There is nobody in the room.)",["だれも","だれが","だれか","だれの"],0,"だれも + negative = nobody."],
  ["けさは ＿＿ たべませんでした。\n(I ate nothing this morning.)",["なにも","なにか","なにを","なにの"],0,"なにも + negative = nothing."],
  ["つくえの うえには ＿＿ ありません。\n(There is nothing on the desk.)",["なにも","なにが","なにか","なにの"],0,"なにも goes with a negative verb."]]),
 LG('Past negative: ませんでした',['V ませんでした = did not V','きのう がっこうへ いきませんでした。 I did not go to school yesterday.'],[
  ["きのうは なにも たべ＿＿。\n(I ate nothing yesterday.)",["ませんでした","ません","ました","ないです"],0,"Past negative: ませんでした."],
  ["けさ しんぶんを よみ＿＿。\n(I did not read a newspaper this morning.)",["ませんでした","ました","ません","ましょう"],0,"Past negative."],
  ["せんしゅう あいませ＿＿。\n(We did not meet last week.)",["んでした","ん","した","んです"],0,"ません + でした."]]),
 LG('Telling time',['～じ = o\'clock, ～ふん / ぷん = minutes','3じ 15ふん = 3:15, 3じ はん = 3:30','Time に action: 7じに おきます。'],[
  ["わたしは 7じ＿＿ おきます。\n(I get up at 7.)",["に","で","を","が"],0,"A clock time takes に."],
  ["いま 3じ ＿＿です。\n(It is 3:30 now.)",["はん","ふん","ごろ","まで"],0,"はん means half past."],
  ["かいぎは 10じ＿＿ 11じまでです。\n(The meeting is from 10 to 11.)",["から","に","を","と"],0,"から ... まで marks a time range."]])
];
const RXTRA=[
 LR('Weekend plan',"わたしは しゅうまつに ともだちと うみへ いきます。でんしゃで 1じかん ぐらい かかります。うみで およいで、それから ひるごはんを たべます。","I am going to the sea with a friend on the weekend. It takes about an hour by train. We will swim at the sea and then eat lunch.",[["How will they go to the sea?",["By train","By bus","By car","On foot"],0],["What will they do after swimming?",["Eat lunch","Go home","Take a nap","Go shopping"],0]]),
 LR('A message',"やまださんへ。きょうは かぜで やすみます。しごとは あした いきます。かいぎの しりょうは つくえの うえに あります。すずき","To Mr. Yamada: I am off today because of a cold. I will come to work tomorrow. The meeting documents are on the desk. Suzuki",[["Why is Suzuki absent today?",["Has a cold","Has a meeting","Went to the sea","Is on a trip"],0],["Where are the documents?",["On the desk","In the bag","In the meeting room","At home"],0]]),
 LR('My day',"わたしの いちにち。あさ 7じに おきます。8じに うちを でて、バスで がっこうへ いきます。じゅぎょうは 9じから 3じまでです。よる 11じに ねます。","My day. I get up at 7 in the morning. I leave home at 8 and go to school by bus. Class is from 9 to 3. I go to bed at 11 at night.",[["How does the writer go to school?",["By bus","By train","By bicycle","On foot"],0],["When does class end?",["3:00","9:00","8:00","11:00"],0]]),
 LR('Restaurant sign',"レストラン さくら。ひるごはん 11じから 2じまで。ゆうごはん 5じから 10じまで。やすみは げつようびです。","Restaurant Sakura. Lunch from 11 to 2. Dinner from 5 to 10. Closed on Monday.",[["When is the restaurant closed?",["Monday","Sunday","Friday","Saturday"],0],["When does lunch end?",["2:00","11:00","5:00","10:00"],0]]),
 LR('My family',"わたしは 4にん かぞくです。ちちと ははと いもうとが います。ちちは かいしゃいんです。ははは せんせいです。いもうとは こうこうせいです。","There are four people in my family. I have a father, a mother and a younger sister. My father is an office worker. My mother is a teacher. My younger sister is a high school student.",[["Who is a teacher?",["The mother","The father","The younger sister","The writer"],0],["How many people are in the family?",["Four","Three","Five","Two"],0]]),
 LR('Birthday',"きのうは わたしの たんじょうびでした。かぞくと レストランで ごはんを たべました。ははから あたらしい かばんを もらいました。とても うれしかったです。","Yesterday was my birthday. I ate with my family at a restaurant. I received a new bag from my mother. I was very happy.",[["Who gave the writer a bag?",["Mother","Father","A friend","A teacher"],0],["Where did they eat?",["At a restaurant","At home","At school","At a park"],0]]),
 LR('Rainy day',"きょうは あめです。かぜも つよいです。だから、がっこうへ バスで いきます。いつもは じてんしゃで いきます。","Today it is rainy. The wind is also strong. So I will go to school by bus. Usually I go by bicycle.",[["How does the writer usually go to school?",["By bicycle","By bus","By train","On foot"],0],["Why does the writer take the bus today?",["Rain and wind","A holiday","A broken bicycle","Being late"],0]]),
 LR('Library notice',"としょかんの おしらせ。ほんは 2しゅうかん かりる ことが できます。1かいに 5さつまでです。げつようびは やすみです。","Library notice. You can borrow books for two weeks. Up to five books at a time. Closed on Mondays.",[["How many books can you borrow at once?",["Five","Two","Ten","One"],0],["How long can you keep a book?",["Two weeks","One week","One month","One day"],0]])];
const LDL=[
 LD('Shopping and prices',[
  [[['A','いらっしゃいませ。'],['B','この りんごは いくらですか。'],['A','ひとつ 150えんです。'],['B','じゃ、みっつ ください。']],'How many apples does B buy?',['Three','Two','Five','One'],0,'B asks the price (150 yen each) and buys three.'],
  [[['A','この シャツは いくらですか。'],['B','3,000えんです。'],['A','ちょっと たかいですね。あの シャツは？'],['B','あれは 2,000えんです。'],['A','じゃ、あれを ください。']],'Which shirt does A buy?',['The 2,000 yen one','The 3,000 yen one','Both','Neither'],0,'A finds the first shirt too expensive and takes the one over there.'],
  [[['A','コーヒーを ふたつ おねがいします。'],['B','はい。ぜんぶで 600えんです。']],'How much is the total?',['600 yen','300 yen','1,200 yen','200 yen'],0,'The total for two coffees is 600 yen.']]),
 LD('Time and appointments',[
  [[['A','あしたの かいぎは なんじからですか。'],['B','10じからです。'],['A','なんじに おわりますか。'],['B','11じ はんに おわります。']],'What time does the meeting end?',['11:30','10:00','11:00','10:30'],0,'It starts at 10 and ends at 11:30.'],
  [[['A','にちようびに えいがを みませんか。'],['B','いいですね。なんじに あいますか。'],['A','2じに えきで あいましょう。']],'Where will they meet?',['At the station','At the cinema','At school','At home'],0,'They will meet at 2 at the station.'],
  [[['A','まいあさ なんじに おきますか。'],['B','6じ はんに おきます。'],['A','はやいですね。'],['B','ええ、7じに うちを でます。']],'What time does B leave home?',['7:00','6:30','6:00','8:00'],0,'B wakes at 6:30 and leaves at 7.']]),
 LD('Directions and places',[
  [[['A','すみません、えきは どこですか。'],['B','まっすぐ いって、あの かどを みぎに まがって ください。'],['A','ありがとうございます。']],'Which way should A turn at the corner?',['Right','Left','Straight','Back'],0,'Go straight and turn right at the corner.'],
  [[['A','ゆうびんきょくは どこに ありますか。'],['B','ぎんこうの となりです。']],'Where is the post office?',['Next to the bank','Behind the bank','In front of the station','Next to the school'],0,'It is next to the bank.'],
  [[['A','トイレは どこですか。'],['B','にかいに あります。エレベーターの ひだりです。']],'Where is the toilet?',['Second floor, left of the elevator','First floor','Second floor, right of the elevator','Third floor'],0,'It is on the second floor, to the left of the elevator.']]),
 LD('Daily life',[
  [[['A','きのう なにを しましたか。'],['B','ともだちと サッカーを しました。'],['A','たのしかったですか。'],['B','はい、とても たのしかったです。']],'What did B do yesterday?',['Played soccer with a friend','Watched a movie','Studied','Stayed home'],0,'B played soccer with a friend and enjoyed it.'],
  [[['A','おなかが いたいです。'],['B','だいじょうぶですか。びょういんへ いきましょうか。'],['A','はい、おねがいします。']],'What will they do?',['Go to the hospital','Buy medicine','Go home','Eat lunch'],0,'B offers to go to the hospital and A accepts.'],
  [[['A','せんしゅうの にちようびは なにを しましたか。'],['B','うみへ いきました。でも、あめでした。'],['A','ざんねんでしたね。']],'How was the weather?',['Rainy','Sunny','Snowy','Cloudy'],0,'They went to the sea, but it rained.']])];

const DLG=LDL.flatMap(l=>l.listen);
const O5=N5_OLD;
O5[7].lessons.push(...KEXTRA);O5[8].lessons.push(...GEXTRA);O5[9].lessons.push(...RXTRA);
const N5=[N5_NEW.greet,O5[0],O5[1],N5_NEW.count,O5[2],N5_NEW.life,O5[3],O5[4],N5_NEW.adj2,O5[5],N5_NEW.verb2,O5[6],N5_NEW.use2,O5[7],O5[8],O5[9],
 {title:'N5 Listening',sub:'Short conversations, read aloud. Needs a Japanese voice on your device.',lessons:LDL}];
O5[7].sub='About 120 kanji from the N5 range';
(function(){const M=[1,2,4,6,7,9,11,13,14,15];if(S.m2)return;const nd={};Object.keys(S.done||{}).forEach(k=>{const m=/^n5u(\d+)l(\d+)$/.exec(k);if(m&&M[+m[1]]!==undefined)nd['n5u'+M[+m[1]]+'l'+m[2]]=S.done[k];else nd[k]=S.done[k]});S.done=nd;S.m2=1;save()})();
