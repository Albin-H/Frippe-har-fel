var flagga = 0;
function cHeading(){
	var rubrik = document.getElementById('rubrik');
	if (flagga == 0){
		rubrik.innerHTML = 'Du Klickade';
		flagga = 1;
	}
	else{
		rubrik.innerHTML = 'JavaScript';
		flagga = 0;
	}
	
}

function cBG(){
	var tjo = document.getElementById('nu');
	document.body.style.backgroundColor ="lightgreen";
}

function cBG2(){
	var he = document.getElementById('nu');
	document.body.style.backgroundColor ="pink";
}