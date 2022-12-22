var width = window.innerWidth;
var height = window.innerHeight;

//set control location
var control = document.getElementById("control");
control.style.top = (height-100)+"px";
control.style.left = (width-100)+"px";

//set close button location
var close = document.getElementById("close");
close.style.top = (height-100)+"px";
close.style.left = (width-100)+"px";

//close button event
close.addEventListener("click",()=>{
    close.style.display = "none";
    control.style.display = "inline";
    for(const hide of setting.children){
        hide.style.display = "inline";
        hide.style.position = "absolute"
    }
    for(const show of document.getElementById("planetsetting").children){
        show.style.display = "none";
    }
});

var plus = document.getElementById("+");
var text = document.getElementById("text");

var setting = document.getElementById("setting");

//addplanet animation
var addplanet = document.getElementById("addplanet");
addplanet.addEventListener("mouseover", () => {
    plus.style.display = "none";
    text.style.display = "block";
});
addplanet.addEventListener("mouseout", ()=> {
    plus.style.display = "block";
    text.style.display = "none";
});
//create planet
text.addEventListener("click", () => {
    CreatePlanet();
});

var creating = false;

function CreatePlanet(){
    if(!creating){
        var planet = document.createElement("div");
        planet.classList.add("manage");
        planet.id = "create";

        var input = document.createElement("input");
        input.type = "text";
        input.id = "input";
        input.classList.add("input");

        setting.append(planet);
        planet = document.getElementById("create");
        planet.append(input);
        creating = true;
        inputListener();
    }

}
//set planet name
function inputListener(){
    var input = document.getElementById("input");
    input.addEventListener("change", (event)=> {
        var planet = document.getElementById("create");
        var name = input.value;
        var p = document.createElement("p");
        var content = document.createTextNode(name);
        p.appendChild(content);
        planet.append(p);
        planet.id = name;
        input.remove();
        creating = false;
        planet.addEventListener("mouseover", () => {
            planet.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        });
        planet.addEventListener("mouseout", ()=> {
            planet.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        });
        planet.addEventListener("click", ()=>{
            ManagePlanetInformation(planet);
        });
        CreatePlanetDiv(name);
    });
}
function ManagePlanetInformation(planet){
    //hide another options
    for(const hide of setting.children){
        if(hide.id != planet.id){
            hide.style.display = "none";
        } else {
            hide.style.position = "relative";
        }
    }
    control.style.display = "none";
    close.style.display = "inline";
    for(const show of document.getElementById("planetsetting").children){
        show.style.display = "block";
    }
}
function CreatePlanetDiv(name){
    var planet = document.createElement("div");
    planet.classList.add("planet");
    planet.id = name;
    document.getElementById("space").append(planet);
}

var playing = false;
//control function
control.addEventListener("mouseover", ()=> {
    control.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
});
control.addEventListener("mouseout", ()=>{
    control.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
});
control.addEventListener("click", ()=>{
    var controlvalue = document.getElementById("controlvalue");
    if(playing) {
        playing = false;
        controlvalue.innerText = "Start";
        ShowManage();
    } else {
        playing = true;
        controlvalue.innerText = "Stop";
        HideManage();
    }
});
function HideManage(){
    setting.style.display = "none";
}
function ShowManage(){
    setting.style.display = "inline";
}
