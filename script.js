var btn = document.querySelector("#nav h3");
var black = document.querySelector("#black");


var flag = 0;
btn.addEventListener("click",function(){
    
    black.style.top = 0;
})
document.querySelector("#black h5").addEventListener("click",function(){
    black.style.top = "-100%";
})
