let vaihetaso = document.querySelector('.vaihe')
let parsedVaiheTaso = parseFloat(vaihetaso.innerHTML)

let risut = document.querySelector('.risujen-maara')
let parsedRisut = parseFloat(risut.innerHTML)

var img = document.getElementById("kaytossa");
img.src = "";

var harmaa = document.getElementById("hiekka01")

let aineenHinta1 = document.querySelector('.ainesosan-hinta1')
let parsedAineHinta1 = parseFloat(aineenHinta1.innerHTML)

let aineenHinta2 = document.querySelector('.ainesosan-hinta2')
let parsedAineHinta2 = parseFloat(aineenHinta2.innerHTML)

let aineenHinta3 = document.querySelector('.ainesosan-hinta3')
let parsedAineHinta3 = parseFloat(aineenHinta3.innerHTML)

let aineenHinta4 = document.querySelector('.ainesosan-hinta4')
let parsedAineHinta4 = parseFloat(aineenHinta4.innerHTML)

let aineenHinta5 = document.querySelector('.ainesosan-hinta5')
let parsedAineHinta5 = parseFloat(aineenHinta5.innerHTML)

let aineenHinta6 = document.querySelector('.ainesosan-hinta6')
let parsedAineHinta6 = parseFloat(aineenHinta6.innerHTML)

let aineenHinta7 = document.querySelector('.ainesosan-hinta7')
let parsedAineHinta7 = parseFloat(aineenHinta7.innerHTML)

let kuvanVaihto = 0

let klikkauskrt = 0

var audio0 = new Audio('./musiikki/nature-music-for-video-99499.mp3');
audio0.volume = 0.4
audio0.play();

function clonkEffekti(){
    var effekti = new Audio("./musiikki/dropped-metal-tea-tin-fsc-80007.mp3")
    effekti.play();

}

function lisaaRisuja(){
    var effekti = new Audio("./musiikki/click_effect-free-sound-community-86995.mp3")
    effekti.play();
    parsedRisut += 1
    klikkauskrt += 1
    risut.innerHTML = parsedRisut
}

function osta1(){
    
    if (parsedRisut >= parsedAineHinta1){
        parsedRisut -= parsedAineHinta1
        risut.innerHTML = parsedRisut
        kuvanVaihto = 1
        
        harmaa.style.backgroundColor = "#505254";
        harmaa.style.opacity = "0.4";
        harmaa.style.pointerEvents = "none";        
        harmaa.style.cursor = "default";

        img.src = "./kuvat2/Sand.png"
    }
}

function osta2(){

    if (parsedRisut >= parsedAineHinta2){
        parsedRisut -= parsedAineHinta2
        risut.innerHTML = parsedRisut
        kuvanVaihto = 2

        harmaa = document.getElementById("kivi01");
        harmaa.style.backgroundColor = "#505254";
        harmaa.style.opacity = "0.4";
        harmaa.style.pointerEvents = "none";        
        harmaa.style.cursor = "default";

        img.src = "./kuvat2/Rocks.png"
    }
}

function osta3(){

    if (parsedRisut >= parsedAineHinta3){
        parsedRisut -= parsedAineHinta3
        risut.innerHTML = parsedRisut
        kuvanVaihto = 3

        harmaa = document.getElementById("spruce01");
        harmaa.style.backgroundColor = "#505254";
        harmaa.style.opacity = "0.4";
        harmaa.style.pointerEvents = "none";        
        harmaa.style.cursor = "default";

        img.src = "./kuvat2/Spruce.png"
    }
}

function osta4(){

    if (parsedRisut >= parsedAineHinta4){
        parsedRisut -= parsedAineHinta4
        risut.innerHTML = parsedRisut
        kuvanVaihto = 4

        harmaa = document.getElementById("cone01");
        harmaa.style.backgroundColor = "#505254";
        harmaa.style.opacity = "0.4";
        harmaa.style.pointerEvents = "none";        
        harmaa.style.cursor = "default";

        img.src = "./kuvat2/Cone.png"
    }
}

function osta5(){

    if (parsedRisut >= parsedAineHinta5){
        parsedRisut -= parsedAineHinta5
        risut.innerHTML = parsedRisut
        kuvanVaihto = 5

        harmaa = document.getElementById("vetta01");
        harmaa.style.backgroundColor = "#505254";
        harmaa.style.opacity = "0.4";
        harmaa.style.pointerEvents = "none";        
        harmaa.style.cursor = "default";

        img.src = "./kuvat2/CupofWater.png"
    }
}

