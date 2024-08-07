
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
    setTimeout(() => {
        board.style.display = "flex";
        board.style.transition = "0.5s";
        board.style.height = "480px";
    }, 800);
    
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


const line = document.getElementById("line").children;

function start(){
    setTimeout(() => {play()}, 800);
    function play(){
        playerBorad.style.display = "flex";
        board.style.display = "flex";
        mark.style.display = "block"
        playerBorad.classList.add("b");
    }
}

//판에 O, X무엇이 새겨졌는지 판단해줌
let pan1O = 0, pan2O = 0, pan3O = 0, pan4O=0, pan5O = 0, pan6O=0, pan7O = 0, pan8O = 0, pan9O = 0; 
let pan1X = 0, pan2X = 0, pan3X = 0, pan4X=0, pan5X = 0, pan6X=0, pan7X = 0, pan8X = 0, pan9X = 0;
function clickEvent(){ //클릭이벤트는 O,X둘중 한줄이 생긴다면 줄을 그어주고 넘어감.
    let O=0;
    //x가 이긴거면 0 o가 이긴거면 1
    if(pan1O && pan2O && pan3O){O++;
        line[3].classList.add("lineShoww");
        line[3].style.display = "block";
        setTimeout(() => {restart(1)}, 1500);
    }
    else if(pan4O && pan5O && pan6O){O++;
        line[4].classList.add("lineShoww");
        line[4].style.display = "block";
        setTimeout(() => {restart(1)}, 1500);
    }
    else if(pan7O && pan8O && pan9O){O++;
        line[5].classList.add("lineShoww");
        line[5].style.display = "block";
        setTimeout(() => {restart(1)}, 1500);
    }
    else if(pan1O && pan4O && pan7O){O++;
        line[0].classList.add("lineShowh");
        line[0].style.display = "block";
        setTimeout(() => {restart(1)}, 1500);
    }
    else if(pan2O && pan5O && pan8O){O++;
        line[1].classList.add("lineShowh");
        line[1].style.display = "block";
        setTimeout(() => {restart(1)}, 1500);
    }
    else if(pan3O && pan6O && pan9O){O++;
        line[2].classList.add("lineShowh");
        line[2].style.display = "block";
        setTimeout(() => {restart(1)}, 1500);
    }
    else if(pan1O && pan5O && pan9O){O++;
        line[7].classList.add("lineShowh");
        line[7].style.display = "block";
        setTimeout(() => {restart(1)}, 1500);
    }
    else if(pan3O && pan5O && pan7O){O++;
        line[6].classList.add("lineShowh");
        line[6].style.display = "block";
        setTimeout(() => {restart(1)}, 1500);
    }
    if (pan1X && pan2X && pan3X) {
        line[3].classList.add("lineShoww");
        line[3].style.display = "block";
        setTimeout(() => { restart(0); }, 1500);
    } else if (pan4X && pan5X && pan6X) {
        line[4].classList.add("lineShoww");
        line[4].style.display = "block";
        setTimeout(() => { restart(0); }, 1500);
    } else if (pan7X && pan8X && pan9X) {
        line[5].classList.add("lineShoww");
        line[5].style.display = "block";
        setTimeout(() => { restart(0); }, 1500);
    } else if (pan1X && pan4X && pan7X) {
        line[0].classList.add("lineShowh");
        line[0].style.display = "block";
        setTimeout(() => { restart(0); }, 1500);
    } else if (pan2X && pan5X && pan8X) {
        line[1].classList.add("lineShowh");
        line[1].style.display = "block";
        setTimeout(() => { restart(0); }, 1500);
    } else if (pan3X && pan6X && pan9X) {
        line[2].classList.add("lineShowh");
        line[2].style.display = "block";
        setTimeout(() => { restart(0); }, 1500);
    } else if (pan1X && pan5X && pan9X) {
        line[7].classList.add("lineShoww");
        line[7].style.display = "block";
        setTimeout(() => { restart(0); }, 1500);
    } else if (pan3X && pan6X && pan7X) {
        line[6].classList.add("lineShoww");
        line[6].style.display = "block";
        setTimeout(() => { restart(0); }, 1500);
    }
    else if(count==9 && !(O)){
        setTimeout(() => { restart(2); }, 1500);
    }
}
let panCount = 0;
let oneScore = 0;
let twoScore = 0;
function restart(winner){ //게임의 승리자화면을 보여주며 이 게임이 끝났는지 안끝났는지 확인해주는 restart
    
    for(let m = 0; m<line.length; m++){
        line[m].style.display = "none";
    }
    board.style.transition = "0.5s";
    board.style.height = "10px";
    setTimeout(() => {board.style.display = "none"}, 500);
    document.getElementById("result").style.display = "block";
    if(winner == 2){
        document.getElementById("win").innerHTML = "무승부";
        document.getElementById("winPlayer").innerHTML = ": 없음";
        document.getElementById("result_img").src = "img/mu.png";
        panCount++;
    }
    else if(winner){
        document.getElementById("win").innerHTML = "승리";
        document.getElementById("winPlayer").innerHTML = "1";
        document.getElementById("result_img").src = "img/result-O.png";
        const playerOne = document.getElementById("playerOne");
        oneScore+=1;
        panCount++;
        playerOne.innerHTML = oneScore;
    }
    else{
        document.getElementById("win").innerHTML = "승리";
        document.getElementById("winPlayer").innerHTML = "2";
        document.getElementById("result_img").src = "img/result-X.png";
        const playerTwo = document.getElementById("playerTwo");
        twoScore+=1;
        panCount++;
        playerTwo.innerHTML = twoScore;
    }
    console.log(panCount);
    const pan = document.getElementById("pan").value;
    const sun = document.getElementById("sun").value;
    let p = parseInt(pan, 10);
    let s = parseInt(sun, 10);
    
    if(s == oneScore){
        const congrats = document.getElementById("congrats");
        congrats.style.display = "flex";
        document.getElementById("win").innerHTML = "최종승리";
        document.getElementById("winPlayer").innerHTML = "1";
        document.getElementById("result_img").src = "img/result-O.png";
        setTimeout(() => {reset()}, 3000);
    }
    else if(s== twoScore){
        const congrats = document.getElementById("congrats");
        congrats.style.display = "flex";
        document.getElementById("win").innerHTML = "최종승리";
        document.getElementById("winPlayer").innerHTML = "2";
        document.getElementById("result_img").src = "img/result-X.png";
        setTimeout(() => {reset()}, 3000);
    }
    else if(p == panCount){
        if(oneScore == twoScore){
            console.log("mu");
            document.getElementById("win").innerHTML = "최종 : 무승부";
            document.getElementById("winPlayer").innerHTML = ": 없음";
            document.getElementById("result_img").src = "img/mu.png";
            setTimeout(() => {reset()}, 3000);
        }
        else if(oneScore > twoScore){
            const congrats = document.getElementById("congrats");
            congrats.style.display = "flex";
            document.getElementById("win").innerHTML = "최종승리";
            document.getElementById("winPlayer").innerHTML = "1";
            document.getElementById("result_img").src = "img/result-O.png";
            setTimeout(() => {reset()}, 3000);
        }
        else if(oneScore < twoScore){
            const congrats = document.getElementById("congrats");
            congrats.style.display = "flex";
            document.getElementById("win").innerHTML = "최종승리";
            document.getElementById("winPlayer").innerHTML = "2";
            document.getElementById("result_img").src = "img/result-X.png";
            setTimeout(() => {reset()}, 3000);
        }
    }
    else{
        setTimeout(() => {restart2()}, 3000);
    }
    
    
}
function restart2(){ //한 게임이 끝났을때 해주는 restart2
    pan1_o.src = "";
    pan2_o.src = "";
    pan3_o.src = "";
    pan4_o.src = "";
    pan5_o.src = "";
    pan6_o.src = "";
    pan7_o.src = "";
    pan8_o.src = "";
    pan9_O.src = "";
    count = 0;
    pan1O = 0, pan2O = 0, pan3O = 0, pan4O=0, pan5O = 0, pan6O=0, pan7O = 0, pan8O = 0, pan9O = 0; 
    pan1X = 0, pan2X = 0, pan3X = 0, pan4X=0, pan5X = 0, pan6X=0, pan7X = 0, pan8X = 0, pan9X = 0;
    i=1, a=1, b=1, c=1, d=1, e=1, f=1, g=1, h=1, j=1;
    // 클래스 'c'를 제거하는 코드
    pan1_o.classList.remove("c");
    pan2_o.classList.remove("c");
    pan3_o.classList.remove("c");
    pan4_o.classList.remove("c");
    pan5_o.classList.remove("c");
    pan6_o.classList.remove("c");
    pan7_o.classList.remove("c");
    pan8_o.classList.remove("c");
    pan9_O.classList.remove("c");

    board.style.display = "flex";
    board.style.transition = "0.5s";
    board.style.height = "480px";
    document.getElementById("result").style.display = "none";
}
function restart3(){//마지막게임이 끝나고 해주는 restart3 
    pan1_o.src = "";
    pan2_o.src = "";
    pan3_o.src = "";
    pan4_o.src = "";
    pan5_o.src = "";
    pan6_o.src = "";
    pan7_o.src = "";
    pan8_o.src = "";
    pan9_O.src = "";
    count = 0;
    pan1O = 0, pan2O = 0, pan3O = 0, pan4O=0, pan5O = 0, pan6O=0, pan7O = 0, pan8O = 0, pan9O = 0; 
    pan1X = 0, pan2X = 0, pan3X = 0, pan4X=0, pan5X = 0, pan6X=0, pan7X = 0, pan8X = 0, pan9X = 0;
    i=1, a=1, b=1, c=1, d=1, e=1, f=1, g=1, h=1, j=1;
    // 클래스 'c'를 제거하는 코드
    pan1_o.classList.remove("c");
    pan2_o.classList.remove("c");
    pan3_o.classList.remove("c");
    pan4_o.classList.remove("c");
    pan5_o.classList.remove("c");
    pan6_o.classList.remove("c");
    pan7_o.classList.remove("c");
    pan8_o.classList.remove("c");
    pan9_O.classList.remove("c");
}
function reset(){
    
    oneScore = 0;
    twoScore = 0;
    panCount = 0;
    board.style.display = "none";
    playerBorad.style.display = "none";
    mark.style.display = "none"
    first.style.display = "block";
    congrats.style.display = "none";
    document.getElementById("result").style.display = "none";
    first.classList.add("g");
    first.classList.remove("n");
    playerOne.innerHTML = "0";
    playerTwo.innerHTML = "0";
    restart3();
}

