function bigger() {
    alert("Hello, world!");
    document.getElementById("Textbox").style.fontSize = "24pt";
}

function fancify() {

    document.getElementById("Textbox").style.fontWeight = "Bold";
    document.getElementById("Textbox").style.color = "Blue";
    document.getElementById("Textbox").style.textDecoration = "underline";
}

function makeBoring() {
	document.getElementById("Textbox").style.fontWeight = "normal";
	document.getElementById("Textbox").style.color = "Black";
	document.getElementById("Textbox").style.textDecoration = "none";

}

function mooBtn(){
	var userText = document.getElementById("Textbox");
	userText.style.textTransform = "uppercase";
	var parts = userText.value.split(".");
	userText.value = parts.join("-Moo");
}