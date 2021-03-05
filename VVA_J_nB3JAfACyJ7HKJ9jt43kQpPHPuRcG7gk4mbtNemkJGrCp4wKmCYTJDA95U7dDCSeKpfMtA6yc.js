let url = location.href;
let fgnc = url.substr( 60 );;
if (fgnc == "Function_Setting") {
   $('#Main_Title').html('Setting');
   $('#Main_Menu').html(' ');
} else if (fgnc == "ツクツクボウシ" && fgnc == "つくつくぼうし") {
   $('#Main_Title').html('Search');
   $('#Main_Menu').html('<div class="s_bar" align="center">
<h3 align="left">&#12288;ツクツクボウシ</h3>
<h5 align="left" class="Home_p">　昆虫</h5>
<img align="center" width="200px" src="img/28488525742287558213585485.jpg">
<hr size="3"/>
<h5>細身で黒っぽく、緑色の斑紋があるセミ。姿よりも「オーシィ・ツクツク・オーシィ…」という鳴き声で有名。都市周辺でも普通に見られる。人の気配に敏感なので、どこにもいるわりには姿を見ることは少ない。夏の終わり頃に個体数が増えて鳴き声が目立つようになるので、秋を告げるセミとされる。</h5>
<h5 align="left" class="Home_p">　昆虫エクスプローラより</h5>
</div>');
}