//보드판에 클릭하여 O, X 새기기
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
let count = 0;
    pan1.addEventListener("click", function(){
        count++;
        pan1_o.classList.add("c");
        if(i && a){
            pan1_o.src = "img/O.png";
            i=0;
            a=0;
            pan1O++;
        }
        else if(!(i) && a){
            pan1_o.src = "img/X.png";
            i=1;
            a=0;
            pan1X++;
        }
        setTimeout(() => {clickEvent()}, 500);
    });
    pan2.addEventListener("click", function(){
        count++;
        pan2_o.classList.add("c");
        if(i && b){
            pan2_o.src = "img/O.png";
            i=0;
            b=0;
            pan2O++;
        }
        else if(!(i) && b){
            pan2_o.src = "img/X.png";
            i=1;
            b=0;
            pan2X++;
        }
        setTimeout(() => {clickEvent()}, 500);
    });
    pan3.addEventListener("click", function(){
        count++;
        pan3_o.classList.add("c");
        if(i && c){
            pan3_o.src = "img/O.png";
            i=0;
            c=0;
            pan3O++;
        }
        else if(!(i) && c){
            pan3_o.src = "img/X.png";
            i=1;
            c=0;
            pan3X++;
        }
        setTimeout(() => {clickEvent()}, 500);
    });
    pan4.addEventListener("click", function(){
        count++;
        pan4_o.classList.add("c");
        if(i && d){
            pan4_o.src = "img/O.png";
            i=0;
            d=0;
            pan4O++;
        }
        else if(!(i) && d){
            pan4_o.src = "img/X.png";
            i=1;
            d=0;
            pan4X++;
        }
        setTimeout(() => {clickEvent()}, 500);
    });
    pan5.addEventListener("click", function(){
        count++;
        pan5_o.classList.add("c");
        if(i && e){
            pan5_o.src = "img/O.png";
            i=0;
            e=0;
            pan5O++;
        }
        else if(!(i) && e){
            pan5_o.src = "img/X.png";
            i=1;
            e=0;
            pan5X++;
        }
        setTimeout(() => {clickEvent()}, 500);
    });
    pan6.addEventListener("click", function(){
        count++;
        pan6_o.classList.add("c");
        if(i && f){
            pan6_o.src = "img/O.png";
            i=0;
            f=0;
            pan6O++;
        }
        else if(!(i) && f){
            pan6_o.src = "img/X.png";
            i=1;
            f=0;
            pan6X++;
        }
        setTimeout(() => {clickEvent()}, 500);
    });
    pan7.addEventListener("click", function(){
        count++;
        pan7_o.classList.add("c");
        if(i && g){
            pan7_o.src = "img/O.png";
            i=0;
            g=0;
            pan7O++;
        }
        else if(!(i) && g){
            pan7_o.src = "img/X.png";
            i=1;
            g=0;
            pan7X++;
        }
        setTimeout(() => {clickEvent()}, 500);
    });
    pan8.addEventListener("click", function(){
        count++;
        pan8_o.classList.add("c");
        if(i && h){
            pan8_o.src = "img/O.png";
            i=0;
            h=0;
            pan8O++;
        }
        else if(!(i) && h){
            pan8_o.src = "img/X.png";
            i=1;
            h=0;
            pan8X++;
        }
        setTimeout(() => {clickEvent()}, 500);
    });
    pan9.addEventListener("click", function(){
        count++;
        pan9_O.classList.add("c");
        if(i && j){
            pan9_O.src = "img/O.png";
            i=0;
            j=0;
            pan9O++;
        }
        else if(!(i) && j){
            pan9_O.src = "img/X.png";
            i=1;
            j=0;
            pan9X++;
        }
        setTimeout(() => {clickEvent()}, 500);
    });