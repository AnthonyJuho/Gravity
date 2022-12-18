var sun = document.getElementById("sun");
var earth = document.getElementById("earth");
var control = document.getElementById("control");

const earthinfo = {
    top: (window.innerHeight/2),
    left: 400,
    speed: {
        down: 2.15,
        right: 0
    }
};
const suninfo = {
    top: window.innerHeight/2,
    left: window.innerWidth/2,
    speed: {
        down: 0,
        right: 0
    }
}
const distance = {
    top:0,
    left:0,
    dia:0
}
var time = 120;
var power = 0;
var startpower = 2000;
var playing = false;


setControl();
drawNew();
let Move = setInterval(function() {
    if(playing){
        MoveEarth();
        MoveSun();
        setEarthInfo();
        setSunInfo();
    }
},1000/time);

control.addEventListener("click", function(event) {
    if(playing){
        playing = false;
    } else {
        playing = true;
    }
});

function MoveEarth(){
    distance.top = earthinfo.top-suninfo.top;
    distance.left = earthinfo.left-suninfo.left;
    distance.dia = Math.sqrt(Math.pow(distance.top,2)+Math.pow(distance.left,2));
    power = startpower/Math.pow(distance.dia,2);

    distance.top /= distance.dia;
    distance.left /= distance.dia;

    distance.top *= power;
    distance.left *= power;

    earthinfo.speed.down += distance.top;
    earthinfo.speed.right += distance.left;

    earthinfo.top -= earthinfo.speed.down;
    earthinfo.left -= earthinfo.speed.right;
}
function MoveSun(){
    suninfo.top += suninfo.speed.down;
    suninfo.left += suninfo.speed.right;
}
function setEarthInfo(){
    earth.style.top = earthinfo.top+"px";
    earth.style.left = earthinfo.left+"px";
}
function setSunInfo(){
    sun.style.top = suninfo.top+"px";
    sun.style.left = suninfo.left+"px";
}
function drawNew(){
    setEarthInfo();
    setSunInfo();
}
function setControl(){
    control.style.top = (window.innerHeight-100)+"px";
    control.style.left = (window.innerWidth-100)+"px";
}