/* ---------- JLPT N4 course: original practice material in the official exam formats ---------- */
CURL=4;
const N4=[
{title:'Home and Daily Life',sub:'Rooms, chores, plans and money',lessons:[
 LW('Home and chores',`台所|だいどころ|kitchen;階段|かいだん|stairs;冷蔵庫|れいぞうこ|refrigerator;洗濯|せんたく|laundry;掃除|そうじ|cleaning;趣味|しゅみ|hobby;約束|やくそく|promise, appointment;予定|よてい|plan, schedule`),
 LW('Shopping and money',`値段|ねだん|price;財布|さいふ|wallet;袋|ふくろ|bag;店員|てんいん|shop clerk;現金|げんきん|cash;お釣り|おつり|change;安売り|やすうり|sale;品物|しなもの|goods`),
 LW('Food and cooking',`料理|りょうり|cooking, dish;味|あじ|taste;砂糖|さとう|sugar;塩|しお|salt;醤油|しょうゆ|soy sauce;弁当|べんとう|boxed lunch;米|こめ|uncooked rice;飲み物|のみもの|drink`)]},
{title:'School and Work',sub:'Classes, exams, offices and business trips',lessons:[
 LW('School life',`授業|じゅぎょう|class, lesson;試験|しけん|exam;成績|せいせき|grades;卒業|そつぎょう|graduation;入学|にゅうがく|entering school;研究|けんきゅう|research;留学|りゅうがく|study abroad;経験|けいけん|experience`),
 LW('At the office',`会議|かいぎ|meeting;社長|しゃちょう|company president;残業|ざんぎょう|overtime work;出張|しゅっちょう|business trip;給料|きゅうりょう|salary;工場|こうじょう|factory;連絡|れんらく|contact;準備|じゅんび|preparation`)]},
{title:'Travel and Places',sub:'Getting around, tickets and sights',lessons:[
 LW('Travel',`空港|くうこう|airport;港|みなと|harbor, port;地図|ちず|map;切符|きっぷ|ticket;予約|よやく|reservation;席|せき|seat;出発|しゅっぱつ|departure;運転|うんてん|driving`),
 LW('Places and nature',`池|いけ|pond;島|しま|island;森|もり|forest;橋|はし|bridge;神社|じんじゃ|shrine;寺|てら|temple;動物園|どうぶつえん|zoo;美術館|びじゅつかん|art museum`)]},
{title:'Body and Feelings',sub:'Health, hospitals and emotions',lessons:[
 LW('Health',`熱|ねつ|fever;怪我|けが|injury;体|からだ|body;健康|けんこう|health;入院|にゅういん|hospital admission;退院|たいいん|leaving hospital;お見舞い|おみまい|visit to a sick person;注射|ちゅうしゃ|injection`),
 LW('Feelings',`悲しい|かなしい|sad;寂しい|さびしい|lonely;恥ずかしい|はずかしい|embarrassed;怖い|こわい|scary;苦しい|くるしい|painful, hard;眠い|ねむい|sleepy;厳しい|きびしい|strict;偉い|えらい|great, admirable`)]},
{title:'Verbs',sub:'Pairs of verbs and everyday actions',lessons:[
 LW('Action verbs',`集める|あつめる|to collect;決める|きめる|to decide;続ける|つづける|to continue;調べる|しらべる|to look into;慣れる|なれる|to get used to;間違える|まちがえる|to make a mistake;片付ける|かたづける|to tidy up;伝える|つたえる|to convey`),
 LW('Verb pairs',`壊れる|こわれる|to break (by itself);壊す|こわす|to break (something);落ちる|おちる|to fall;落とす|おとす|to drop;治る|なおる|to heal;直す|なおす|to repair;起こす|おこす|to wake someone;運ぶ|はこぶ|to carry`),
 LW('More verbs',`届ける|とどける|to deliver;迎える|むかえる|to welcome;頑張る|がんばる|to do one's best;払う|はらう|to pay;踊る|おどる|to dance;笑う|わらう|to laugh;泣く|なく|to cry;経つ|たつ|to pass (time)`)]},
{title:'Adjectives and Adverbs',sub:'Describe things and add nuance',lessons:[
 LW('Adjectives',`汚い|きたない|dirty;細い|ほそい|thin;太い|ふとい|thick;深い|ふかい|deep;浅い|あさい|shallow;濃い|こい|dark, strong;薄い|うすい|thin, weak;優しい|やさしい|kind, gentle`),
 LW('Adverbs',`必ず|かならず|without fail;特に|とくに|especially;急に|きゅうに|suddenly;例えば|たとえば|for example;確か|たしか|if I remember correctly;最近|さいきん|recently;実は|じつは|actually;初めて|はじめて|for the first time`)]},
{title:'N4 Kanji',sub:'About 170 kanji beyond N5 are tested. Here are 24 common ones.',lessons:[
 LK('Kanji set 1',`意|い|meaning, mind|意見 いけん opinion;味|あじ|taste|意味 いみ meaning;計|けい|measure|時計 とけい clock;画|が|picture|映画 えいが movie;質|しつ|quality|質問 しつもん question;題|だい|topic|問題 もんだい problem;院|いん|institution|病院 びょういん hospital;屋|や|shop, roof|本屋 ほんや bookshop`),
 LK('Kanji set 2',`化|か|change|文化 ぶんか culture;活|かつ|lively|生活 せいかつ life;教|きょう|teach|教室 きょうしつ classroom;室|しつ|room|教室 きょうしつ classroom;歌|か|song|歌手 かしゅ singer;運|うん|carry, luck|運動 うんどう exercise;動|どう|move|動物 どうぶつ animal;写|しゃ|copy|写真 しゃしん photo`),
 LK('Kanji set 3',`験|けん|test|試験 しけん exam;親|しん|parent, close|親切 しんせつ kind;族|ぞく|family, tribe|家族 かぞく family;発|はつ|emit, depart|出発 しゅっぱつ departure;空|くう|sky, empty|空港 くうこう airport;海|かい|sea|海外 かいがい overseas;工|こう|craft|工場 こうじょう factory;業|ぎょう|business, deed|授業 じゅぎょう class`)]},
{title:'N4 Grammar',sub:'Choose the best word to fill the blank',lessons:[
 LG('ようにする and ようになる','V dictionary form + ようにする means try to do. ようになる means come to be able to do or start doing. V ない form + ように means so that you do not.',[
  ["毎日 やさいを 食べる＿＿ しています。\n(I try to eat vegetables every day.)",["ように","ために","ことが","ばかり"],0,"ようにする means to try to do something as a habit."],
  ["日本に 住んで、なっとうが 食べられる＿＿ なりました。\n(Living in Japan, I became able to eat natto.)",["ように","ために","ことに","そうに"],0,"ようになる describes a change in ability or habit."],
  ["わすれない＿＿、メモを とります。\n(I take notes so that I do not forget.)",["ように","ばかり","ほど","さえ"],0,"V ない + ように expresses a goal: so that you do not."],
  ["先生は 学生に 毎日 日記を 書く＿＿ 言いました。\n(The teacher told the students to write a diary every day.)",["ように","ために","そうに","ことを"],0,"V + ように 言う reports an instruction."]]),
 LG('てしまう, ておく, てある','Vて+しまう: finished completely or regret. Vて+おく: do in advance. Vて+ある: a state left by someone on purpose.',[
  ["しゅくだいを うちに わすれて＿＿。\n(I left my homework at home. Regret.)",["しまいました","おきました","ありました","みました"],0,"てしまう can show regret about something that happened."],
  ["パーティーの まえに、のみものを 買って＿＿。\n(I will buy drinks in advance of the party.)",["おきます","しまいます","いきます","くれます"],0,"ておく means do something in preparation."],
  ["まどが 開けて＿＿ ので、さむいです。\n(It is cold because the window has been left open.)",["ある","いる","おく","しまう"],0,"Transitive verb + てある describes a state caused by someone."],
  ["この ふく、ちょっと 着て＿＿ いいですか。\n(May I try on this clothing?)",["みても","しまっても","おいても","いっても"],0,"てみる means try doing."]]),
 LG('そうだ, ようだ, らしい','Stem+そうだ: looks like. Plain+そうだ: I heard. ようだ: seems or like. らしい: apparently or typical of.',[
  ["空が くらくて、雨が 降り＿＿です。\n(The sky is dark. It looks like rain.)",["そう","よう","らしい","みたい"],0,"Verb stem + そうだ describes what something looks like."],
  ["山田さんの 話では、来週 しけんが ある＿＿です。\n(According to Yamada, there is an exam next week.)",["そう","ように","ほど","ばかり"],0,"Plain form + そうだ reports what you heard."],
  ["かれは 医者の＿＿ 話します。\n(He talks like a doctor.)",["ように","そうに","ために","ばかり"],0,"Noun + の + ように means like."],
  ["この ケーキは あま＿＿ です。\n(This cake looks sweet.)",["そう","よう","らしい","がる"],0,"い-adjective stem + そう describes appearance."]]),
 LG('Passive and causative','Passive: られる / れる. Causative: させる / せる. The doer of the causative gets に.',[
  ["先生に 名前を 呼ば＿＿。\n(I was called by name by the teacher.)",["れました","せました","させました","られました"],0,"Group 1 verb 呼ぶ becomes 呼ばれる in the passive."],
  ["母は 弟に やさいを 食べ＿＿。\n(Mother made my younger brother eat vegetables.)",["させました","られました","れました","せました"],0,"Group 2 verb 食べる becomes 食べさせる in the causative."],
  ["でんしゃで となりの 人に 足を ふま＿＿。\n(My foot was stepped on by the person next to me.)",["れました","せました","させました","ました"],0,"Group 1 verb 踏む becomes 踏まれる (passive)."],
  ["先生は 学生に さくぶんを 書か＿＿。\n(The teacher made the students write an essay.)",["せました","れました","されました","させました"],0,"Group 1 verb 書く becomes 書かせる in the causative."]]),
 LG('ことにする, ことになる, ところ, ばかり','ことにする: I decide. ことになる: it has been decided. V+ところ: about to, in the middle of. Vた+ばかり: just did.',[
  ["来月から 東京で はたらく＿＿ なりました。\n(It has been decided that I will work in Tokyo from next month.)",["ことに","ように","そうに","ために"],0,"ことになる describes a decision made by circumstances."],
  ["けんこうの ために、たばこを やめる＿＿ しました。\n(For my health, I decided to quit smoking.)",["ことに","ように","ばかり","ほど"],0,"ことにする is your own decision."],
  ["いま、ごはんを 食べて いる＿＿ です。\n(I am in the middle of eating now.)",["ところ","ため","はず","よう"],0,"V ている + ところ means in the middle of doing."],
  ["田中さんは きのう 日本に 来た＿＿ です。\n(Mr. Tanaka came to Japan just yesterday.)",["ばかり","はず","つもり","ように"],0,"Vた + ばかり means just did."]]),
 LG('Polite and humble speech','Honorific (respect for others): いらっしゃる, 召し上がる. Humble (lower yourself): 申す, いただく, お〜する.',[
  ["社長は いま どちらに ＿＿ か。\n(Where is the president now?)",["いらっしゃいます","おります","まいります","もうします"],0,"いらっしゃる is the honorific form of いる."],
  ["わたしは 田中と ＿＿。\n(My name is Tanaka.)",["もうします","おっしゃいます","いらっしゃいます","めしあがります"],0,"申す is the humble form of 言う."],
  ["わたしは 先生に 本を かして ＿＿。\n(I received the favor of borrowing a book from my teacher.)",["いただきました","くださいました","あげました","やりました"],0,"〜ていただく is humble: receive a favor from a superior."],
  ["あした、しりょうを お送り＿＿。\n(I will send the documents tomorrow.)",["します","になります","くださいます","させます"],0,"お + V stem + する is a humble pattern."]]),
 LG('Giving and receiving, ながら, ばかり','あげる/くれる/もらう show who gives. ながら: two actions at once. てばかりいる: do nothing but.',[
  ["ともだちが わたしに 道を 教えて ＿＿ました。\n(My friend told me the way.)",["くれ","あげ","もらい","やり"],0,"When someone gives you something, use くれる with が."],
  ["音楽を 聞き＿＿ 勉強します。\n(I study while listening to music.)",["ながら","たり","ので","ばかり"],0,"V stem + ながら means while doing."],
  ["あには やすみの 日は 寝て＿＿ います。\n(My brother does nothing but sleep on his days off.)",["ばかり","ながら","ほど","ぐらい"],0,"Vて + ばかりいる means do nothing but."],
  ["雨が 降って いる＿＿、でかけました。\n(Even though it was raining, I went out.)",["のに","ので","から","ように"],0,"のに shows a result that goes against expectation."]]),
 LG('Reasons and ease','Vstem+すぎる: too much. Vstem+やすい / にくい: easy or hard to do. ために: because of or in order to.',[
  ["この かんじは 難し＿＿ て、おぼえられません。\n(This kanji is too difficult for me to remember.)",["すぎ","やすく","たく","そう"],0,"い-adjective stem + すぎる means too much."],
  ["この ペンは 書き＿＿ です。\n(This pen is easy to write with.)",["やすい","すぎ","そう","ながら"],0,"V stem + やすい means easy to do."],
  ["びょうきの ＿＿、会社を 休みました。\n(Because of illness, I took a day off.)",["ために","ように","ばかり","ながら"],0,"Noun + の + ために gives a reason."],
  ["この 道は よる くらくて 歩き＿＿ です。\n(This road is dark at night and hard to walk on.)",["にくい","やすい","すぎ","そう"],0,"V stem + にくい means hard to do."]])]},
{title:'N4 Reading',sub:'Short passages like those in the real exam',lessons:[
 LR('A message to a colleague',"田中さんへ。あしたの 会議は 午後三時から 二階の 会議室で 行います。しりょうは わたしが コピーして おきます。田中さんは プロジェクターを じゅんびして ください。もし 来られない ばあいは、きょうじゅうに 連絡して ください。山本","To Mr. Tanaka: Tomorrow's meeting is at 3 pm in the meeting room on the second floor. I will copy the documents in advance. Please prepare the projector. If you cannot come, please contact me by the end of today. Yamamoto",[["Where is the meeting?",["The second-floor meeting room","The first-floor office","Tanaka's room","The cafeteria"],0],["Who will copy the documents?",["Yamamoto","Tanaka","The president","Nobody"],0],["What should Tanaka prepare?",["The projector","The documents","Tea","The room reservation"],0]]),
 LR('Library notice',"図書館からの おしらせ。来週の 月曜日から 金曜日まで、工事の ため 図書館は 閉まります。本は 返却ポストに 入れて ください。借りた 本の 期限は 一週間 のびます。","Notice from the library. From next Monday to Friday the library is closed because of construction. Please put books in the return box. The due dates of borrowed books are extended by one week.",[["Why is the library closed?",["Because of construction","Because of a holiday","Because of a storm","Because of cleaning"],0],["How should books be returned during the closure?",["In the return box","At the front desk","By post","By email"],0],["What happens to due dates?",["They are extended by one week","They stay the same","They are cancelled","They are shortened"],0]]),
 LR('A hike',"先週の 日曜日、友達と 山に 登りました。朝は 天気が よかったのですが、昼ごろから 雨が 降り出しました。かさを 持って いなかったので、ぬれて しまいました。でも、ちょうじょうから 見た けしきは 本当に きれいでした。また 行きたいです。","Last Sunday I climbed a mountain with a friend. The weather was good in the morning, but from around noon it started to rain. Because we had no umbrellas, we got wet. But the view from the summit was really beautiful. I want to go again.",[["What happened around noon?",["It started to rain","It got very hot","They reached the top","They had lunch"],0],["Why did the writer get wet?",["They had no umbrella","They fell in a river","They forgot a coat","They took a bath"],0],["How did the writer feel about the view?",["It was beautiful","It was boring","It was foggy","It was dangerous"],0]]),
 LR('Moving for work',"来月から 大阪に 引っこす ことに なりました。会社の 命令です。家族は 今の 家に のこりますが、わたしは 一人で 住みます。さびしいですが、しゅうまつは 家に 帰る つもりです。","From next month I will be moving to Osaka. It is a company order. My family will stay in our current house, but I will live alone. I will be lonely, but I plan to go home on weekends.",[["Why is the writer moving?",["A company order","Marriage","School","A new house"],0],["Who will stay in the current house?",["The family","The writer","A friend","Nobody"],0],["When does the writer plan to go home?",["On weekends","Every night","Once a year","Never"],0]])]},
{title:'N4 Listening',sub:'Short conversations, read aloud. Needs a Japanese voice on your device.',lessons:[
 LD('At the office',[
  [[['A','山田さん、この しりょうを コピーして おいて くれますか。'],['B','はい。何部ですか。'],['A','十部 おねがいします。会議は 三時からです。']],'How many copies are needed?',['Ten','Three','Thirteen','Thirty'],0,'A asks for ten copies. The meeting is at three.'],
  [[['A','田中さん、あしたの 出張ですが、何時の 新幹線に しますか。'],['B','朝 八時の に します。九時だと まに あわないかも しれません。'],['A','わかりました。切符は わたしが 予約して おきます。']],'Which train will B take?',['The 8 o clock train','The 9 o clock train','The 7 o clock train','The 10 o clock train'],0,'B chooses the 8 o clock train because 9 may be too late.'],
  [[['A','すみません、課長は いらっしゃいますか。'],['B','いま 会議中です。四時に 終わる 予定ですが。'],['A','では、四時すぎに また 来ます。']],'When will A come again?',['After 4','At 3','Tomorrow morning','Right now'],0,'A will come back after 4 when the meeting ends.']]),
 LD('Illness and hospital',[
  [[['A','どう しましたか。'],['B','きのうから 熱が あって、のどが いたいんです。'],['A','風邪ですね。薬を 出しますから、一日 三回 飲んで ください。']],'How often should B take the medicine?',['Three times a day','Once a day','Twice a day','Every hour'],0,'The doctor says three times a day.'],
  [[['A','田中さんの お見舞いに 行きましょうか。'],['B','ええ。でも、今は 面会時間が 終わって いるから、あしたに しましょう。']],'When will they visit?',['Tomorrow','Now','Tonight','Next week'],0,'Visiting hours are over, so they decide on tomorrow.'],
  [[['A','顔色が 悪いですよ。'],['B','きのう あまり 寝て いないんです。'],['A','今日は 早く 帰って 休んだ ほうが いいですよ。']],'What does A advise?',['Go home early and rest','See a doctor','Drink coffee','Work harder'],0,'A suggests going home early and resting.']]),
 LD('Travel',[
  [[['A','京都へ 行きたいんですが、新幹線と バスと どちらが 安いですか。'],['B','バスの ほうが 安いですが、時間が かかります。'],['A','じゃ、新幹線に します。']],'What does A choose?',['The Shinkansen','The bus','A plane','A car'],0,'The bus is cheaper but slow, so A takes the Shinkansen.'],
  [[['A','飛行機は 何時に 出発しますか。'],['B','午後 二時 十分です。でも 一時間前までに 空港に 来て ください。']],'By what time should A be at the airport?',['1:10 pm','2:10 pm','1:00 pm','12:10 pm'],0,'One hour before 2:10 pm is 1:10 pm.'],
  [[['A','駅まで 歩いて 何分ぐらい かかりますか。'],['B','十五分ぐらいです。バスなら 五分で つきます。'],['A','では、バスで 行きます。']],'How will A go to the station?',['By bus','On foot','By taxi','By bicycle'],0,'A chooses the bus because it takes five minutes.']]),
 LD('Plans and opinions',[
  [[['A','週末は 何を する 予定ですか。'],['B','友達と 映画を 見に 行く 予定でしたが、雨なので やめました。'],['A','そうですか。じゃ、家で ゆっくり しますね。']],'What happened to B\'s plan?',['It was cancelled because of rain','B went to the movie','B changed the day','B went alone'],0,'B gave up on the movie because of rain.'],
  [[['A','しけんは 難しかったですか。'],['B','ぶんぽうは かんたんでしたが、どっかいが 難しくて 時間が たりませんでした。']],'What was difficult for B?',['Reading','Grammar','Listening','Kanji'],0,'Grammar was easy, but reading was hard and took too long.'],
  [[['A','日本語は どのくらい 勉強して いますか。'],['B','二年です。でも まだ うまく 話せません。'],['A','毎日 少しずつ 話せば、上手に なりますよ。']],'What does A advise?',['Speak a little every day','Study only grammar','Watch more TV','Go to Japan at once'],0,'A recommends speaking a little each day.']])]}
];
N4[0].lessons.push(LW('Time and order',`昨夜|ゆうべ|last night;今朝|けさ|this morning;毎週|まいしゅう|every week;今度|こんど|this time, next time;間|あいだ|interval, while;最初|さいしょ|first;最後|さいご|last;途中|とちゅう|on the way`));
N4[1].lessons.push(LW('Communication',`返事|へんじ|reply;質問|しつもん|question;招待|しょうたい|invitation;紹介|しょうかい|introduction;遠慮|えんりょ|hesitation, holding back;注文|ちゅうもん|order;案内|あんない|guidance;連れる|つれる|to take along`));
N4[4].lessons.push(LW('More verbs 2',`乗り換える|のりかえる|to transfer;立てる|たてる|to set up, to make (a plan);並べる|ならべる|to line up;比べる|くらべる|to compare;育てる|そだてる|to raise;亡くなる|なくなる|to pass away;生まれる|うまれる|to be born;飾る|かざる|to decorate`));
