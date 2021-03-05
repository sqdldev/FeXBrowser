let url = location.href;
let fgnc = url.substr( 60 );;
if (fgnc == "Function_Setting") {
   $('#Main_Title').html('Setting');
   $('#Main_Menu').html(' ');
} else if (fgnc == "ツクツクボウシ" && fgnc == "つくつくぼうし") {
   $('#Main_Title').html('Search');
} else if (fgnc == '') {

} else {
   $('#Main_Title').html('Search');
   $('#Main_Menu').html('検索結果に一致するデータが取得できませんでした');
}