function osta6(){

    if (parsedRisut >= parsedAineHinta6){
        parsedRisut -= parsedAineHinta6
        risut.innerHTML = parsedRisut
        kuvanVaihto = 6

        harmaa = document.getElementById("ruoho01");
        harmaa.style.backgroundColor = "#505254";
        harmaa.style.opacity = "0.4";
        harmaa.style.pointerEvents = "none";        
        harmaa.style.cursor = "default";

        img.src = "./kuvat2/GrassPatch.png"
    }
}

function osta7(){

    if (parsedRisut >= parsedAineHinta7){
        parsedRisut -= parsedAineHinta7
        risut.innerHTML = parsedRisut
        kuvanVaihto = 7

        harmaa = document.getElementById("kukka01");
        harmaa.style.backgroundColor = "#505254";
        harmaa.style.opacity = "0.4";
        harmaa.style.pointerEvents = "none";        
        harmaa.style.cursor = "default";

        img.src = "./kuvat2/kukanlehti.png"
    }
}

function kayta(){
    
    if (kuvanVaihto == 1){
        parsedVaiheTaso += 1
        vaihetaso.innerHTML = parsedVaiheTaso
        
        vanha01 = document.getElementById("AO-hiekka")
        vanha01.style.visibility = "hidden";
        seur01 = document.getElementById("AO-kivi")
        seur01.style.visibility = "visible";
        
        img.src = ""
    } else if (kuvanVaihto == 2){

        parsedVaiheTaso += 1
        vaihetaso.innerHTML = parsedVaiheTaso

        vanha01 = document.getElementById("AO-kivi")
        vanha01.style.visibility = "hidden";    

        seur01 = document.getElementById("AO-spruce")
        seur01.style.visibility = "visible";

        img.src = ""

    } else if (kuvanVaihto == 3){
        
        parsedVaiheTaso += 1 
        vaihetaso.innerHTML = parsedVaiheTaso

        vanha01 = document.getElementById("AO-spruce")
        vanha01.style.visibility = "hidden";

        seur01 = document.getElementById("AO-cone")
        seur01.style.visibility = "visible";

        img.src = ""        
        
    } else if (kuvanVaihto == 4){

        parsedVaiheTaso += 1 
        vaihetaso.innerHTML = parsedVaiheTaso

        vanha01 = document.getElementById("AO-cone")
        vanha01.style.visibility = "hidden";

        seur01 = document.getElementById("AO-vetta")
        seur01.style.visibility = "visible";

        img.src = ""
        
    } else if (kuvanVaihto == 5){

        parsedVaiheTaso += 1 
        vaihetaso.innerHTML = parsedVaiheTaso

        vanha01 = document.getElementById("AO-vetta")
        vanha01.style.visibility = "hidden";

        seur01 = document.getElementById("AO-ruoho")
        seur01.style.visibility = "visible";

        img.src = ""
        
    } else if (kuvanVaihto == 6){

        parsedVaiheTaso += 1 
        vaihetaso.innerHTML = parsedVaiheTaso

        vanha01 = document.getElementById("AO-ruoho")
        vanha01.style.visibility = "hidden";

        seur01 = document.getElementById("AO-kukka")
        seur01.style.visibility = "visible";

        img.src = ""
        
    } else if (kuvanVaihto == 7){

        audio0.pause();

        var audio = new Audio('./musiikki/midsummer-garden-geoffharvey-201625.mp3');
        audio.volume = 0.4
        audio.play();

        parsedVaiheTaso += 1 
        vaihetaso.innerHTML = parsedVaiheTaso

        vanha01 = document.getElementById("AO-kukka")
        vanha01.style.visibility = "hidden";
        
        img.src = ""

        otsikko01 = document.getElementById("otsikko1")
        otsikko02 = document.getElementById("otsikko2")

        otsikko01.innerHTML = "Onnittelut, pääsit pelin läpi"
        otsikko02.innerHTML = "Klikkauksia yhteensä" + " " + klikkauskrt 

        vanha05 = document.getElementById("ainesosa-1")
        vanha05.style.visibility = "hidden";
    }
}