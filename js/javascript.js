function element(id) {
    return document.getElementById(id);
}
var button = element("button");
var option = element("option");
var text = element("condition");

var isplaying = false;
var issetting = false;

var buttoninfo = {
    width : button.offsetWidth,
    height : button.offsetHeight
};
var optioninfo = {
    width : option.offsetWidth,
    height : option.offsetHeight
};


//set button location
setButtonLocation();
function setButtonLocation() {
    var Width = window.innerWidth;
    var Height = window.innerHeight;
    button.style.left = Width-buttoninfo.width/1.5+"px";
    button.style.top = Height-buttoninfo.height/1.5+"px";
    option.style.left = optioninfo.width/1.5+"px";
    option.style.top = optioninfo.height/1.5+"px";
}

//resize
window.addEventListener('resize', setButtonLocation);

//hide option
function OptionDisplay(display) {
    option.style.display = display;
}

var setting = element("setting");
//button
button.addEventListener('mouseover', () => {
    button.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
});
button.addEventListener('mouseout', () => {
    button.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
});
button.addEventListener('click', ()=>{
    if(issetting) {
        text.innerText = "Start";
        OptionDisplay("inline-block");
        setting.style.display = "none";
        issetting = false;
    } else {
        if(isplaying) {
            text.innerText = "Start";
            OptionDisplay("inline-block");
            isplaying = false;
        } else {
            text.innerText = "Stop";
            OptionDisplay("none");
            isplaying = true;
        } 
    }

});

//option


option.addEventListener('mouseover', () => {
    option.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
});
option.addEventListener('mouseout', () => {
    option.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
});
option.addEventListener('click', ()=>{
    text.innerText = "Close";
    OptionDisplay("none");
    issetting = true;
    //setting menu
    setting.style.display = "inline-block";


});

//planets
var Earth = element("earth");
var Sun = element("sun");

var FirstWidth = window.innerWidth;
var FirstHeight = window.innerHeight;

var time = 1;
var G = {
    n: 6.673,
    log: -11
};
var r = {
    n: 1.5,
    log: 8
}
var EarthInfo = {
    mass: {
        n: 6,
        log: 24
    },
    speed: {
        top: 0,
        left: 0
    },
    location: {
        top: FirstHeight/2,
        left: FirstWidth/4
    }
};
var SunInfo = {
    mass: {
        n: 1.5,
        log: 30
    },
    speed: {
        top: 0,
        left: 0
    },
    location: {
        top: FirstHeight/2,
        left: FirstWidth/2
    }
};
var distance = {
    top: 0,
    left: 0,
    dia: 0
}
var a = {
    value: 0,
    top: 0,
    left: 0
};

//Move
function PlanetMove() {
    EarthInfo.location.top += EarthInfo.speed.top;
    EarthInfo.location.left += EarthInfo.speed.left;
    SunInfo.location.top += SunInfo.speed.top;
    SunInfo.location.left += SunInfo.speed.left;
    Earth.style.top = EarthInfo.location.top;
    Earth.style.left = EarthInfo.location.left;
    Sun.style.top = SunInfo.location.top;
    Sun.style.left = SunInfo.location.left;
}
function EarthSpeed() {
    distance.top = SunInfo.location.top-EarthInfo.location-top;
    distance.left = SunInfo.location.left-EarthInfo.location-left;
    distance.dia = Math.sqrt(Math.pow(distance.top, 2)+Math.pow(distance.left,2));
    a.value = G.n*SunInfo.mass.n/Math.pow(r.n * distance.dia, 2) * (Math.pow(10, G.log+M.log-(2*r.log)));
    a.top = distance.top/distance.dia * a.value;
    a.left = distance.left/distance.dia * a.value;
    EarthInfo.speed.top += a.top;
    EarthInfo.speed.left += a.left;
}
function SunSpeed() {
    distance.top = EarthInfo.location.top-SunInfo.location-top;
    distance.left = EarthInfo.location.left-SunInfo.location-left;
    distance.dia = Math.sqrt(Math.pow(distance.top, 2)+Math.pow(distance.left,2));
    a.value = G.n*EarthInfo.mass.n/Math.pow(r.n * distance.dia, 2) * (Math.pow(10, G.log+M.log-(2*r.log)));
    a.top = distance.top/distance.dia * a.value;
    a.left = distance.left/distance.dia * a.value;
    SunInfo.speed.top += a.top;
    SunInfo.speed.left += a.left;
}

setInterval(function() {
    if(isplaying) {
        EarthSpeed();
        SunSpeed();
        PlanetMove();
    }
},1000/time);
isplaying = true
