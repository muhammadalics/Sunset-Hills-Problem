function firstRectangleColor(){
    document.getElementById("b0").style.background = "yellow";

}

var buildings = ["b0", "b1", "b2", "b3", "b4"];

firstRectangleColor();

function build_size(idval, size){
    let target_build = idval.slice(-2,idval.length);   
    console.log(target_build);
    console.log(document.getElementById(target_build).style.height);
    document.getElementById(target_build).style.height = size * 50 + "px";
    
    let arr = getBuildingHeights(buildings);
    console.log(arr);
    setBuildingColor(arr);

}

function getBuildingHeights(buildings){
    let arr = [];
    buildings.forEach(element => {
        arr.push(parseInt(document.getElementById("h_"+element).value))       
        
    });
    return arr;
}

function setBuildingColor(arr){
    let max_index=0;
    let max_height=0;
    for(i=0;i<arr.length; i++){
         if (arr[i] > max_height){
             max_height = arr[i];
             max_index = i;
             console.log("b"+ i);
             document.getElementById("b"+ i).style.background = "yellow"
             console.log(i);
         }
         else{
            document.getElementById("b"+ i).style.background = "grey"
         }


         console.log('max height is: ');
         console.log(max_height);
    }

}