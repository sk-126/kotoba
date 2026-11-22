/* ---------- JLPT N1 course: original practice material in the official exam formats ---------- */
CURL=1;
const N1=[
{title:'Society and Economy',sub:'Abstract and newspaper vocabulary',lessons:[
 LW('Society',`慣習|かんしゅう|custom, convention;風潮|ふうちょう|trend, tendency;格差|かくさ|gap, disparity;偏見|へんけん|prejudice;抑制|よくせい|restraint;懸念|けねん|concern;動向|どうこう|trend, movement;普及|ふきゅう|spread`),
 LW('Economy and politics',`財政|ざいせい|public finance;赤字|あかじ|deficit;黒字|くろじ|surplus;緩和|かんわ|easing;規制|きせい|regulation;提携|ていけい|partnership;撤退|てったい|withdrawal;破綻|はたん|collapse`),
 LW('Abstract nouns',`概念|がいねん|concept;根拠|こんきょ|grounds, basis;傾向|けいこう|tendency;要因|よういん|factor;側面|そくめん|aspect;趣旨|しゅし|purport;発端|ほったん|beginning;見解|けんかい|opinion, view`)]},
{title:'Verbs and Adjectives',sub:'Formal verbs and literary adjectives',lessons:[
 LW('Suru-verbs',`把握する|はあくする|to grasp;維持する|いじする|to maintain;阻止する|そしする|to block;促進する|そくしんする|to promote;衰える|おとろえる|to decline;覆す|くつがえす|to overturn;脅かす|おびやかす|to threaten;損なう|そこなう|to harm`),
 LW('Native verbs',`見極める|みきわめる|to ascertain;取り締まる|とりしまる|to crack down;免れる|まぬがれる|to escape;貫く|つらぬく|to carry through;阻む|はばむ|to hinder;担う|になう|to bear;賄う|まかなう|to provide;偽る|いつわる|to lie`),
 LW('Adjectives',`著しい|いちじるしい|remarkable;乏しい|とぼしい|scarce;厳かな|おごそかな|solemn;顕著な|けんちょな|conspicuous;巧みな|たくみな|skillful;緩やかな|ゆるやかな|gentle, loose;脆い|もろい|fragile;煩わしい|わずらわしい|bothersome`),
 LW('Adverbs and idioms',`辛うじて|かろうじて|barely;極めて|きわめて|extremely;概して|がいして|generally;強いて|しいて|if forced to;如何に|いかに|how;何気なく|なにげなく|casually;とりわけ|とりわけ|especially;ひとまず|ひとまず|for the time being`),
 LW('Formal expressions',`恐縮|きょうしゅく|feeling obliged;拝見|はいけん|humble form of to see;承知|しょうち|understanding, consent;配慮|はいりょ|consideration;尽力|じんりょく|efforts on behalf of;高齢化|こうれいか|population aging;辞退|じたい|declining;趣|おもむき|elegance, appearance`)]},
{title:'N1 Kanji',sub:'About 2,000 kanji in total by N1. Here are 24 common ones.',lessons:[
 LK('Kanji set 1',`慣|かん|accustomed|慣習 かんしゅう custom;潮|ちょう|tide|風潮 ふうちょう trend;格|かく|status|格差 かくさ gap;差|さ|difference|格差 かくさ gap;偏|へん|biased|偏見 へんけん prejudice;抑|よく|suppress|抑制 よくせい restraint;懸|けん|hang|懸念 けねん concern;念|ねん|thought|懸念 けねん concern`),
 LK('Kanji set 2',`概|がい|outline|概念 がいねん concept;拠|きょ|grounds|根拠 こんきょ basis;傾|けい|lean|傾向 けいこう tendency;因|いん|cause|要因 よういん factor;趣|しゅ|taste|趣旨 しゅし purport;旨|し|gist|趣旨 しゅし purport;端|たん|edge|発端 ほったん beginning;解|かい|solve|見解 けんかい view`),
 LK('Kanji set 3',`握|あく|grasp|把握 はあく grasp;維|い|maintain|維持 いじ maintenance;阻|そ|block|阻止 そし prevention;促|そく|urge|促進 そくしん promotion;衰|すい|decline|衰える おとろえる to decline;覆|ふく|cover|覆う おおう to cover;脅|きょう|threaten|脅威 きょうい threat;損|そん|loss|損失 そんしつ loss`)]},
{title:'N1 Grammar',sub:'Choose the best word to fill the blank',lessons:[
 LG('Despite and ignoring','ものともせず: defying. をよそに: ignoring. ながらも: although.',[
  ["彼は 周囲の 反対を＿＿＿、新しい 事業を 始めた。\n(Defying opposition from those around him, he started a new business.)",["ものともせず","もとに","かわりに","ながらも"],0,"をものともせず means not minding a difficulty."],
  ["住民の 不安＿＿＿、工事は 続けられた。\n(Ignoring the residents' anxiety, the construction continued.)",["をよそに","をもとに","をおいて","に即して"],0,"をよそに means disregarding."],
  ["小さな 会社＿＿＿、技術力は 世界でも 認められて いる。\n(Although small, the company's technology is recognized worldwide.)",["ながらも","ばかりに","ことなく","はおろか"],0,"Noun + ながらも means although."],
  ["彼女は 病気を 抱えて＿＿＿、最後まで 舞台に 立ち続けた。\n(Although she had an illness, she kept performing to the end.)",["いながらも","いるばかりか","いるくせして","いるだけに"],0,"Vて + いながらも means although doing."]]),
 LG('Only X, worthy of X','ならでは: unique to. をおいて: other than. に足る: worthy of. ともなると: once it comes to.',[
  ["この 味は 老舗＿＿＿の ものだ。\n(This taste is one only an old established shop can offer.)",["ならでは","のくせに","どころか","はおろか"],0,"Nならでは means only possible with N."],
  ["この 仕事を 任せられるのは 彼＿＿＿ ほかに いない。\n(There is no one but him to whom I can entrust this job.)",["をおいて","をもって","に先立って","を皮切りに"],0,"をおいて + negative means no one except."],
  ["彼の 研究は 世界に 紹介する＿＿＿ ものだ。\n(His research is worthy of being introduced to the world.)",["に足る","に堪えない","に即した","にかかわる"],0,"V + に足る means worth doing."],
  ["部長＿＿＿、責任も 重く なる。\n(Once you are a department head, the responsibility becomes heavy.)",["ともなると","ばかりに","ながらも","ゆえに"],0,"Nともなると means when it comes to a high status like N."]]),
 LG('Strong emotion and extremes','禁じ得ない: cannot suppress. てやまない: keep wishing. に堪えない: unbearable, or worthy. 極まりない: extremely.',[
  ["彼の 悲しい 話に、涙を＿＿＿。\n(At his sad story, I could not hold back tears.)",["禁じ得なかった","禁じ得ずに","禁じえなくて","禁じられない"],0,"を禁じ得ない means cannot suppress an emotion."],
  ["皆様の ご多幸を 願って＿＿＿。\n(I wish you all happiness from my heart.)",["やみません","あげません","いません","すみません"],0,"Vてやまない means keep doing, sincerely."],
  ["彼の 態度は 失礼＿＿＿。\n(His attitude is extremely rude.)",["極まりない","ばかりない","に堪えない","を余儀なくされる"],0,"Na-adjective stem + 極まりない means extremely."],
  ["この 映画の 暴力 シーンは 見る＿＿＿。\n(The violent scenes in this movie are unbearable to watch.)",["に堪えない","に足る","に即した","を踏まえた"],0,"V + に堪えない means too awful to bear."]]),
 LG('Timing','や否や: the moment. そばから: as fast as. に先立って: prior to. を皮切りに: starting with.',[
  ["家に 着く＿＿＿、彼は 電話に 出た。\n(The moment he arrived home, he answered the phone.)",["や否や","そばから","ずじまい","ながらも"],0,"V + や否や means immediately upon."],
  ["教えた＿＿＿ 忘れて しまう。\n(No sooner do I teach it than they forget.)",["そばから","や否や","なり","うちに"],0,"Vた + そばから means repeated cycle of doing and undoing."],
  ["発売に＿＿＿、記者会見が 開かれた。\n(Prior to the release, a press conference was held.)",["先立って","おいて","堪えて","よそに"],0,"に先立って means prior to."],
  ["東京公演＿＿＿、全国ツアーが 始まる。\n(The national tour starts, beginning with the Tokyo show.)",["を皮切りに","をものともせず","をおいて","ならでは"],0,"Nを皮切りに means starting with N."]]),
 LG('Negation and prohibition','ずじまい: ended up not. たりとも: not even. といえども: even. あるまじき: unbecoming.',[
  ["結局 彼には 会え＿＿＿ だった。\n(In the end I never got to see him.)",["ずじまい","ずにおかない","ざるを得ない","ずにすんだ"],0,"V ない stem + ずじまい means ended up without doing."],
  ["一円＿＿＿ 無駄に できない。\n(We cannot waste even one yen.)",["たりとも","すら","だけ","ほど"],0,"Nたりとも + negative means not even N."],
  ["専門家＿＿＿、間違える ことは ある。\n(Even experts make mistakes.)",["といえども","ばかりか","どころか","ならでは"],0,"Nといえども means even N."],
  ["教師に＿＿＿ 行為だ。\n(It is conduct unbecoming of a teacher.)",["あるまじき","あるべき","なりうる","かたい"],0,"あるまじき means that ought not to be."]]),
 LG('Conditions and reasons','いかんで: depending on. ばこそ: precisely because. ようものなら: if one should. にかかわる: affects.',[
  ["結果＿＿＿、計画を 見直す 可能性が ある。\n(Depending on the result, we may review the plan.)",["いかんでは","ならではの","をよそに","ばかりか"],0,"Nいかんでは means depending on N."],
  ["子どもを 思え＿＿＿、厳しく するのだ。\n(It is precisely because I care about my child that I am strict.)",["ばこそ","ならでは","ともなると","といえども"],0,"V ば + こそ emphasizes the reason."],
  ["少しでも 遅れ＿＿＿、厳しく 叱られる。\n(If I am even slightly late, I get scolded harshly.)",["ようものなら","ながらも","ずじまい","ばかりに"],0,"V よう + ものなら means if one should (undesirable)."],
  ["命＿＿＿ 問題だから、慎重に 進めよう。\n(It is a matter affecting life, so let us proceed carefully.)",["にかかわる","を禁じ得ない","ならではの","をものともせず"],0,"Nにかかわる means concerns or affects N."]]),
 LG('Emphasis and surprise','んばかり: as if about to. と思いきや: expected but. はおろか: let alone. ばかりか: not only.',[
  ["彼は 泣き出さ＿＿＿の 顔で 立って いた。\n(He stood with a face as if about to burst into tears.)",["んばかり","ずじまい","ならでは","ばこそ"],0,"V ない stem + んばかり means as if about to."],
  ["簡単だ＿＿＿、実際は とても 難しかった。\n(I thought it would be easy, but it was actually very hard.)",["と思いきや","ともなると","をよそに","に足る"],0,"〜と思いきや means contrary to expectation."],
  ["彼は ひらがな＿＿＿、数字も 読めない。\n(He cannot read numbers, let alone hiragana.)",["はおろか","ならでは","をもとに","ずじまい"],0,"Nはおろか + negative means not even, let alone."],
  ["この 計画は 費用が かさむ＿＿＿、時間も かかる。\n(This plan not only adds costs but also takes time.)",["ばかりか","ともなると","ずじまい","といえども"],0,"ばかりか means not only, but also."]]),
 LG('Formal and written style','をもって: with, as of. につき: because of. を踏まえて: taking into account. に即して: in line with.',[
  ["本日＿＿＿、受付を 終了いたします。\n(Reception will end as of today.)",["をもって","を皮切りに","をおいて","ならでは"],0,"Nをもって marks the point at which something ends."],
  ["工事中＿＿＿、通行止めと なって おります。\n(Because of construction, the road is closed.)",["につき","といえども","ばこそ","ずじまい"],0,"Nにつき gives a formal reason."],
  ["現状を＿＿＿、今後の 対策を 検討する。\n(We will consider future measures, taking the current situation into account.)",["踏まえて","よそに","ものともせず","禁じ得ず"],0,"を踏まえて means based on, taking into account."],
  ["実情に＿＿＿、制度を 見直すべきだ。\n(The system should be reviewed in line with actual conditions.)",["即して","堪えて","足りて","限って"],0,"Nに即して means in accordance with."]])]},
{title:'N1 Reading',sub:'Essays and commentary like those in the exam',lessons:[
 LR('Technology and work',"技術の 進歩は 私たちの 生活を 便利に した 反面、新たな 問題も 生み出して いる。例えば、人工知能の 普及に よって、単純な 作業が 機械に 置き換えられ、失業を 懸念する 声が 高まって いる。しかし 歴史を 振り返れば、新しい 技術は 常に 新しい 仕事を 創り出して きた。重要なのは、変化を 恐れる ことなく、必要な 能力を 身に つける 努力を 続ける ことで あろう。","While technological progress has made life more convenient, it has also produced new problems. For example, with the spread of AI, simple tasks are being replaced by machines and concern about unemployment is growing. But looking back at history, new technology has always created new jobs. What matters is to keep making efforts to acquire necessary skills without fearing change.",[["What concern is raised?",["Simple tasks being replaced by AI could cause unemployment","Machines are too expensive","AI is unreliable","Workers have too much leisure"],0],["What does history show, according to the writer?",["New technology has created new jobs","Technology always fails","Jobs never change","Machines were rejected"],0],["What is the writer's main point?",["Do not fear change, keep acquiring needed skills","Ban AI","Return to old methods","Wait for the government"],0]]),
 LR('Traditional crafts',"伝統工芸の 世界では、後継者の 不足が 深刻化して いる。技術の 習得には 長い 年月を 要する うえ、収入が 安定しない ことから、若者が 敬遠しがちな のが 現状だ。だが 近年、海外での 評価の 高まりを 背景に、あえて この 道を 選ぶ 若者も 現れ始めた。伝統を 守る ことは、単に 過去を 保存する ことでは なく、新しい 価値を 生み出し続ける ことなので ある。","In the world of traditional crafts the shortage of successors is becoming serious. Mastering the skills takes many years and income is unstable, so young people tend to avoid it. In recent years, however, against a background of rising reputation abroad, some young people have begun to choose this path deliberately. Preserving tradition is not merely preserving the past but continuing to create new value.",[["Why do young people tend to avoid crafts?",["Long training and unstable income","Low social status","Strict families","Foreign competition"],0],["What recent change is mentioned?",["Some young people choose crafts due to growing overseas recognition","Government subsidies doubled","Schools closed","Prices fell"],0],["How does the writer view preserving tradition?",["As continually creating new value","As keeping the past unchanged","As unnecessary","As a hobby"],0]]),
 LR('Children in the park',"先日の 記事に あった、公園での 子どもの 声を 騒音と 見なす 動きに ついて 考えさせられた。確かに 静けさを 求める 住民の 気持ちも 理解できる。しかし、子どもの 声を 排除する 社会が、果たして 健全と 言えるだろうか。互いの 事情に 配慮し、折り合いを つける 努力こそが 求められて いると 思う。","The article the other day about a movement to treat children's voices in parks as noise made me think. I can certainly understand the feelings of residents who want quiet. But can a society that excludes children's voices really be called healthy? I think what is needed is the effort to consider each other's circumstances and reach a compromise.",[["What issue does the writer discuss?",["Treating children's voices in parks as noise","Building new parks","School hours","Traffic safety"],0],["Whom does the writer say they can understand?",["Residents who want quiet","Park managers","Politicians","Reporters"],0],["What is the writer's conclusion?",["Mutual consideration and compromise are needed","Parks should close","Residents should move","Children must be silent"],0]]),
 LR('Sleep and memory',"睡眠が 記憶の 定着に 重要な 役割を 果たす ことは、多くの 研究で 示されて いる。ある 実験では、学習の 後に 十分な 睡眠を とった 群の ほうが、徹夜を した 群より 成績が 高かった。この 結果から、試験前の 徹夜は かえって 逆効果に なりかねないと 言える。もっとも、睡眠時間の 最適な 長さには 個人差が あり、一概には 断定できない。","Many studies show that sleep plays an important role in fixing memories. In one experiment the group that slept enough after studying scored higher than the group that stayed up all night. From this result it can be said that staying up all night before an exam may well backfire. However, the optimal length of sleep differs between individuals and cannot be stated categorically.",[["What did the experiment find?",["The group that slept scored higher","The all-night group scored higher","No difference","Scores depended on age"],0],["What does the writer imply about all-nighters?",["They may backfire","They are necessary","They improve memory","They are harmless"],0],["What caveat does the writer give?",["Optimal sleep length differs between individuals","Sleep has no effect","The sample was too large","Exams are unreliable"],0]])]},
{title:'N1 Listening',sub:'Complex conversations read aloud. Needs a Japanese voice on your device.',lessons:[
 LD('Work and policy',[
  [[['A','今回の 提携案ですが、先方は 条件の 見直しを 求めて きて います。'],['B','見直しに 応じれば、うちの 利益が 大きく 減る ことに なる。'],['A','では、いったん 保留に して、社内で 検討し直しますか。'],['B','そうしよう。結論は 週明けに 出す。']],'What will they do?',['Put it on hold and review internally','Accept the conditions','Cancel the partnership','Sign now'],0,'They will postpone and review internally.'],
  [[['A','新しい 規制の 影響で、うちの 業界は 撤退を 余儀なくされる 企業も 出て くるでしょう。'],['B','とはいえ、安全の ためには 必要な 措置だと 思います。'],['A','ええ、ただ 移行期間を もう少し 長く して ほしい ところです。']],'What does A want?',['A longer transition period','To abolish the regulation','Faster rules','Subsidies'],0,'A wants a longer transition period.'],
  [[['A','昨年度は 黒字だったんですか。'],['B','見かけ上は そうですが、一時的な 売却益を 除くと 実質的には 赤字です。']],'What is the real situation?',['A deficit without one-off gains','A large surplus','Break-even','Unknown'],0,'Excluding one-off gains, it is a deficit.']]),
 LD('Academic',[
  [[['A','先生、この 仮説の 根拠が 弱いと 指摘されたんですが。'],['B','そうですね。先行研究を もう少し 丁寧に 踏まえた ほうが いいでしょう。'],['A','わかりました。もう一度 洗い直します。']],'What will A do?',['Re-examine prior research','Drop the hypothesis','Collect more samples','Change advisors'],0,'A will go back over prior research.'],
  [[['A','この 調査では、若者の 投票率が 低い 要因として 何が 挙げられて いますか。'],['B','政治への 関心の 低さに 加えて、投票所が 遠い ことも 指摘されて います。']],'Which factor is mentioned besides lack of interest?',['Polling places are far away','Voting is complicated','An age limit','Cost'],0,'Distance to polling places is also cited.'],
  [[['A','実験の 結果は 予想に 反して いました。'],['B','失敗と 決めつけるのは 早いよ。想定外の 結果こそ 新しい 発見に つながる ことも ある。']],'What does B say?',['Unexpected results can lead to discoveries','The experiment failed','Repeat it identically','Stop the research'],0,'B says unexpected results can lead to new findings.']]),
 LD('Society',[
  [[['A','高齢化が 進む 中、地方の 医療を どう 維持するかが 課題と なって います。'],['B','医師の 数を 増やす だけでは 解決しません。遠隔医療の 活用も 視野に 入れる 必要が あります。']],'What does B say is needed?',['Telemedicine in addition','Only more doctors','Closing clinics','Relocating residents'],0,'B says telemedicine should also be considered.'],
  [[['A','景気が 緩やかに 回復して いると 言われますが、実感は ありますか。'],['B','正直、あまり ありません。物価の 上昇に 賃金が 追いついて いないので。']],'Why does B not feel the recovery?',['Wages lag behind prices','Taxes rose','Unemployment rose','The yen weakened'],0,'Wages have not caught up with prices.'],
  [[['A','この 伝統行事は 若い 世代の 参加が 減って いるそうですね。'],['B','ええ、担い手の 確保が 急務です。そこで、学生ボランティアを 募る ことに しました。']],'What measure did they take?',['Recruit student volunteers','Cancel the event','Raise fees','Move the event'],0,'They decided to recruit student volunteers.']]),
 LD('Formal conversations',[
  [[['A','お電話 ありがとうございます。恐れ入りますが、担当の 者が 席を 外して おりまして。'],['B','そうですか。では、戻られたら 折り返し お電話 いただけますか。'],['A','かしこまりました。お名前と 番号を 伺えますか。']],'What does B ask for?',['A call back later','A reply by email','A visit to the office','To wait on hold'],0,'B asks to be called back.'],
  [[['A','先日の 件、ご配慮 いただき 恐縮です。'],['B','いえいえ、お役に 立てて 何よりです。今後とも よろしく お願いします。']],'What is A doing?',['Expressing thanks','Complaining','Refusing','Asking for money'],0,'恐縮です expresses gratitude and a sense of obligation.'],
  [[['A','会議の 日程ですが、参加者の 都合を 考慮すると、来週の 木曜日が 無難かと。'],['B','ひとまず 木曜日で 仮押さえして おこう。']],'What will B do?',['Tentatively book Thursday','Fix Friday','Cancel the meeting','Ask everyone again'],0,'B will tentatively reserve Thursday.']])]}
];
N1[0].lessons.push(LW('Analysis words',`是非|ぜひ|right and wrong;余地|よち|room, scope;動機|どうき|motive;兆し|きざし|sign, omen;実態|じったい|actual state;趨勢|すうせい|trend;弊害|へいがい|ill effect;示唆|しさ|suggestion`));
