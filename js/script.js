var textResult=document.getElementById('container-text');
var background = document.getElementById("color-container");
var paletteId = 0;
function textInput(){
    var text = document.getElementById('forground-text').value;
    textResult.innerHTML = text;
    }

function fontColorInput(){
    var color = document.getElementById('font-color').value;
    var palettePickerBox = document.getElementById('text-color');
    textResult.style.color = color;
    palettePickerBox.style.background = color;
}
function backgroundColorInput(){
    var backgroundValue = document.getElementById('bg-input').value;
    var palettePickerBox = document.getElementById('bg-color');
    background.style.background = backgroundValue;
    palettePickerBox.style.background = backgroundValue;
}
function palettePicker(paletteValue) {
	if (paletteValue == "text") {
		$("#palette").css("padding-top", "0px");
		$("#palette").css("display", "block");
        $("#palette").css("float","right");
		paletteId = 1;
	} else if (paletteValue == "bg") {
		$("#palette").css("padding-top", "165px");
		$("#palette").css("display", "block");
        $("#palette").css("float","right");
		paletteId = 2;
	} else {
		$("#palette").css("display", "none");
		paletteId = 0;
	}
}

$(document).ready(function () {
	$("td").click(function () {
		if (paletteId == 2) {
			$("#container-text").css("color", $(this).closest("td").css("background-color"));
			$("#bg-color").css("background-color", $(this).closest("td").css("background-color"));
			$("#bg-input").val($(this).closest("td").css("background-color"));
            $("#palette").css("display","none");
		} else if (paletteId == 1) {
			$("#color-container").css("background-color", $(this).closest("td").css("background-color"));
			$("#text-color").css("background-color", $(this).closest("td").css("background-color"));
			$("#font-color").val($(this).closest("td").css("background-color"));
            $("#palette").css("display","none");
		}
	});
});

$('body').on('click',function(evt) {
    var clicked = evt.target;
    var id = $(clicked).attr('id');
    if(id=="text-color" || id=="bg-color"){
        document.getElementById("palette").style.display="block";
    }
    else{
        document.getElementById("palette").style.display="none";
    }
});

