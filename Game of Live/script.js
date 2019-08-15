var n  = 40;
var m = 40;
var side = 15;
var matrix = [];
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];
var mardakerArr = [];

function setup() {
    for (var f = 0; f < n ; f++){
        matrix[f]= [];
        for (h = 0; h < m; h++){
            matrix[f][h] = 0;
           
        }
    }
    for (var k = 0; k<n*m*40/100 ; k++) {
        var x = Math.round(Math.random()*39);
        var y = Math.round(Math.random()*39);
        matrix[y][x] = 1;
    }
    for (var k = 0; k<n*m*24/100; k++) {
        var x = Math.round(Math.random()*39);
        var y = Math.round(Math.random()*39);
        matrix[y][x] = 2;
    }
    for (var k = 0; k<n*m*10/100; k++) {
        var x = Math.round(Math.random()*39);
        var y = Math.round(Math.random()*39);
        matrix[y][x] = 3;
    }
    for (var k = 0; k <n*m*2/100; k++) {
        var x = Math.round(Math.random()*39);
        var y = Math.round(Math.random()*39);
        matrix[y][x] = 4;
    }

    frameRate(5);
    createCanvas(n  * side, m * side);
    background('#acacac');


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)

            }
            else if (matrix[y][x] == 3) {
                var gt = new Gishatich(x, y)
                gishatichArr.push(gt)

            }
            else if (matrix[y][x] == 4) {
                var md = new Mard(x, y)
                mardArr.push(md)

            }
        }
    }

}


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("orange");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
             else if (matrix[y][x] == 6) {
                fill("white");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            rect(x * side, y * side, side, side)
        }
    }

     for (var i in grassArr) {
        grassArr[i].mult()
     }


    for (var i in xotakerArr) {
        xotakerArr[i].mult()
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }
    for (var i in mardArr) {
        mardArr[i].move()
        mardArr[i].eat()
        mardArr[i].mult()
        mardArr[i].becomeMardaker() 
        mardArr[i].die()        
    }
    for(var i in mardakerArr){
        mardakerArr[i].eat()
        mardakerArr[i].move()
        mardakerArr[i].becomeMard() 
    }
}