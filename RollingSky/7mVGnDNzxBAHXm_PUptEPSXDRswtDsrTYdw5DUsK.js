let url = location.href;
let fgnc = url.substr( 72 );

if (fgnc == 1) {
   $('body').css({'background-image':'url(https://figseu-technology.github.io/FeXBrowser/RollingSky/RSBG/RSBG_2.png)'});
   $('#level-name').html('<img src="STT/STT_1.png" width="96%">');
   $('#level-view').html('<a href="https://figseu-technology.github.io/one_index.html"><img src="RAA/RAA_1.png" width="92%"></a>');
} else if (fgnc == 12) {
   $('body').css({'background-image':'url(https://figseu-technology.github.io/FeXBrowser/RollingSky/RSBG/RSBG_1.png)'});
   $('#level-name').html('<img src="STT/STT_12.png" width="96%">');
   $('#level-view').html('<img src="RAA/RAA_12.png" width="92%">');
} else if (fgnc == 443) {
   $('body').css({'background-image':'url(https://figseu-technology.github.io/FeXBrowser/RollingSky/RSBG/RSBG_443.png)'});
   $('#level-name').html('<img src="STT/STT_443.png" width="96%">');
   $('#level-view').html('<img src="RAA/RAA_443.png" width="92%">');
} else {
   $('body').css({'background-image':'url(https://figseu-technology.github.io/FeXBrowser/RollingSky/RSBG/RSBG_No.png)'});
   $('#level-name').html('<img src="STT/STT_No.png" width="96%">');
   $('#level-view').html('<img src="RAA/RAA_No.png" width="92%">');
}

function BGM() {
   if (fgnc == 1) {
	$('#st_1').get(0).play();
   } else if (fgnc == 12) {
	$('#st_12').get(0).play();
   } else if (fgnc == 443) {
	$('#st_443').get(0).play();
   } else {
	$('#st_No').get(0).play();
   }
}
