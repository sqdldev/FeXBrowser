let url = location.href;
let fgnc = url.substr( 72 );

if (fgnc == 1) {
   $('body').css({'background-image':'url(https://figseu-technology.github.io/FeXBrowser/RollingSky/RSBG/RSBG_2.png)'});
   $('#level-name').html('<img src="STT/STT_1.png" width="96%">');
   $('#level-view').html('<img src="RAA/RAA_1.png" width="92%">');
} else if (fgnc == 443) {
   $('body').css({'background-image':'url(https://figseu-technology.github.io/FeXBrowser/RollingSky/RSBG/RSBG_443.png)'});
   $('#level-name').html('<img src="STT/STT_443.png" width="96%">');
   $('#level-view').html('<img src="RAA/RAA_443.png" width="92%">');
}

function BGM() {
   if (fgnc == 1) {
	$('#st_1').get(0).play();
   } else if (fgnc == 443) {
	$('#st_443').get(0).play();
   }
}
