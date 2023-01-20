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
var EarthInfo = {
    mass: {
        n: 0,
        log: 0
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
        n: 0,
        log: 0
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

});

//Move
function PlanetMove() {
    Earth.style.top = EarthInfo.location.top;
    Earth.style.left = EarthInfo.location.left;
    Sun.style.top = SunInfo.location.top;
    Sun.style.left = SunInfo.location.left;
}

setInterval(function() {
    if(isplaying) {

        PlanetMove();
    }
},1000/time);