/********PLAY WITH REINDEERS********/
var reindeers = document.getElementsByClassName('reindeer');

Array.prototype.forEach.call(reindeers, function(el) {
    el.style.position= "absolute";
    el.style.display = "block";
    el.style.width="20%";
    el.style.left= "20%";
    el.style.bottom="30%";
    el.style.transform="rotate(20deg)";
    el.style.zIndex="50";
});

var rodolphe = document.getElementById('rodolphe');
var eclair = document.getElementById('eclair');
var tornade = document.getElementById('tornade');
rodolphe.style.display ="none";
eclair.style.display="none";
tornade.style.display="none";
var randpos;
var randrein;

setInterval(function(){
    randrein = Math.floor(Math.random() * 3) + 1;
    randpos = Math.floor(Math.random() * 9) + 1;
    rodolphe.style.display ="none";
    eclair.style.display="none";
    tornade.style.display="none";
    switch (randrein) {
        //rodolphe
        case 1:
            thisrein = rodolphe;
            thisrein.style.display="block";
        break;
        //eclair
        case 2:
            thisrein = eclair;
            thisrein.style.display="block";
        break;
        //tornade
        case 3:
            thisrein = tornade;
            thisrein.style.display="block";
        break;
    }
    switch (randpos) {
        case 1:
        thisrein.style.width = "2.2%";
        thisrein.style.transform ="rotate(-20deg)";
        thisrein.style.bottom = "71%";
        thisrein.style.left = "33.3%";
        thisrein.style.zIndex="44";
        break;

        case 2:
            thisrein.style.width = "2.2%";
            thisrein.style.transform ="rotate(-20deg)";
            thisrein.style.bottom = "71%";
            thisrein.style.left = "47.8%";
            thisrein.style.zIndex="44";
        break;

        case 3:
            thisrein.style.width = "2.2%";
            thisrein.style.transform ="rotate(-20deg)";
            thisrein.style.bottom = "71%";
            thisrein.style.left = "62.1%";
            thisrein.style.zIndex="44";
        break;

        case 4:
            thisrein.style.width = "2.2%";
            thisrein.style.transform ="rotate(-20deg)";
            thisrein.style.bottom = "69%";
            thisrein.style.left = "40.5%";
            thisrein.style.zIndex="44";
        break;

        case 5:
            thisrein.style.width = "2.2%";
            thisrein.style.transform ="rotate(-20deg)";
            thisrein.style.bottom = "69%";
            thisrein.style.left = "54.8%";
            thisrein.style.zIndex="44";
        break;

        case 6:
            thisrein.style.width = "9%";
            thisrein.style.transform ="rotate(-40deg)";
            thisrein.style.bottom = "29%";
            thisrein.style.left = "29%";
            thisrein.style.zIndex="39";
        break;

        case 7:
            thisrein.style.width = "9%";
            thisrein.style.transform ="rotate(40deg)";
            thisrein.style.bottom = "29%";
            thisrein.style.left = "62%";
            thisrein.style.zIndex="39";
        break;

        case 8:
            thisrein.style.width = "18%";
            thisrein.style.transform ="rotate(40deg)";
            thisrein.style.bottom = "15%";
            thisrein.style.left = "-5%";
            thisrein.style.zIndex="49";
        break;

        case 9:
            thisrein.style.width = "18%";
            thisrein.style.transform ="rotate(-40deg)";
            thisrein.style.bottom = "15%";
            thisrein.style.left = "87%";
            thisrein.style.zIndex="49";
        break;
    }
    console.log(thisrein);
    thisrein.style.zIndex= "99";
    thisrein.addEventListener('mouseover', function(){ 
        console.log(thisrein);
        thisrein.style.value = "check";
        if (thisrein.style.value == "check") {
            console.log("oui");
        }
    });
    
}, 2000);


