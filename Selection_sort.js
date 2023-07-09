function Selection_sort()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="O(N^2)";
    document.getElementById("Time_Best").innerText="O(N^2)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],arr[i],"red");//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],arr[j],"yellow");//Color update

            if(arr[j]<arr[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],arr[index_min],"blue");//Color update
                }
                index_min=j;
                div_update(divs[index_min],arr[index_min],"red");//Color update
            }
            else
            {
                div_update(divs[j],arr[j],"blue");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=arr[index_min];
            arr[index_min]=arr[i];
            arr[i]=temp;

            div_update(divs[index_min],arr[index_min],"red");//Height update
            div_update(divs[i],arr[i],"red");//Height update
            div_update(divs[index_min],arr[index_min],"blue");//Color update
        }
        div_update(divs[i],arr[i],"green");//Color update
    }
    div_update(divs[i],arr[i],"green");//Color update

    enable_buttons();
}