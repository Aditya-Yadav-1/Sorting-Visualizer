function Bubble(){

    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="O(N^2)";
    document.getElementById("Time_Best").innerText="O(N)";

    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++){
        var already_sorted=true;
        for(var j=0;j<array_size-i-1;j++){

            div_update(divs[j],arr[j],"yellow");

            if(arr[j]>arr[j+1]){
                already_sorted=false;

                div_update(divs[j],arr[j],"red");
                div_update(divs[j+1],arr[j+1],"red");

                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;

                div_update(divs[j],arr[j],"red");
                div_update(divs[j+1],arr[j+1],"red");
            }

            div_update(divs[j],arr[j],"blue");
        }

        div_update(divs[j],arr[j],"green");
        if(already_sorted==true){
            for( let j=0;j<array_size-i-1;j++){
                div_update(divs[j],arr[j],"green");
            }
            break;
        } 
    }
    div_update(divs[0],arr[0],"green");

    enable_buttons();
}
