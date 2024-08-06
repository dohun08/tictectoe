
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
function start(){
    setTimeout(() => {play()}, 800);
    function play(){
        playerBorad.style.display = "flex";
        board.style.display = "flex";
        mark.style.display = "block"
        playerBorad.classList.add("b");
    }
    

   
}