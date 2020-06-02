let colores = [];
let numColores = 6;
let pickedColor;
let cuadrados = document.querySelectorAll(".square");
let colorDisplay = document.querySelector(".color-display");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let resetBtn = document.querySelector("#resetBtn");
let resultado = document.getElementsByTagName("span")[1];

function genColor(){
    let r = Math.floor(Math.random() * 256);  
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb("+r+ ", "+g+ ", "+b+ ")";

}

function colorList(size){
    for (let index = 0; index < size; index++) {
        colores[index] = genColor();
    }
}

function asignarColores(){
    for (let index = 0; index < numColores; index++) {
        cuadrados[index].style.backgroundColor = colores[index];
    }
}

function pickColor(){
    let pn = Math.floor(Math.random() * numColores)
    return colores[pn];
}

for (let index = 0; index < cuadrados.length; index++) {
    cuadrados[index].addEventListener("click", checkSelection);
    
}

function checkSelection(){
    if(this.style.backgroundColor === pickedColor){
        resultado.innerHTML="*****CORRECTO!!!*******";
    }
    else{
        resultado.innerHTML="Intentar otra vez.";
        this.style.backgroundColor = "#232332";
    }
}

function level(status) {
    cuadrados[3].style.display = status;
    cuadrados[4].style.display = status;
    cuadrados[5].style.display = status;
}

easyBtn.addEventListener("click", function(){
    this.classList.toggle("level");
    hardBtn.classList.toggle("level");
    level("none");
    numColores = 3;
    playGame();
});

hardBtn.addEventListener("click", function(){
    this.classList.toggle("level");
    easyBtn.classList.toggle("level");
    level("block")
    numColores = 6;
    playGame();
});

function playGame(){
    //codigo ejecutado
    resultado.innerHTML="Selecciona el color.";
    colorList(numColores);
    asignarColores();
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
}

resetBtn.addEventListener("click", playGame);
playGame();