var in_size=document.getElementById("a_size"),array_size=in_size.value;
var in_speed=document.getElementById("a_speed");
var in_gen=document.getElementById("a_generate");

var algo_button=document.querySelectorAll(".algos button");

var arr=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
// cont.style="flex-direction:row";

in_gen.addEventListener("click", generate_array);
in_size.addEventListener("input", update_array_size);

function generate_array(){
    cont.innerHTML="";

    for(var i=0;i<array_size;i++){
        // arr[i]=Math.floor(Math.random()*100) +1;
        arr[i]=Math.floor(Math.random() * 0.5*(in_size.max - in_size.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style="margin:0% " + margin_size +"%; background-color:blue; width:" + (100/array_size-(2*margin_size)) +"%; height:" + arr[i] +"%;";
    }
}

function update_array_size(){
    array_size=in_size.value;
    generate_array();
}

window.onload=update_array_size();

for(var i=0;i<algo_button.length;i++){
    algo_button[i].addEventListener("click",runalgo);
}

function disable_btn(){
    for(var i=0;i<algo_button.length;i++){
        algo_button[i].classList=[]; // isko hatake dekhenge
        algo_button[i].classList.add("butt_locked");
        // in_gen.classList.add("butt_locked");
        // in_size.classList.add("butt_locked");
        // in_speed.classList.add("butt_locked");

        algo_button[i].disabled=true;
        in_size.disabled=true;
        in_speed.disabled=true;
        in_gen.disabled=true;
    }
}

function runalgo(){
    disable_btn();
    this.classList.add("butt_selected");
    if(this.innerHTML=="Bubble"){
        Bubble();
    }
    else if(this.innerHTML=="Selection"){
        Selection_sort();
    }
    else if(this.innerHTML=="Insertion"){
        Insertion();
    }
    else if(this.innerHTML=="Merge"){
        Merge();
    }
    else if(this.innerHTML=="Quick"){
        Quick();
    }
}

