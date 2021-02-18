function firstRectangleColor(){
    document.getElementById("b0").style.background = "yellow";
}

var buildings = ["b0", "b1", "b2", "b3", "b4"];

firstRectangleColor();

function build_size(idval, size){
    let target_build = idval.slice(-2,idval.length);   
    console.log(target_build);
    console.log(document.getElementById(target_build).style.height);
  
    el = document.getElementById(target_build);
   
    const myAnimation = anime({
        targets: el,
        easing: 'linear',
        height: {
            duration: 300,
            value: size * 50 + "px"
          }
   });

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
            var el =  document.getElementById("b"+ i);
            animateColor(el, 'rgb(255,255,0)');             
             console.log(i);
         }
         else{
            var el =  document.getElementById("b"+ i);
            animateColor(el, 'rgb(128,128,128)');
         }
         console.log('max height is: ');
         console.log(max_height);
    }
}

function animateColor(target, color){
    var changecolor = anime({
        targets: target,
        background: color,
        easing: 'easeInQuad'
    });
}

function getFirstRectangleColor(){
    var color = document.getElementById("b0").style.background;
    return color;
}


