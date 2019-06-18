var i = 0;
var txt = " ";
var speed = 90;

window.onload = function() {
	txt = document.getElementById("typewriter").textContent;
	clearWriter();
	typeWriter();
}

function clearWriter() {
	document.getElementById("typewriter").innerHTML = "";
}

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("typewriter").innerHTML += txt.charAt(i);
		i++;
		speed = 90;
		if ( i == txt.length){
			clearWriter();
			i = 0;
		}
		setTimeout(typeWriter, speed);
	}
	}
