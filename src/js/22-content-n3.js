/* ---------- JLPT N3 course: original practice material in the official exam formats ---------- */
CURL=3;
const N3=[
{title:'Society and News',sub:'Words you meet in newspapers and the news',lessons:[
 LW('Society',`社会|しゃかい|society;政治|せいじ|politics;経済|けいざい|economy;事件|じけん|incident, case;事故|じこ|accident;情報|じょうほう|information;環境|かんきょう|environment;国民|こくみん|citizens`),
 LW('Daily problems',`引っ越し|ひっこし|moving house;渋滞|じゅうたい|traffic jam;締め切り|しめきり|deadline;領収書|りょうしゅうしょ|receipt;募集|ぼしゅう|recruitment;迷惑|めいわく|trouble, nuisance;遅刻|ちこく|being late;欠席|けっせき|absence`)]},
{title:'Work and People',sub:'Careers, relationships and character',lessons:[
 LW('Work',`就職|しゅうしょく|finding a job;面接|めんせつ|interview;契約|けいやく|contract;担当|たんとう|being in charge;責任|せきにん|responsibility;営業|えいぎょう|sales, business;販売|はんばい|selling;給与|きゅうよ|pay`),
 LW('People',`関係|かんけい|relationship;相談|そうだん|consultation;親戚|しんせき|relative;近所|きんじょ|neighborhood;態度|たいど|attitude;性格|せいかく|personality;印象|いんしょう|impression;礼儀|れいぎ|manners`)]},
{title:'Verbs',sub:'Suru-verbs and native verbs',lessons:[
 LW('Suru-verbs',`努力する|どりょくする|to make an effort;利用する|りようする|to use;確認する|かくにんする|to confirm;変更する|へんこうする|to change;参加する|さんかする|to take part;説明する|せつめいする|to explain;注意する|ちゅういする|to be careful, to warn;発表する|はっぴょうする|to announce, to present`),
 LW('Native verbs',`引き受ける|ひきうける|to take on;受け取る|うけとる|to receive;断る|ことわる|to decline;諦める|あきらめる|to give up;誘う|さそう|to invite;勧める|すすめる|to recommend;見つかる|みつかる|to be found;見つける|みつける|to find`)]},
{title:'Adjectives and Adverbs',sub:'Describe things and add nuance',lessons:[
 LW('Na-adjectives',`正確な|せいかくな|accurate;複雑な|ふくざつな|complicated;丁寧な|ていねいな|polite, careful;自然な|しぜんな|natural;貴重な|きちょうな|precious;確実な|かくじつな|certain;豊かな|ゆたかな|rich, abundant;平和な|へいわな|peaceful`),
 LW('Adverbs',`相変わらず|あいかわらず|as usual;思わず|おもわず|unintentionally;次第に|しだいに|gradually;少なくとも|すくなくとも|at least;結局|けっきょく|after all;突然|とつぜん|suddenly;当然|とうぜん|naturally;ちょうど|ちょうど|exactly, just`)]},
{title:'N3 Kanji',sub:'About 650 kanji in total by N3. Here are 24 common ones.',lessons:[
 LK('Kanji set 1',`政|せい|politics|政治 せいじ politics;経|けい|pass through|経済 けいざい economy;済|さい|finish|経済 けいざい economy;件|けん|matter|事件 じけん incident;報|ほう|report|情報 じょうほう information;境|きょう|boundary|環境 かんきょう environment;責|せき|blame|責任 せきにん responsibility;任|にん|duty|責任 せきにん responsibility`),
 LK('Kanji set 2',`接|せつ|touch|面接 めんせつ interview;契|けい|pledge|契約 けいやく contract;約|やく|promise|約束 やくそく promise;販|はん|sell|販売 はんばい sales;売|ばい|sell|売る うる to sell;係|けい|connection|関係 かんけい relationship;談|だん|talk|相談 そうだん consultation;態|たい|condition|態度 たいど attitude`),
 LK('Kanji set 3',`努|ど|strive|努力 どりょく effort;複|ふく|compound|複雑 ふくざつ complicated;確|かく|certain|確認 かくにん confirmation;認|にん|recognize|確認 かくにん confirmation;加|か|add|参加 さんか participation;説|せつ|explain|説明 せつめい explanation;注|ちゅう|pour, note|注意 ちゅうい caution;変|へん|change|変更 へんこう change`)]},
{title:'N3 Grammar',sub:'Choose the best word to fill the blank',lessons:[
 LG('Topic and viewpoint','について: about. に対して: toward. によると: according to. にとって: for (someone).',[
  ["日本の 経済＿＿＿ 調べて います。\n(I am researching Japan's economy.)",["について","に対して","にとって","によって"],0,"について marks the topic of study or discussion."],
  ["新聞＿＿＿、来月 税金が 上がる そうです。\n(According to the newspaper, taxes will rise next month.)",["によると","について","にとって","に対して"],0,"によると gives the source of information."],
  ["私＿＿＿、家族が いちばん 大切です。\n(For me, family is the most important.)",["にとって","によって","について","に対して"],0,"にとって shows the viewpoint of a person."],
  ["店員は お客さん＿＿＿ とても 親切でした。\n(The clerk was very kind toward the customers.)",["に対して","によると","にとって","として"],0,"に対して shows the target of an attitude."]]),
 LG('Reasons','おかげで: thanks to (good). せいで: because of (bad). ため: because. のため: because of.',[
  ["先生が 手伝って くださった＿＿＿、早く 終わりました。\n(Thanks to the teacher's help, it finished early.)",["おかげで","せいで","くらい","ほど"],0,"おかげで is used for a good result."],
  ["寝坊した＿＿＿、電車に 乗り遅れました。\n(Because I overslept, I missed the train.)",["せいで","おかげで","くらい","ほど"],0,"せいで blames a cause for a bad result."],
  ["病気＿＿＿ 会議を 欠席しました。\n(Because of illness, I was absent from the meeting.)",["のため","のように","のくせに","ばかり"],0,"Noun + のため gives a reason."],
  ["雨が 降った＿＿＿、試合は 中止に なりました。\n(Because it rained, the game was cancelled.)",["ため","ところ","くせに","ばかり"],0,"Plain form + ため gives a reason."]]),
 LG('Expectation and judgment','はず: should be. に違いない: must be. かもしれない: might. べき: ought to.',[
  ["彼は 毎日 練習して いるから、上手な＿＿＿ です。\n(He practices every day, so he should be good.)",["はず","ため","ほど","つもり"],0,"はず expresses a reasoned expectation."],
  ["電気が ついて いる。まだ 彼は 会社に いる＿＿＿。\n(The light is on. He must still be at the office.)",["に違いない","わけがない","ことはない","ばかりだ"],0,"に違いない expresses strong conviction."],
  ["あの 店は いつも 込んで いるから、今日も 込んで いる＿＿＿ しれません。\n(That shop is always crowded, so it might be crowded today too.)",["かも","はず","べき","つもり"],0,"かもしれない means might."],
  ["約束を 守る＿＿＿ です。\n(You ought to keep your promises.)",["べき","ところ","ばかり","ほど"],0,"V + べき means should."]]),
 LG('Time expressions','うちに: while still. たびに: every time. とたん: the moment. まま: as is.',[
  ["わかい＿＿＿ たくさん 旅行を したいです。\n(I want to travel a lot while I am young.)",["うちに","とたんに","たびに","ついでに"],0,"うちに means while the state lasts."],
  ["彼は 会う＿＿＿ 元気に なります。\n(He becomes more cheerful every time we meet.)",["たびに","うちに","まま","ほど"],0,"V + たびに means every time."],
  ["ドアを 開けた＿＿＿、ねこが 飛び出して きました。\n(The moment I opened the door, the cat rushed out.)",["とたん","うち","たび","ほど"],0,"Vた + とたん means just as something happened."],
  ["電気を つけた＿＿＿ 寝て しまいました。\n(I fell asleep with the light on.)",["まま","うち","たび","ついで"],0,"Vた + まま means leaving a state unchanged."]]),
 LG('Contrast and concession','くせに: in spite of (criticism). にもかかわらず: regardless. ても: even if. のに: even though.',[
  ["彼は 知って いる＿＿＿、教えて くれません。\n(Even though he knows, he will not tell me.)",["くせに","ために","おかげで","ばかりに"],0,"くせに criticises a mismatch between what someone is and does."],
  ["雨＿＿＿ かかわらず、試合は 行われました。\n(Despite the rain, the match was held.)",["にも","とも","でも","へも"],0,"にもかかわらず means in spite of."],
  ["いくら 高く＿＿＿、この 車が ほしいです。\n(No matter how expensive, I want this car.)",["ても","たら","ので","ながら"],0,"い-adjective て-form + も means even if."],
  ["彼女は 病気な＿＿＿、仕事に 来ました。\n(Although she was sick, she came to work.)",["のに","ために","ので","くらい"],0,"Noun + なのに means even though."]]),
 LG('Passive, causative and trying','ようとする: try to, be about to. Causative-passive: made to do. Passive: to receive an action.',[
  ["部屋を 出よう＿＿＿ した とき、電話が 鳴りました。\n(Just as I was about to leave the room, the phone rang.)",["と","に","を","が"],0,"Vよう + とする means be about to."],
  ["子どもの とき、母に 毎日 ピアノを 練習＿＿＿ ました。\n(As a child, I was made to practice piano every day by my mother.)",["させられ","され","させ","られ"],0,"Causative-passive means being made to do."],
  ["先生に ほめ＿＿＿ とても うれしかったです。\n(I was very happy to be praised by my teacher.)",["られて","させて","せて","れて"],0,"Group 2 verb ほめる becomes ほめられる in the passive."],
  ["この 本は 子どもでも 読める＿＿＿ 書かれて います。\n(This book is written so that even children can read it.)",["ように","ために","ばかり","ほど"],0,"V + ように shows a purpose or goal."]]),
 LG('Obligation and advice','なければならない: must. ことだ: it is best to. ほうがいい: had better. べきではない: must not.',[
  ["医者に 言われた から、毎日 薬を 飲ま＿＿＿ なりません。\n(The doctor told me, so I must take medicine every day.)",["なければ","ないで","なくて","ずに"],0,"V ない + なければならない means must."],
  ["風邪を ひいた ときは、よく 休む＿＿＿ です。\n(When you catch a cold, it is best to rest well.)",["こと","はず","つもり","ところ"],0,"V + ことだ gives advice."],
  ["試験が 近い ので、遊ばない＿＿＿ いいです。\n(The exam is close, so you had better not play.)",["ほうが","ように","ことに","はずが"],0,"V ない + ほうがいい gives negative advice."],
  ["約束を 破る＿＿＿ ではありません。\n(You must not break a promise.)",["べき","はず","ほど","ばかり"],0,"V + べきではない means should not."]]),
 LG('Conjunctions','その結果: as a result. 結局: in the end. ところが: but, unexpectedly. しかも: moreover.',[
  ["毎日 練習した。＿＿＿、試合に 勝つ ことが できた。\n(I practiced every day. As a result, I was able to win the match.)",["その結果","ところが","それとも","なぜなら"],0,"その結果 introduces an outcome."],
  ["朝から さがした。＿＿＿、かぎは 見つからなかった。\n(I searched from the morning. In the end, the key was not found.)",["結局","だから","ですから","したがって"],0,"結局 means in the end."],
  ["天気予報は 晴れだった。＿＿＿、午後から 雨が 降り出した。\n(The forecast said sunny. But in the afternoon it started to rain.)",["ところが","したがって","そのうえ","つまり"],0,"ところが introduces something unexpected."],
  ["この 店は 安い。＿＿＿、味も おいしい。\n(This shop is cheap. What is more, the food is good.)",["しかも","ところが","ただし","それでも"],0,"しかも adds a further point."]])]},
{title:'N3 Reading',sub:'Notices, essays and emails like those in the exam',lessons:[
 LR('Smoking rules',"社員の みなさまへ。来月から、社内の きんえんルールが 変わります。これまでは 休憩室で たばこを 吸う ことが できましたが、四月一日からは 建物の 中では すべて 禁煙に なります。吸いたい 人は、一階の 入口の 外に ある 喫煙所を 利用して ください。ご協力を よろしく お願いします。総務部","To all employees: From next month the smoking rules inside the company will change. Until now smoking was allowed in the break room, but from April 1 smoking will be banned everywhere inside the building. Those who want to smoke should use the smoking area outside the first-floor entrance. Thank you for your cooperation. General Affairs Department",[["What changes from April 1?",["Smoking is banned everywhere inside the building","The break room is closed","Smoking is allowed at desks","The building closes early"],0],["Where can people smoke?",["The smoking area outside the first-floor entrance","The break room","The roof","The parking garage"],0],["Who wrote the notice?",["The General Affairs Department","The president","A visitor","The union"],0]]),
 LR('Reading habits',"最近、本を 読まない 人が 増えて いると 言われます。スマートフォンで 情報が すぐに 手に 入る ので、わざわざ 本を 買う 必要が ないと 考える 人が 多いのでしょう。しかし、私は 本を 読む ことには 特別な 良さが あると 思います。一冊の 本を 最後まで 読むと、自分で 考える 力が 身に つく からです。","It is said that more people do not read books these days. Because information is quickly available on smartphones, many people probably think there is no need to buy books. However, I think reading books has a special value. If you read a whole book to the end, you gain the ability to think for yourself.",[["Why do many people not read books?",["They can get information quickly on smartphones","Books are too expensive","They have no time to go to shops","Books are hard to find"],0],["What does the writer value in reading?",["It builds the ability to think for yourself","It is cheaper than the internet","It is faster","It helps you sleep"],0],["What is the writer's opinion?",["Books have a special value","Books are outdated","Smartphones are bad","Nobody should read"],0]]),
 LR('Rescheduling an appointment',"山口様。お世話に なって おります。来週の 打ち合わせの 件ですが、水曜日の 午後は 別の 予定が 入って しまいました。申し訳ありませんが、木曜日の 午前中に 変更して いただけないでしょうか。もし 難しければ、金曜日でも かまいません。ご返事を お待ちして おります。鈴木","Dear Mr. Yamaguchi. Thank you for your continued support. About next week's meeting: another appointment has come up on Wednesday afternoon. I am sorry, but could we change it to Thursday morning? If that is difficult, Friday is also fine. I look forward to your reply. Suzuki",[["What does Suzuki want?",["To move the meeting to Thursday morning","To cancel the meeting","To meet on Wednesday afternoon","To meet by phone"],0],["Why is Wednesday afternoon difficult?",["Another appointment came up","Suzuki is sick","The office is closed","It is a holiday"],0],["What if Thursday is difficult?",["Friday is acceptable","The meeting is cancelled","Next month","Wednesday morning"],0]]),
 LR('A trip abroad',"私は 去年、はじめて 一人で 海外旅行に 行きました。言葉が 通じなくて 困る ことも ありましたが、親切な 人たちに 助けて もらいました。この 経験で、知らない 人と 話す ことが こわくなくなりました。今は、次の 旅行の 計画を 立てて います。","Last year I went on an overseas trip alone for the first time. There were times I was in trouble because I could not make myself understood, but kind people helped me. Through this experience I stopped being afraid of talking to strangers. Now I am planning my next trip.",[["What troubled the writer?",["Not being understood","Losing a passport","Bad food","Bad weather"],0],["What changed for the writer?",["No longer afraid to talk to strangers","Learned to cook","Made a lot of money","Stopped travelling"],0],["What is the writer doing now?",["Planning the next trip","Studying abroad","Working overseas","Writing a book"],0]])]},
{title:'N3 Listening',sub:'Conversations read aloud. Needs a Japanese voice on your device.',lessons:[
 LD('Work',[
  [[['A','部長、来週の 出張の 件ですが、飛行機の 予約を して よろしいでしょうか。'],['B','ええ。でも 大阪では なく 福岡に 変わったんだ。'],['A','福岡ですね。わかりました。']],'Where is the business trip?',['Fukuoka','Osaka','Nagoya','Sapporo'],0,'The destination changed from Osaka to Fukuoka.'],
  [[['A','昨日の 資料、もう 確認して くれた?'],['B','すみません、まだ 半分しか 見て いません。'],['A','急がなくて いいから、あさってまでに お願い。']],'By when does B need to finish?',['The day after tomorrow','Tomorrow','Today','Next week'],0,'A says by the day after tomorrow.'],
  [[['A','この 仕事、私に やらせて いただけませんか。'],['B','経験が ないけど、大丈夫?'],['A','はい、がんばります。'],['B','じゃあ、お願いするよ。']],'What does B decide?',['To let A do the job','To do it himself','To give it to someone else','To cancel it'],0,'B agrees to ask A to do it.']]),
 LD('Shopping and service',[
  [[['A','この 靴、サイズが 小さいんですが、もう少し 大きいのは ありますか。'],['B','少々 お待ちください。……あいにく ざいこが ございません。取り寄せなら 一週間 かかります。'],['A','では、けっこうです。']],'What does A do?',['Gives up buying it','Orders it','Buys the small size','Comes back tomorrow'],0,'A declines the one-week wait with けっこうです.'],
  [[['A','領収書を いただけますか。'],['B','お宛名は いかが いたしましょうか。'],['A','会社の 名前で お願いします。']],'What name is on the receipt?',['The company name','A personal name','No name','The shop name'],0,'A asks for the company name.'],
  [[['A','この セーター、洗濯機で 洗えますか。'],['B','いいえ、手洗いだけです。'],['A','じゃあ、やめます。']],'Why does A decide not to buy it?',['It cannot be machine washed','It is too expensive','The color is wrong','It is too big'],0,'It is hand-wash only.']]),
 LD('Campus',[
  [[['A','レポートの 締め切り、金曜日だったよね。'],['B','ううん、先生が 月曜日に のばして くれたよ。'],['A','本当? 助かった!']],'What is the new deadline?',['Monday','Friday','Thursday','Tuesday'],0,'The teacher extended it to Monday.'],
  [[['A','来週の ゼミ、出られそう?'],['B','その 日は アルバイトが あるから、欠席するかも。'],['A','じゃあ、先生に 連絡しておくね。']],'Why might B be absent?',['A part-time job','Illness','A trip','An exam'],0,'B has a part-time job that day.'],
  [[['A','図書館で 勉強しない?'],['B','今日は 閉まって いるよ。'],['A','そっか。じゃ、カフェに しよう。']],'Where will they study?',['A cafe','The library','At home','A classroom'],0,'The library is closed so they choose a cafe.']]),
 LD('Opinions',[
  [[['A','最近、電車の 中で 本を 読む 人が 減ったね。'],['B','みんな スマホを 見て いるからね。'],['A','目に 悪いのに。']],'Why do fewer people read books on trains?',['They look at smartphones','Trains are crowded','Books are expensive','They have no time'],0,'B says everyone is looking at smartphones.'],
  [[['A','引っ越しするなら、駅に 近い ほうが いいと 思う。'],['B','でも 家賃が 高いよ。'],['A','確かに。じゃ、少し 遠くても 安い ほうに しようか。']],'What do they decide?',['A cheaper place farther away','A place near the station','To stay where they are','To buy a house'],0,'They choose the cheaper, farther place.'],
  [[['A','この 映画、おもしろかった?'],['B','最初は つまらなかったけど、最後は 感動したよ。']],'How was the movie?',['Boring at first, moving at the end','Fun all the way through','Boring all the way through','Scary'],0,'It was boring at first but moving at the end.']])]}
];
N3[0].lessons.push(LW('Culture',`伝統|でんとう|tradition;文化|ぶんか|culture;歴史|れきし|history;習慣|しゅうかん|habit, custom;観光|かんこう|sightseeing;芸術|げいじゅつ|art;娯楽|ごらく|entertainment;行事|ぎょうじ|event`));
N3[1].lessons.push(LW('Reasoning words',`要求|ようきゅう|demand;判断|はんだん|judgment;可能性|かのうせい|possibility;条件|じょうけん|condition;目的|もくてき|purpose;方法|ほうほう|method;原因|げんいん|cause;結果|けっか|result`));
