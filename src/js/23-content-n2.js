/* ---------- JLPT N2 course: original practice material in the official exam formats ---------- */
CURL=2;
const N2=[
{title:'Society and Economy',sub:'Newspaper vocabulary for economy, law and politics',lessons:[
 LW('Economy',`景気|けいき|economic conditions;物価|ぶっか|price levels;失業|しつぎょう|unemployment;産業|さんぎょう|industry;貿易|ぼうえき|trade;税金|ぜいきん|tax;福祉|ふくし|welfare;人口|じんこう|population`),
 LW('Law and politics',`法律|ほうりつ|law;選挙|せんきょ|election;政府|せいふ|government;権利|けんり|right;義務|ぎむ|duty;規則|きそく|rule;制度|せいど|system;改革|かいかく|reform`),
 LW('Business',`取引|とりひき|transaction;利益|りえき|profit;損失|そんしつ|loss;提案|ていあん|proposal;交渉|こうしょう|negotiation;経営|けいえい|management;競争|きょうそう|competition;需要|じゅよう|demand`),
 LW('Science and environment',`資源|しげん|resources;技術|ぎじゅつ|technology;実験|じっけん|experiment;発展|はってん|development;汚染|おせん|pollution;絶滅|ぜつめつ|extinction;温暖化|おんだんか|global warming;省エネ|しょうエネ|energy saving`)]},
{title:'Verbs and Adjectives',sub:'Abstract verbs and descriptive words',lessons:[
 LW('Verbs 1',`促す|うながす|to urge;妨げる|さまたげる|to obstruct;補う|おぎなう|to make up for;招く|まねく|to invite, to cause;控える|ひかえる|to refrain;避ける|さける|to avoid;求める|もとめる|to seek;含む|ふくむ|to include`),
 LW('Verbs 2',`見逃す|みのがす|to overlook;受け入れる|うけいれる|to accept;尋ねる|たずねる|to ask;敬う|うやまう|to respect;扱う|あつかう|to handle;励ます|はげます|to encourage;繰り返す|くりかえす|to repeat;試みる|こころみる|to attempt`),
 LW('Na-adjectives',`明らかな|あきらかな|obvious;適切な|てきせつな|appropriate;不可欠な|ふかけつな|indispensable;莫大な|ばくだいな|enormous;慎重な|しんちょうな|careful;曖昧な|あいまいな|vague;積極的な|せっきょくてきな|proactive;消極的な|しょうきょくてきな|passive`),
 LW('Adverbs',`一応|いちおう|for now;案外|あんがい|unexpectedly;一斉に|いっせいに|all at once;少しも|すこしも|not at all;絶えず|たえず|constantly;次々|つぎつぎ|one after another;せめて|せめて|at least;あらゆる|あらゆる|all kinds of`)]},
{title:'N2 Kanji',sub:'About 1,000 kanji in total by N2. Here are 24 common ones.',lessons:[
 LK('Kanji set 1',`景|けい|scenery|景気 けいき economy;税|ぜい|tax|税金 ぜいきん tax;貿|ぼう|trade|貿易 ぼうえき trade;易|えき|easy, trade|貿易 ぼうえき trade;福|ふく|fortune|福祉 ふくし welfare;祉|し|welfare|福祉 ふくし welfare;産|さん|produce|産業 さんぎょう industry;失|しつ|lose|失業 しつぎょう unemployment`),
 LK('Kanji set 2',`権|けん|authority|権利 けんり right;義|ぎ|righteousness|義務 ぎむ duty;務|む|duty|義務 ぎむ duty;規|き|rule|規則 きそく rule;制|せい|system|制度 せいど system;革|かく|leather, reform|改革 かいかく reform;挙|きょ|raise|選挙 せんきょ election;需|じゅ|demand|需要 じゅよう demand`),
 LK('Kanji set 3',`資|し|resources|資源 しげん resources;源|げん|source|資源 しげん resources;術|じゅつ|technique|技術 ぎじゅつ technology;染|せん|dye, stain|汚染 おせん pollution;絶|ぜつ|cut off|絶対 ぜったい absolutely;滅|めつ|perish|絶滅 ぜつめつ extinction;暖|だん|warm|温暖 おんだん mild;妨|ぼう|hinder|妨害 ぼうがい obstruction`)]},
{title:'N2 Grammar',sub:'Choose the best word to fill the blank',lessons:[
 LG('Relation and topic','に関して: concerning. をめぐって: over, around. に基づいて: based on. をはじめ: starting with.',[
  ["この 問題＿＿＿、皆さんの 意見を 聞かせて ください。\n(Please tell me your opinions on this issue.)",["に関して","に基づいて","をはじめ","にわたって"],0,"に関して means concerning."],
  ["新しい 法律＿＿＿、国会で 激しい 議論が 行われた。\n(There was heated debate in the Diet over the new law.)",["をめぐって","にわたって","に応じて","に限って"],0,"をめぐって means over or surrounding an issue."],
  ["この 映画は 実際に あった 事件＿＿＿ 作られた。\n(This film was made based on a real incident.)",["に基づいて","をはじめ","をめぐって","にとって"],0,"に基づいて means based on."],
  ["東京＿＿＿、日本の 大都市では 人口が 減って いる。\n(Starting with Tokyo, the populations of Japan's big cities are shrinking.)",["をはじめ","に限って","ついでに","を通じて"],0,"をはじめ lists examples starting with the most representative."]]),
 LG('Scope and correspondence','にわたって: across a span. において: at, in. を通じて: through. に応じて: in accordance with.',[
  ["会議は 三日間＿＿＿ 行われた。\n(The conference was held over three days.)",["にわたって","において","に応じて","をはじめ"],0,"にわたって covers a period or range."],
  ["去年の 大会は 京都＿＿＿ 開かれた。\n(Last year's tournament was held in Kyoto.)",["において","にわたって","をめぐって","に基づいて"],0,"において is a formal way to say at a place or occasion."],
  ["収入＿＿＿ 税金の 額が 変わります。\n(The amount of tax changes according to income.)",["に応じて","にわたって","に限って","ついでに"],0,"に応じて means in accordance with."],
  ["インターネットを＿＿＿、世界中の 人と 交流できる。\n(Through the internet we can interact with people all over the world.)",["通じて","はじめ","基づいて","わたって"],0,"を通じて means through a medium."]]),
 LG('Cannot and must','かねる: cannot bring oneself to. ようがない: no way to. わけにはいかない: cannot afford to. ざるを得ない: have no choice but.',[
  ["申し訳ありませんが、その ご要望は お受け＿＿＿。\n(I am sorry, but I cannot accept that request.)",["しかねます","しかねません","しがちです","しっぱなしです"],0,"V stem + かねる is a polite way to refuse."],
  ["連絡先が わからないので、連絡の＿＿＿ ありません。\n(I do not know the contact details, so there is no way to get in touch.)",["しようが","しがちが","しっぱなしが","しぎみが"],0,"V stem + ようがない means there is no way to."],
  ["明日は 大事な 試験が ある ので、今夜は 遊ぶ＿＿＿ いかない。\n(I have an important exam tomorrow, so I cannot play tonight.)",["わけには","ことが","ものか","だけに"],0,"V + わけにはいかない means cannot do for moral or practical reasons."],
  ["台風で 電車が 止まって いるので、会社を 休まざる＿＿＿。\n(Trains are stopped by the typhoon, so I have no choice but to skip work.)",["を得ない","に違いない","ものではない","ことはない"],0,"V ない stem + ざるを得ない means have no choice but to."]]),
 LG('Tendencies','がち: tends to. 気味: slightly. っぽい: -ish. だらけ: full of.',[
  ["冬は 風邪を ひき＿＿＿ です。\n(In winter I tend to catch colds.)",["がち","ぎみ","っぽい","だらけ"],0,"V stem + がち means tends to."],
  ["風邪＿＿＿ なので、今日は 早く 帰ります。\n(I have a slight cold, so I will go home early today.)",["気味","がち","っぽい","だらけ"],0,"Noun + 気味 means a slight sign of."],
  ["彼は 子ども＿＿＿ ところが ある。\n(He has a childish side.)",["っぽい","がち","ぎみ","だらけ"],0,"Noun + っぽい means having the quality of."],
  ["部屋が ごみ＿＿＿ です。\n(The room is full of trash.)",["だらけ","ぎみ","がち","っぽい"],0,"Noun + だらけ means covered in, full of."]]),
 LG('Contrast','ものの: although. にしては: considering. わりに: in contrast to. 中: in the midst of.',[
  ["日本語を 習い始めて 三か月＿＿＿、とても 上手だ。\n(Considering he only started three months ago, his Japanese is very good.)",["にしては","ばかりに","くせに","あまり"],0,"にしては means considering that."],
  ["約束した＿＿＿、実は まだ 準備が できて いない。\n(Although I promised, I have not actually prepared yet.)",["ものの","ばかり","くらい","ほど"],0,"〜ものの means although."],
  ["この 店は 値段が 高い＿＿＿、あまり おいしくない。\n(For the high prices, the food here is not very good.)",["わりに","ように","ために","とおり"],0,"わりに shows a gap between expectation and reality."],
  ["お忙しい＿＿＿、手伝って くださって ありがとう ございます。\n(Thank you for helping even though you are busy.)",["中","うち","まま","ばかり"],0,"〜中 (ちゅう) means in the midst of, often used politely."]]),
 LG('Feeling and certainty','ずにはいられない: cannot help. てならない: extremely. に違いない: surely. かねない: may well.',[
  ["この 話を 聞いて、泣か＿＿＿ いられなかった。\n(Hearing this story, I could not help crying.)",["ずには","ないで","なくて","ないが"],0,"V ない stem + ずにはいられない means cannot help doing."],
  ["昔の ことが 思い出されて＿＿＿。\n(I cannot stop remembering the old days.)",["ならない","かまわない","ちがいない","かねない"],0,"て + ならない shows an emotion you cannot suppress."],
  ["あの 人が 犯人に＿＿＿。\n(That person must be the culprit.)",["違いない","ならない","限らない","かねない"],0,"に違いない shows strong conviction."],
  ["あの 人は うそを つき＿＿＿ 人だ。\n(That person is the kind who might well lie.)",["かねない","がたい","ようがない","にくい"],0,"V stem + かねない means there is a risk of, may well."]]),
 LG('Sequence and grounds','てはじめて: only after. うえで: after. 次第: as soon as. 以上: since.',[
  ["病気に なって＿＿＿、健康の 大切さが わかった。\n(Only after I fell ill did I understand the value of health.)",["はじめて","からして","いらい","ずに"],0,"Vて + はじめて means only after doing."],
  ["内容を よく 確認した＿＿＿ 契約して ください。\n(Please sign after you have checked the contents carefully.)",["うえで","うちに","ばかりに","くせに"],0,"Vた + うえで means after doing."],
  ["日程が 決まり＿＿＿、お知らせします。\n(I will inform you as soon as the schedule is decided.)",["次第","ながら","がち","ぎみ"],0,"V stem + 次第 means as soon as."],
  ["学生である＿＿＿、勉強を 第一に 考えるべきだ。\n(Since you are a student, you should put studying first.)",["以上","ばかり","ところ","くらい"],0,"〜以上 means given that."]]),
 LG('Discourse connectors','しかも: moreover. 要するに: in short. ただし: however, provided that. すなわち: that is.',[
  ["彼は 英語も 中国語も 話せる。＿＿＿、日本語も ぺらぺらだ。\n(He speaks English and Chinese. Moreover, he is fluent in Japanese.)",["しかも","ところが","ただし","すなわち"],0,"しかも adds an extra point."],
  ["長い 説明だったが、＿＿＿ 来月から 料金が 上がると いう ことだ。\n(It was a long explanation, but in short, prices rise from next month.)",["要するに","ところが","もっとも","さて"],0,"要するに summarizes."],
  ["入場は 無料です。＿＿＿、予約が 必要です。\n(Admission is free. However, a reservation is required.)",["ただし","したがって","つまり","あるいは"],0,"ただし adds a condition."],
  ["彼は 東京の 出身、＿＿＿ 関東の 出身だ。\n(He is from Tokyo, that is, from the Kanto region.)",["すなわち","ところが","ただし","かえって"],0,"すなわち restates in other words."]])]},
{title:'N2 Reading',sub:'Commentary, notices and letters',lessons:[
 LR('Working from home',"近年、在宅勤務を 導入する 企業が 増えて いる。通勤時間が なくなり、家族と 過ごす 時間が 増えた という 声が ある 一方で、仕事と 私生活の 区別が つきにくく なったと 感じる 人も 少なくない。結局のところ、働き方に 絶対の 正解は なく、各自の 事情に 応じて 選べる 制度が 望ましいと 言えるだろう。","In recent years the number of companies introducing remote work has grown. While some say they no longer commute and spend more time with family, not a few people feel it has become hard to separate work from private life. In the end there is no single correct way of working, and a system that lets each person choose according to their circumstances is desirable.",[["What benefit of remote work is mentioned?",["No commute, more time with family","Higher pay","Shorter meetings","Better equipment"],0],["What worry is mentioned?",["It is hard to separate work and private life","Costs go up","Bosses cannot see work","Fewer holidays"],0],["What does the writer conclude?",["A system where people can choose by circumstance is desirable","Everyone should work from home","Remote work should end","Offices should be bigger"],0]]),
 LR('Garbage rules',"市民の みなさまへ。ごみの 出し方が 来月一日から 一部 変わります。これまで 燃えない ごみは 月に 一回の 回収でしたが、今後は 月に 二回に なります。ただし、大型ごみは 事前の 申し込みが 必要です。くわしくは 市の ホームページを ご覧ください。","To citizens: Some garbage rules change from the first of next month. Until now, non-burnable garbage was collected once a month, but from now on it will be twice a month. However, large items require an advance application. Please see the city website for details.",[["What is changing?",["Non-burnable garbage will be collected twice a month","Burnable garbage will stop","Collection moves to evenings","Fees are introduced"],0],["What is required for large items?",["An advance application","A payment on the day","A neighbor's signature","Nothing"],0],["Where can citizens find details?",["On the city website","At the post office","In the newspaper","By phone only"],0]]),
 LR('Words change',"言葉は 時代と ともに 変化する。「やばい」の ような 言葉は、もともとは 悪い 意味だけで 使われて いたが、今では 良い 意味でも 使われる。これを 乱れと 呼ぶ 人も いるが、言葉が 生きて いる 証拠だ という 見方も ある。大切なのは、場面に 応じて 適切な 言葉を 選ぶ ことでは ないだろうか。","Language changes with the times. A word like やばい was originally used only in a bad sense but is now also used in a good sense. Some call this disorder, but another view is that it proves that language is alive. What matters is perhaps choosing appropriate words according to the situation.",[["What example of language change is given?",["やばい is now used positively too","A new kanji was created","A word disappeared","Grammar was simplified"],0],["What is one view of such change?",["It is evidence that language is alive","It is always wrong","It is caused by schools","It only affects young people"],0],["What does the writer say is important?",["Choosing words suitable for the situation","Using only old words","Avoiding slang entirely","Teaching children grammar"],0]]),
 LR('A letter of apology',"拝啓 先日は、ご多忙の ところ 弊社の 製品に ついて お問い合わせ いただき、誠に ありがとうございました。調査の 結果、ご注文の 品が 誤って 別の 住所に 発送されて いた ことが 判明いたしました。深く お詫び申し上げます。本日、正しい 商品を 改めて お送りいたしました。今後は このような ことが ないよう、確認体制を 見直して まいります。敬具","Dear Sir or Madam: Thank you for contacting us about our product the other day despite your busy schedule. Our investigation found that the item you ordered had been sent to a different address by mistake. We sincerely apologize. Today we have sent the correct item again. To prevent this from happening in future, we will review our checking system.",[["What was the problem?",["The item was shipped to the wrong address","The item was broken","The price was wrong","The item was out of stock"],0],["What did the company do?",["Sent the correct item again","Issued a refund only","Asked the customer to come","Cancelled the order"],0],["What will the company do in future?",["Review its checking system","Raise prices","Stop shipping","Hire a lawyer"],0]])]},
{title:'N2 Listening',sub:'Longer conversations read aloud. Needs a Japanese voice on your device.',lessons:[
 LD('Business',[
  [[['A','部長、先方から 納期を 一週間 早めて ほしいと 言われました。'],['B','それは 難しいな。工場の 状況は どう?'],['A','人手が 足りないので、残業を すれば 何とか なるかも しれません。'],['B','無理は させられない。まず 先方と もう一度 交渉して みよう。']],'What will B do first?',['Negotiate with the client again','Order overtime work','Refuse the client','Hire more staff'],0,'B decides to negotiate again before asking for overtime.'],
  [[['A','新しい 商品の 売り上げが 思ったより のびて いませんね。'],['B','値段が 高すぎると いう 意見が 多いんです。'],['A','では、広告を 増やす より、値下げを 検討した ほうが よさそうですね。']],'What does A suggest?',['Consider lowering the price','Increase advertising','Stop selling','Change the name'],0,'A prefers considering a price cut over more advertising.'],
  [[['A','来週の 会議ですが、資料は 前日までに 共有して ください。'],['B','当日の 朝では だめですか。'],['A','事前に 読んで おかないと 議論が 深まらないので。']],'Why does A want the materials the day before?',['So people can read them in advance','To print them','To translate them','For the boss to check'],0,'Reading in advance deepens the discussion.']]),
 LD('Daily life',[
  [[['A','先日 注文した 家具、まだ 届かないんですが。'],['B','申し訳ございません。確認いたします。……在庫の 手配に 時間が かかって おりまして、来週の 水曜日に なります。'],['A','そんなに 遅いなら、キャンセル できますか。'],['B','可能です。']],'What does A ask about?',['Cancelling the order','Changing the address','A refund after delivery','A discount'],0,'A asks whether the order can be cancelled.'],
  [[['A','駅前の 新しい カフェ、行って みた?'],['B','うん、味は まあまあだけど、席が 少なくて 落ち着かなかった。'],['A','私も 行って みようと 思って いたけど、やめとこうかな。']],'Why is A considering not going?',['Few seats and not relaxing','The food is bad','It is expensive','It is far away'],0,'B said there were few seats.'],
  [[['A','引っ越しの 手続きは 済みましたか。'],['B','電気と ガスは 済んだけど、インターネットは まだ。'],['A','工事に 時間が かかるから 早めに 申し込んだ ほうが いいよ。']],'What does B still need to do?',['Apply for the internet','Arrange the gas','Arrange the electricity','Arrange the water'],0,'Only the internet is left.']]),
 LD('Academic',[
  [[['A','先生、論文の テーマを 変えたいんですが。'],['B','もう 半分 書いて いるでしょう。今から 変えるのは 現実的では ないと 思いますよ。'],['A','そうですか。やはり 続けます。']],'What does A decide?',['To keep the current topic','To change the topic','To quit','To ask for an extension'],0,'A accepts the advice and continues.'],
  [[['A','この ゼミは 発表が 多くて 大変そうだね。'],['B','でも、自分の 考えを 整理する 練習に なるよ。']],'How does B see the many presentations?',['Good practice for organizing ideas','A waste of time','Too hard','Boring'],0,'B says it is practice for organizing ideas.'],
  [[['A','来月の 留学の 説明会、行く?'],['B','行きたいけど、その 日は 試験と 重なって いて……。'],['A','録画を 見る ことも できるよ。']],'What can B do?',['Watch a recording','Take the exam later','Skip it','Go anyway'],0,'A says there is a recording.']]),
 LD('Society',[
  [[['A','最近は 現金を 使わない 人が 増えて いるね。'],['B','便利だけど、使いすぎて しまう 恐れも あるよね。'],['A','そうだね。管理を しっかり しないと。']],'What worry does B mention?',['Overspending','Losing cards','High fees','Slow payment'],0,'B worries about spending too much.'],
  [[['A','この 町は 観光客が 増えて 経済は よく なったけど、住民の 生活は どう なんだろう。'],['B','ごみや 騒音の 問題が 出て いるらしいよ。']],'What problem is mentioned?',['Garbage and noise','Prices','Crime','Accidents'],0,'Garbage and noise are the problems.'],
  [[['A','環境の ために、買い物ぶくろを 持って いく 人が 増えたね。'],['B','でも 一人一人の 努力だけでは 限界が あるよ。'],['A','確かに、企業も 取り組む 必要が あるね。']],'What do they conclude?',['Companies must also act','Individual effort is enough','Bags are bad','The government has failed'],0,'They agree that companies also need to act.']])]}
];
N2[0].lessons.push(LW('Issues and effects',`概要|がいよう|outline;現状|げんじょう|current state;課題|かだい|task, issue;影響|えいきょう|influence;対策|たいさく|countermeasure;比較|ひかく|comparison;解決|かいけつ|solution;状況|じょうきょう|situation`));
