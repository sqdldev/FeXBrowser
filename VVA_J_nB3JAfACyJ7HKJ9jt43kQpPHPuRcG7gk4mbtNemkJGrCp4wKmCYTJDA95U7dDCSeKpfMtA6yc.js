// 初期化処理

let url = location.href;
let fgnc = url.substr( 60 );
let fgac = url.substr( 7 );
let Bookmark_1 = $.cookie('History_1');
let Bookmark_2 = $.cookie('History_2');
let Bookmark_3 = $.cookie('History_3');
let Bookmark_4 = $.cookie('History_4');
let Bookmark_5 = $.cookie('History_5');
let Bookmark_6 = $.cookie('History_6');
let Bookmark_7 = $.cookie('History_7');
let Bookmark_8 = $.cookie('History_8');
let Bookmark_9 = $.cookie('History_9');
let Bookmark_10 = $.cookie('History_10');
let Bookmark_11 = $.cookie('History_11');
let Bookmark_12 = $.cookie('History_12');
let Bookmark_13 = $.cookie('History_13');
let Bookmark_14 = $.cookie('History_14');
let Bookmark_15 = $.cookie('History_15');
let Bookmark_16 = $.cookie('History_16');
let Bookmark_17 = $.cookie('History_17');
let Bookmark_18 = $.cookie('History_18');
let Bookmark_19 = $.cookie('History_19');
let Bookmark_20 = $.cookie('History_20');

// データベース

