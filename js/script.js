//Code pour placer les éléments de texte sur l'image
var inputhaut = document.getElementById('input_txt_haut');
var inputbas = document.getElementById('input_txt_bas');
var txth = document.getElementById('textehaut');
var txtb = document.getElementById('textebas');

inputbas.addEventListener('input', function(e) {
    e.preventDefault();
    txtb.innerHTML = inputbas.value;
});

inputhaut.addEventListener('input', function(e) {
    e.preventDefault();
    txth.innerHTML = inputhaut.value;
});

//set font color
var color = document.getElementById('color');
color.addEventListener('change', function(){
    txth.style.color = color.value;
    txtb.style.color = color.value;
});

//set font size
var fsz = document.getElementById('fsz');
var smaller = document.getElementById('smallerfont');
txth.style.fontSize = "50px";

smaller.addEventListener('click', function(){
    txth.style.fontSize = parseInt(txth.style.fontSize)-4+ "px";
    txtb.style.fontSize = parseInt(txth.style.fontSize)-4+ "px";
    fsz.value = txth.style.fontSize + "px";
});

var bigger = document.getElementById('biggerfont');
bigger.addEventListener('click', function(){
    txth.style.fontSize = parseInt(txth.style.fontSize)+4+ "px";
    txtb.style.fontSize = parseInt(txth.style.fontSize)+4+ "px";
    fsz.value = txth.style.fontSize + "px";
});

//set image width to half of container
var generatorinner = document.getElementsByClassName('generatorinner');
var image = document.getElementById('meme_genere');
var positioner = document.createElement("div");
positioner.setAttribute("id", "positioner");
var pdt = document.getElementById('plandetravail');
pdt.appendChild(positioner);
positioner.style.marginLeft = "auto";
positioner.style.marginRight = "auto";
positioner.style.position = "relative";

function imageResize(){
    if(image.complete === true){
        var innerhalf = parseInt(window.getComputedStyle(generatorinner[0]).width)/2;
        var innerheight = parseInt(window.getComputedStyle(generatorinner[0]).height);
        var compimageh = parseInt(window.getComputedStyle(image).height);
        var compimagew = parseInt(window.getComputedStyle(image).width);

        if(compimagew >= innerhalf){
            image.style.width = innerhalf+"px";
            image.style.height = "auto";
            compimageh = parseInt(window.getComputedStyle(image).height);
            compimagew = parseInt(window.getComputedStyle(image).width);

            if(compimageh >= innerheight){
                image.style.height = innerheight+"px";
                image.style.width = "auto";
                compimageh = parseInt(window.getComputedStyle(image).height);
                compimagew = parseInt(window.getComputedStyle(image).width);
            }
        }
        else if(compimageh >= innerheight){
            image.style.height = innerheight+"px";
            image.style.width = "auto";
            compimageh = parseInt(window.getComputedStyle(image).height);
            compimagew = parseInt(window.getComputedStyle(image).width);
        }
        positioner.style.width = parseInt(compimagew)+"px";
        positioner.style.height = parseInt(compimageh)+"px";
        positioner.appendChild(image);
        positioner.appendChild(txth);
        positioner.appendChild(txtb);
    }
}

if(image.complete === true){
var innerhalf = parseInt(window.getComputedStyle(generatorinner[0]).width)/2;
image.style.width = innerhalf+"px";
image.style.height = "auto";
imageResize();
}

window.onresize = function(){
    var innerhalf = parseInt(window.getComputedStyle(generatorinner[0]).width)/2;
    image.style.width = innerhalf+"px";
    image.style.height = "auto";
    imageResize();
}

var offset1 = [0,0];
var offset2 = [0,0];
var isDown1 = false;
var isDown2 = false;

var div1 = document.getElementById("textehaut");
var div2 = document.getElementById("textebas");

div1.style.left = "0px";
div1.style.top = "10px";
div2.style.left = "0px";
div2.style.top = "70%";
var thl = parseInt(div1.style.left);
var tht = parseInt(div1.style.top);
var tbl = parseInt(div2.style.left);
var tbt = parseInt(div2.style.top);

div1.addEventListener('mousedown', function(e) {
    isDown1 = true;
    offset1 = [
        div1.offsetLeft - e.clientX,
        div1.offsetTop - e.clientY
    ];
    div1.style.border = "dashed 2px grey";
    thl = parseInt(div1.style.left);
    tht = parseInt(div1.style.top);
}, true);

document.addEventListener('mouseup', function() {
    isDown1 = false;
    div1.style.border = "none";
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown1) {
        var mousePosition1 = {
            x : event.clientX,
            y : event.clientY
        };
        thl = parseInt(div1.style.left);
        tht = parseInt(div1.style.top);
        // Déplace la div avec les abscisses x & y.
        div1.style.left = (mousePosition1.x + offset1[0]) + 'px';
        div1.style.top  = (mousePosition1.y + offset1[1]) + 'px';
    }
}, true);

div2.addEventListener('mousedown', function(e) {
    isDown2 = true;
    div2.style.bottom = "";
    offset2 = [
        div2.offsetLeft - e.clientX,
        div2.offsetTop - e.clientY
    ];
    div2.style.border = "dashed 2px grey";
    tbl = parseInt(div2.style.left);
    tbt = parseInt(div2.style.top);
}, true);

document.addEventListener('mouseup', function() {
    isDown2 = false;
    div2.style.border = "none";
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown2) {
        var mousePosition2 = {
            x : event.clientX,
            y : event.clientY
        };
        tbl = parseInt(div2.style.left);
        tbt = parseInt(div2.style.top);
        // Déplace la div avec les abscisses x & y.
        div2.style.left = (mousePosition2.x + offset2[0]) + 'px';
        div2.style.top  = (mousePosition2.y + offset2[1]) + 'px';
    }
}, true);



//AJAX Pour générer un meme une fois créé
var generer = document.getElementById('generer');
var template_id = document.getElementById('template_value');

generer.addEventListener("submit", function(e){
    var base_url = 'https://lucasv.promo-24.codeur.online/raleth/OneMeme/';
    var vatxthaut = document.getElementById('textehaut');
    var vatxtbas = document.getElementById('textebas');
    console.log(thl);
    var color = document.getElementById('color').value;
    var fsz = parseInt(document.getElementById('fsz').value);
        var xhttp = new XMLHttpRequest();
        e.preventDefault();
        xhttp.open("POST", base_url+template_id.value, false);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send('txthaut='+vatxthaut.innerHTML+'&txtbas='+vatxtbas.innerHTML+'&color='+color+'&fsz='+fsz+'&thl='+thl+'&tht='+tht+'&tbl='+tbl+'&tbt='+tbt);
        generer.submit();
});