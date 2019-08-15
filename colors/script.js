let red = document.querySelector("#red");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let square = document.querySelector("#square");
let redVal = 128;
let greenVal = 128;
let blueVal = 128;

red.addEventListener("input", setColors);
green.addEventListener("input", setColors);
blue.addEventListener("input", setColors);

function setColors(){
	redVal = red.value;
	greenVal = green.value;
	blueVal = blue.value;
	let rgb = "rgb(" + redVal + ", " + greenVal + ", " + blueVal + ")"; 
	square.style.backgroundColor = rgb;
}

square.addEventListener("click", newColors);
let container = document.querySelector("#container");

function newColors(){
	$("#container").empty()
	let r = redVal;
	let g = greenVal;
	let b = blueVal;
	for(let i = 0; i<5; i++){
		let div = document.createElement("div");
		div.style.border = "1px solid black";
		div.style.height = "50px";
		div.style.width = "50px";
		div.style.display = "inline-block";
		div.style.margin = "25px";
		r = r - r * 0.1;
		g = g - g * 0.1;
		b = b - b * 0.1;
		let rgb = "rgb(" + r + ", " + g + ", " + b + ")"; 
		div.style.backgroundColor = rgb;
		console.log(rgb);
		container.append(div);
	}
}