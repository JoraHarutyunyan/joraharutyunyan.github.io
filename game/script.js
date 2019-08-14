let arr1 = ["red", "chartreuse", "blue", "yellow", "black", "purple", "aqua", "brown"];
let arr2 = ["red", "chartreuse", "blue", "yellow", "black", "purple", "aqua", "brown"];
let randomArr = [];
let resultArr = [];
let num = 0;

arr1.sort(function (a, b) {
    return 0.5 - Math.random();
});
arr2.sort(function (a, b) {
    return 0.5 - Math.random();
});
randomArr = arr1.concat(arr2);
randomArr.sort(function (a, b) {
    return 0.5 - Math.random();
});
console.log(randomArr);
let container = document.querySelector("#container");
let body = document.querySelector("body");
for (let i = 0; i < randomArr.length; i++) {
    let div = document.createElement("div");
    div.id = i + "_" + randomArr[i];
    div.className = "card";
    div.style.backgroundColor = "#acacac";
    div.onclick = turn;
    container.appendChild(div);

}

function turn(event) {
    if (event.target.style.backgroundColor === "rgb(172, 172, 172)"){
        let div = event.target;
        let color = div.id.split("_")[1];
        div.style.backgroundColor = color;
        resultArr.push(div);
        num++;
        if(num === 16){
			let h1 = document.createElement("h1");
			h1.innerHTML = "You Won!!";
			h1.id = "fixed"
			body.appendChild(h1);
		}
        console.log(num);
        if (resultArr.length > 1) {
            if (resultArr.find(function (element) {
                    return element.id.split("_")[1] !== color;
                })) {
                resultArr[0].style.backgroundColor = "#acacac";
                resultArr.splice(0, 1);
                num --;
            } else {
                resultArr.splice(0,2);
            }
        }
    }
}