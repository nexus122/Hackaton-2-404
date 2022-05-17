document.onmousemove = function(event){

    var x = event.clientX;
    var y = event.clientY;

    var img = document.querySelector(".img");
    var rock1 = document.querySelector(".rock1");
    var rock2 = document.querySelector(".rock2");
    var rock3 = document.querySelector(".rock3");

    img.style.left = 104+ x/100 + "px";
    img.style.top = 10+y/100 + "px";

    rock1.style.left = 10+y/1000+ "%";
    rock1.style.top = 10+x/1000 + "%";

    rock2.style.left = 10+x/1000 + "%";
    rock2.style.top = 80+y/1000 + "%";
    
    rock3.style.left = 80+x/1000 + "%";
    rock3.style.top = 10+y/1000 + "%";
}