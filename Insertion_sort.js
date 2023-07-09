function Insertion(){
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="O(N^2)";
    document.getElementById("Time_Best").innerText="O(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size;i++){
        var key=arr[i];
        var j=i-1;
        div_update(divs[i],arr[i],"yellow");
        while(j>=0 && arr[j]>key){

            div_update(divs[j],arr[j],"red");
            div_update(divs[j+1],arr[j+1],"red");

            arr[j+1]=arr[j];

            div_update(divs[j],arr[j],"red");
            div_update(divs[j+1],arr[j+1],"red");

            div_update(divs[j],arr[j],"blue");
            if(j==(i-1))
            {
                div_update(divs[j+1],arr[j+1],"yellow");
            }
            else
            {
                div_update(divs[j+1],arr[j+1],"blue");
            }
            j--;
        }
        arr[j+1]=key;

        for(var t=0;t<i;t++)
        {
            div_update(divs[t],arr[t],"green");
        }
    }
    div_update(divs[i-1],arr[i-1],"green");
    enable_buttons();
}