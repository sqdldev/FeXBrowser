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
} else if (fgnc == 14) {
   $('body').css({'background-image':'url(https://figseu-technology.github.io/FeXBrowser/RollingSky/RSBG/RSBG_14.png)'});
   $('#level-name').html('<img src="STT/STT_14.png" width="96%">');
   $('#level-view').html('<img src="RAA/RAA_14.png" width="92%">');
} else if (fgnc == 36) {
   $('body').css({'background-image':'url(https://figseu-technology.github.io/FeXBrowser/RollingSky/RSBG/RSBG_36.png)'});
   $('#level-name').html('<img src="STT/STT_36.png" width="96%">');
   $('#level-view').html('<img src="RAA/RAA_36.png" width="92%">');
} else if (fgnc == 39) {
   $('body').css({'background-image':'url(https://figseu-technology.github.io/FeXBrowser/RollingSky/RSBG/RSBG_39.png)'});
   $('#level-name').html('<img src="STT/STT_39.png" width="96%">');
   $('#level-view').html('<img src="RAA/RAA_39.png" width="92%">');
} else if (fgnc == 40) {
   $('body').css({'background-image':'url(https://figseu-technology.github.io/FeXBrowser/RollingSky/RSBG/RSBG_40.png)'});
   $('#level-name').html('<img src="STT/STT_40.png" width="96%">');
   $('#level-view').html('<img src="RAA/RAA_40.png" width="92%">');
} else if (fgnc == 41) {
   $('body').css({'background-image':'url(https://figseu-technology.github.io/FeXBrowser/RollingSky/RSBG/RSBG_41.png)'});
   $('#level-name').html('<img src="STT/STT_41.png" width="96%">');
   $('#level-view').html('<img src="RAA/RAA_41.png" width="92%">');
} else if (fgnc == 42) {
   $('body').css({'background-image':'url(https://figseu-technology.github.io/FeXBrowser/RollingSky/RSBG/RSBG_42.png)'});
   $('#level-name').html('<img src="STT/STT_42.png" width="96%">');
   $('#level-view').html('<img src="RAA/RAA_42.png" width="92%">');
} else if (fgnc == 443) {
   $('body').css({'background-image':'url(https://figseu-technology.github.io/FeXBrowser/RollingSky/RSBG/RSBG_443.png)'});
   $('#level-name').html('<img src="STT/STT_443.png" width="96%">');
   $('#level-view').html('<img src="RAA/RAA_443.png" width="92%">');
} else if (fgnc == 448) {
   $('body').css({'background-image':'url(https://figseu-technology.github.io/FeXBrowser/RollingSky/RSBG/RSBG_448.png)'});
   $('#level-name').html('<img src="STT/STT_448.png" width="96%">');
   $('#level-view').html('<img src="RAA/RAA_448.png" width="92%">');
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
   } else if (fgnc == 14) {
	$('#st_14').get(0).play();
   } else if (fgnc == 36) {
	$('#st_36').get(0).play();
   } else if (fgnc == 39) {
	$('#st_39').get(0).play();
   } else if (fgnc == 40) {
	$('#st_40').get(0).play();
   } else if (fgnc == 41) {
	$('#st_41').get(0).play();
   } else if (fgnc == 42) {
	$('#st_42').get(0).play();
   } else if (fgnc == 443) {
	$('#st_443').get(0).play();
   } else if (fgnc == 448) {
	$('#st_448').get(0).play();
   } else {
	$('#st_No').get(0).play();
   }
}
