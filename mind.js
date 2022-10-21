var R1color = document.getElementById('R-color');
var G2color = document.getElementById('G-color');
var B3color = document.getElementById('B-color');

var Rvalue = document.getElementById('R-value');
var Gvalue = document.getElementById('G-value');
var Bvalue = document.getElementById('B-value');

var R = document.getElementById('R');
var G = document.getElementById('G');
var B = document.getElementById('B');

Rvalue.innerHTML = R1color.value;
Gvalue.innerHTML = G2color.value;
Bvalue.innerHTML = B3color.value;

var rbg = document.getElementsByClassName('rgb-Container');
function RGBcolor(){
	Rvalue.innerHTML = R1color.value;
	Gvalue.innerHTML = G2color.value;
	Bvalue.innerHTML = B3color.value;
	R.innerHTML = R1color.value;	
	G.innerHTML = G2color.value;	
	B.innerHTML = B3color.value;

	var a = R1color.value; 
	var b = G2color.value;
	var c = B3color.value;
	rbg[0].style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
}
