
function submit(){
    const pan = document.getElementById("pan").value;
    const sun = document.getElementById("sun").value;
    let p = parseInt(pan, 10);
    let s = parseInt(sun, 10);
    let first = document.getElementById("first");
    first.classList.add("n");
    first.classList.remove("g");

    pa.innerHTML = p;
    su.innerHTML = s;
    setTimeout(() => {first.style.display = "none"}, 500);
    start()
}

const playerBorad = document.getElementById("playerBorad");
const board = document.getElementById("board");
const mark = document.getElementById("mark");

const pa = document.getElementById("p");
const su = document.getElementById("s");

const pan1_o = document.getElementById("pan1-o");
const pan2_o = document.getElementById("pan2-o");
const pan3_o = document.getElementById("pan3-o");
const pan4_o = document.getElementById("pan4-o");
const pan5_o = document.getElementById("pan5-o");
const pan6_o = document.getElementById("pan6-o");
const pan7_o = document.getElementById("pan7-o");
const pan8_o = document.getElementById("pan8-o");
const pan9_O = document.getElementById("pan9-o");


const pan1 = document.getElementById("pan1");
const pan2 = document.getElementById("pan2");
const pan3 = document.getElementById("pan3");
const pan4 = document.getElementById("pan4");
const pan5 = document.getElementById("pan5");
const pan6 = document.getElementById("pan6");
const pan7 = document.getElementById("pan7");
const pan8 = document.getElementById("pan8");
const pan9 = document.getElementById("pan9");

function start(){
    setTimeout(() => {play()}, 800);
    function play(){
        playerBorad.style.display = "flex";
        board.style.display = "flex";
        mark.style.display = "block"
        playerBorad.classList.add("b");
    }
    
}

//보드판에 O, X 새기기
let i=1;
let a=1;
let b=1;
let c=1;
let d=1;
let e=1;
let f=1;
let g=1;
let h=1;
let j=1;
    pan1.addEventListener("click", function(){
        if(i && a){
            pan1_o.src = "img/O.png";
            i=0;
            a=0;
        }
        else if(!(i) && a){
            pan1_o.src = "img/X.png";
            i=1;
            a=0;
        }
    });
    pan2.addEventListener("click", function(){
        if(i && b){
            pan2_o.src = "img/O.png";
            i=0;
            b=0;
        }
        else if(!(i) && b){
            pan2_o.src = "img/X.png";
            i=1;
            b=0;
        }
    });
    pan3.addEventListener("click", function(){
        if(i && c){
            pan3_o.src = "img/O.png";
            i=0;
            c=0;
        }
        else if(!(i) && c){
            pan3_o.src = "img/X.png";
            i=1;
            c=0;
        }
    });
    pan4.addEventListener("click", function(){
        if(i && d){
            pan4_o.src = "img/O.png";
            i=0;
            d=0;
        }
        else if(!(i) && d){
            pan4_o.src = "img/X.png";
            i=1;
            d=0;
        }
    });
    pan5.addEventListener("click", function(){
        if(i && e){
            pan5_o.src = "img/O.png";
            i=0;
            e=0;
        }
        else if(!(i) && e){
            pan5_o.src = "img/X.png";
            i=1;
            e=0;
        }
    });
    pan6.addEventListener("click", function(){
        if(i && f){
            pan6_o.src = "img/O.png";
            i=0;
            f=0;
        }
        else if(!(i) && f){
            pan6_o.src = "img/X.png";
            i=1;
            f=0;
        }
    });
    pan7.addEventListener("click", function(){
        if(i && g){
            pan7_o.src = "img/O.png";
            i=0;
            g=0;
        }
        else if(!(i) && g){
            pan7_o.src = "img/X.png";
            i=1;
            g=0;
        }
    });
    pan8.addEventListener("click", function(){
        if(i && h){
            pan8_o.src = "img/O.png";
            i=0;
            h=0;
        }
        else if(!(i) && h){
            pan8_o.src = "img/X.png";
            i=1;
            h=0;
        }
    });
    pan9.addEventListener("click", function(){
        if(i && j){
            pan9_O.src = "img/O.png";
            i=0;
            j=0;
        }
        else if(!(i) && j){
            pan9_O.src = "img/X.png";
            i=1;
            j=0;
        }
    });