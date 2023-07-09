var speed=1000;

in_speed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=in_speed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);      
}

var delay_time=10000/(Math.floor(array_size/10)*speed);        
var c_delay=0;

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay);
    c_delay+=delay_time;
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<algo_button.length;i++)
        {
            algo_button[i].classList=[];
            algo_button[i].classList.add("butt_unselected");
            // in_gen.classList.add("butt_unselected");
            // in_size.classList.add("butt_unselected");
            // in_speed.classList.add("butt_unselected");

            algo_button[i].disabled=false;
            in_size.disabled=false;
            in_gen.disabled=false;
            in_speed.disabled=false;
        }
    },c_delay);
    c_delay+=delay_time;
}