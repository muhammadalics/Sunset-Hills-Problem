function firstRectangleColor(){
    document.getElementById("b1").style.background = "yellow";

}


firstRectangleColor();

function build_size(idval, size){
    let target_build = idval.slice(-2,idval.length);   
    console.log(target_build);
    console.log(document.getElementById(target_build).style.height);
    document.getElementById(target_build).style.height = size * 50+ "px";
    
    //console.log(size * 500);

}