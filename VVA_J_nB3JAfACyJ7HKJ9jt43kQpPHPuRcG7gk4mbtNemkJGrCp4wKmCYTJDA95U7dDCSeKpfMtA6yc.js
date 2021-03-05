let url = location.href;
let fgnc = url.substr( 60 );;
if (fgnc == "Function_Setting") {
   $('#Main_Title').html('Setting');
   $('#Main_Menu').html(' ');
} else if (fgnc == "%E3%81%A4%E3%81%8F%E3%81%A4%E3%81%8F%E3%81%BC%E3%81%86%E3%81%97" || fgnc == "%E3%83%84%E3%82%AF%E3%83%84%E3%82%AF%E3%83%9C%E3%82%A6%E3%82%B7") {
   $('#Main_Title').html('Search');
   $('#Main_Menu').html('<div class="s_bar" align="center"><h3 align="left">　ツクツクボウシ</h3><h5 align="left" class="Home_p">　昆虫</h5><img align="center" width="200px" src="img/28488525742287558213585485.jpg"><hr size="3"/><h5>細身で黒っぽく、緑色の斑紋があるセミ。姿よりも「オーシィ・ツクツク・オーシィ…」という鳴き声で有名。都市周辺でも普通に見られる。人の気配に敏感なので、どこにもいるわりには姿を見ることは少ない。夏の終わり頃に個体数が増えて鳴き声が目立つようになるので、秋を告げるセミとされる。</h5><h5 align="left" class="Home_p">　昆虫エクスプローラより</h5></div><div class="s_bar" align="center"><h4><a href="https://www.insects.jp/kon-semituku.htm">ツクツクボウシ - 昆虫エクスプローラ</a></h4><hr size="3"/><h5>ツクツクボウシ. カメムシ目 頸吻亜目 セミ科 セミ亜科. Meimuna opalifera. 大きさ （翅端まで）40-47mm; 時 期 7-10月; 分 布 北海道・本州・四国・九州. 細身で黒っぽく、</h5></div><br> </br><div class="s_bar" align="center"><h4><a href="https://ja.m.wikipedia.org/wiki/%E3%83%84%E3%82%AF%E3%83%84%E3%82%AF%E3%83%9C%E3%82%A6%E3%82%B7">ツクツクボウシ - Wikipedia</a></h4><hr size="3"/><h5>ツクツクボウシ（つくつく法師、寒蟬、Meimuna opalifera ） はカメムシ目（半翅目）・ヨコバイ亜目（同翅亜目）<h5><hr size="3"/><h5 align="left" class="Home_p">科： セミ科 Cicadidae</h5><h5 align="left" class="Home_p">目： カメムシ目（半翅目） Hemiptera<h5></div><br> </br><div class="s_bar" align="center"><h4><a href="https://m.youtube.com/results?sp=mAEA&search_query=ツクツクボウシ">ツクツクボウシ - YouTube</h4></a><hr size="3"/><h5>『ツクツクボウシ』の動画</h5></div>');
} else if (fgnc == '') {

} else {
   $('#Main_Title').html('Search');
   $('#Main_Menu').html('<div class="s_bar" align="center"><h4>検索結果に一致するデータが取得できませんでした</h4></div>');
}