if (fgnc == "Function_Setting") {
   $('#Site_Name').html('FeX Browser - Setting');
   $('#Main_Title').html('Setting');
   $('#Main_Menu').html(' ');
} else if (fgac == "https:/") {
   if (typeof history_1 == "undefined") {
      $.cookie('History_1', fgnc, { expires: 30, domain:'figseu-technology.github.io', path:'/FeXBrowser/'});
   } else if (typeof history_1 !== "undefined" && typeof history_2 == "undefined") {
      $.cookie('History_2', history_1, { expires: 30, domain:'figseu-technology.github.io', path:'/FeXBrowser/'});
      $.cookie('History_1', fgnc, { expires: 30, domain:'figseu-technology.github.io', path:'/FeXBrowser/'});
   }
   $('#Site_Name').html('FeX Browser - Bookmark');
   $('#Main_Title').html('Bookmark');
   $('#Main_Menu').html('ブックマークに追加しました');
} else if (fgnc == "Function_Bookmark") {
   $('#Site_Name').html('FeX Browser - Bookmark');
   $('#Main_Title').html('Bookmark');
   $('#Search_Tag').html('addition');
   $('#Main_Menu').html('<div class="s_bar" align="center"><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_1 + '">' + Bookmark_1 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_2 + '">' + Bookmark_2 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_3 + '">' + Bookmark_3 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_4 + '">' + Bookmark_4 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_5 + '">' + Bookmark_5 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_6 + '">' + Bookmark_6 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_7 + '">' + Bookmark_7 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_8 + '">' + Bookmark_8 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_9 + '">' + Bookmark_9 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_10 + '">' + Bookmark_10 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_11 + '">' + Bookmark_11 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_12 + '">' + Bookmark_12 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_13 + '">' + Bookmark_13 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_14 + '">' + Bookmark_14 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_15 + '">' + Bookmark_15 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_16 + '">' + Bookmark_16 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_17 + '">' + Bookmark_17 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_18 + '">' + Bookmark_18 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_19 + '">' + Bookmark_19 + '</a></h4><hr size="3"/><h4><a href="https://figseu-technology.github.io/FeXBrowser/index.html?f=' + Bookmark_20 + '">' + Bookmark_20 + '</a></h4></div><br> </br>');
} else if (fgnc == "%E3%81%82") {
   $('#Site_Name').html('FeX Browser - Search');
   $('#Main_Title').html('Search');
   $('#Main_Menu').html('<div class="s_bar" align="center"><h3 align="left">　あ</h3><h5 align="left" class="Home_p">　平仮名</h5><hr size="3"/><h5>・五十音図ア行の第1音。五母音の一。後舌の開母音。</h5><h5>・平仮名「あ」は「安」の草体、片仮名「ア」は「阿」の偏から変化したもの。</h5><h5 align="left" class="Home_p">　国語辞書より</h5></div>');
} else if (fgnc == "%E4%BA%9E"　|| fgnc == "%E4%BA%9C") {
   $('#Site_Name').html('FeX Browser - Search');
   $('#Main_Title').html('Search');
   $('#Main_Menu').html('<div class="s_bar" align="center"><h3 align="left">　亜 (亞)</h3><h5 align="left" class="Home_p">　漢字</h5><hr size="3"/><h5><p>1. つ（次）ぐ。準じる。第二番目。「亜熱帯」「亜流」 </p><p>2. 無機酸で酸素原子が少ない。「亜硫酸」 </p><p>3. 「亜細亜(アジア)」の略。「亜州」「東亜」 </p><p>4. 外国語の音訳に用いる。「亜米利加(アメリカ)」「亜爾然丁(アルゼンチン)」</p><p>5. 生物学で、生物分類上の基本単位である門・綱・目・科・属・種などの、それぞれの下位単位を表す語。</p></h5><h5 align="left" class="Home_p">　国語辞書より</h5></div>');
} else if (fgnc == 'RollingSkyEvolution' || fgnc == 'Rolling+Sky+Evolution' || fgnc == '%E3%83%AD%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0%E3%82%B9%E3%82%AB%E3%82%A4%E3%82%A8%E3%83%9C%E3%83%AA%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3' || fgnc == '%E3%83%AD%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%BB%E3%82%B9%E3%82%AB%E3%82%A4%E3%82%A8%E3%83%9C%E3%83%AA%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3') {
   $('#Site_Name').html('FeX Browser - Search');
   $('#Main_Title').html('Search');
   $('#Main_Menu').html('<div class="s_bar" align="center"><h3 align="left">　Rolling Sky Evolution</h3><h5 align="left" class="Home_p"> </h5><img align="center" width="200px" src="ic/Rolling Sky Evolution icon.png"><hr size="3"/><h5>ローリングスカイの二次創作ゲームがWEBとAndroidアプリで登場！超難易度の鬼畜ステージのクリアを目指せ！</h5><hr size="3"/><h3 align="center"><a href="https://figseu-technology.github.io/RollingSkyEvolution/index.html">Play (Browser)</a></h3><hr size="3"/><h3 align="center"><a href="https://github.com/Figseu-Technology/RollingSkyEvolution/releases">Download (Android)</a></h3></div><br> </br><div class="s_bar" align="center"><h4><a href="https://m.youtube.com/results?sp=mAEA&search_query=Rolling+Sky+Evolution">Rolling Sky Evolution - YouTube</h4></a><hr size="3"/><h5>『Rolling Sky Evolution』の動画</h5></div><br> </br><div class="s_bar" align="center"><h4><a href="https://web.lobi.co/game/rollingsky/group/1a8304cf6fe3f2f1d254a29a6a83b6089f14e7ab">Rolling Sky Evolution | ローリング・スカイ | Lobi</h4></a><hr size="3"/><h5>ローリング・スカイの攻略コミュニティ「Rolling Sky Evolution」に参加して気軽にチャットで交流しよう！</h5></div><br> </br><div class="s_bar" align="center"><h4><a href="https://shindanmaker.com/1002892">あなたにオススメの Rolling Sky Evolution のステージ - 診断メーカー</h4></a><hr size="3"/><h5>Rolling Sky Evolution のオススメステージを診断します！今日の挑戦ステージとしても使えます</h5></div><br> </br><div class="s_bar" align="center"><h4><a href="https://twitter.com/figseu_tech">Figseu Technology (뷔쿠세루) (@figseu_tech) | Twitter</h4></a><hr size="3"/><h5>The latest Tweets from Figseu Technology (뷔쿠세루) ( @figseu_tech). Rolling Sky で一位を狙ってる例の惑星です</h5></div><br> </br><div class="s_bar" align="center"><h4><a href="https://m.youtube.com/channel/UCmeWmMVuc57_iXPeNybi0yQ">Figseu Technology - YouTube</h4></a><hr size="3"/><h5>作曲や、絵を描いたり、ゲーム作ったりと、いろいろしています</h5></div><br> </br>');
} else if (fgnc == "%E3%81%A4%E3%81%8F%E3%81%A4%E3%81%8F%E3%81%BC%E3%81%86%E3%81%97" || fgnc == "%E3%83%84%E3%82%AF%E3%83%84%E3%82%AF%E3%83%9C%E3%82%A6%E3%82%B7") {
   $('#Site_Name').html('FeX Browser - Search');
   $('#Main_Title').html('Search');
   $('#Main_Menu').html('<div class="s_bar" align="center"><h3 align="left">　ツクツクボウシ</h3><h5 align="left" class="Home_p">　昆虫</h5><img align="center" width="200px" src="img/28488525742287558213585485.jpg"><hr size="3"/><h5>細身で黒っぽく、緑色の斑紋があるセミ。姿よりも「オーシィ・ツクツク・オーシィ…」という鳴き声で有名。都市周辺でも普通に見られる。人の気配に敏感なので、どこにもいるわりには姿を見ることは少ない。夏の終わり頃に個体数が増えて鳴き声が目立つようになるので、秋を告げるセミとされる。</h5><h5 align="left" class="Home_p">　昆虫エクスプローラより</h5></div><div class="s_bar" align="center"><h4><a href="https://www.insects.jp/kon-semituku.htm">ツクツクボウシ - 昆虫エクスプローラ</a></h4><hr size="3"/><h5>ツクツクボウシ. カメムシ目 頸吻亜目 セミ科 セミ亜科. Meimuna opalifera. 大きさ （翅端まで）40-47mm; 時 期 7-10月; 分 布 北海道・本州・四国・九州. 細身で黒っぽく、</h5></div><br> </br><div class="s_bar" align="center"><h4><a href="https://ja.m.wikipedia.org/wiki/%E3%83%84%E3%82%AF%E3%83%84%E3%82%AF%E3%83%9C%E3%82%A6%E3%82%B7">ツクツクボウシ - Wikipedia</a></h4><hr size="3"/><h5>ツクツクボウシ（つくつく法師、寒蟬、Meimuna opalifera ） はカメムシ目（半翅目）・ヨコバイ亜目（同翅亜目）<h5><hr size="3"/><h5 align="left" class="Home_p">科： セミ科 Cicadidae</h5><h5 align="left" class="Home_p">目： カメムシ目（半翅目） Hemiptera<h5></div><br> </br><div class="s_bar" align="center"><h4><a href="https://m.youtube.com/results?sp=mAEA&search_query=ツクツクボウシ">ツクツクボウシ - YouTube</h4></a><hr size="3"/><h5>『ツクツクボウシ』の動画</h5></div>');
} else if (fgnc == '') {
   $('#Site_Name').html('FeX Browser - Home');
   $('#Main_Title').html('APP');
   $('#Main_Menu').html('<div align="center"><p><a href="https://figseu-technology.github.io/RollingSkyEvolution/index.html"><img src="ic/Rolling Sky Evolution icon.png" width="25%"></a><a href="https://figseu-technology.github.io/FeXBrowser/index.html"><img src="ic/Empty.png" width="25%"></a><a href="https://figseu-technology.github.io/FeXBrowser/index.html"><img src="ic/Empty.png" width="25%"></a></p></div><div align="center"><p><a href="https://figseu-technology.github.io/FeXBrowser/index.html"><img src="ic/Empty.png" width="25%"></a><a href="https://figseu-technology.github.io/FeXBrowser/index.html"><img src="ic/Empty.png" width="25%"></a><a href="https://figseu-technology.github.io/FeX-Browser/index.html"><img src="ic/Empty.png" width="25%"></a></p></div>');
} else {
   $('#Site_Name').html('FeX Browser - Search');
   $('#Main_Title').html('Search');
   $('#Main_Menu').html('<div class="s_bar" align="center"><h4>検索結果に一致するデータが取得できませんでした</h4></div>');
}
