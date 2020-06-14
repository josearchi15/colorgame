let colores = [];
let numColores = 3;
let pickedColor;
let currentLevel = 1;
let cuadrados = document.querySelectorAll(".square");
let colorDisplay = document.querySelector(".color-display");
let easyBtn = document.querySelector("#easyBtn");
let mdnBtn = document.querySelector("#mediumBtn");
let hardBtn = document.querySelector("#hardBtn");
let resetBtn = document.querySelector("#resetBtn");
let resultado = document.getElementsByTagName("span")[1];
let levels = [ {level: 1, squares: 3, sClas: "square", noClass: "square1"},
               {level: 2, squares: 6, sClas: "square", noClass: "square1"},
               {level: 3, squares: 12, sClas: "square1", noClass: "square2"}
];

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

function checkSelection(){
    if(this.style.backgroundColor === pickedColor){
        resultado.innerHTML="*****CORRECTO!!!*******";
    }
    else{
        resultado.innerHTML="Intentar otra vez.";
        this.style.backgroundColor = "#232332";
    }
}

function checkLevel(status) {
        currentLevel = levels[status-1].level;
        let level = levels[status-1];
        numColores = level.squares;

        cuadrados.forEach(function(cuadro){
            cuadro.style.display = "none";
            cuadro.classList.remove(level.noClass);
            cuadro.classList.add(level.sClas);
        });
        
        for (let index = 0; index < numColores; index++) {
            cuadrados[index].style.display = "block";
        };

}

easyBtn.addEventListener("click", function(){
    this.classList.toggle("level");
    mdnBtn.classList.remove("level");
    hardBtn.classList.remove("level");
    checkLevel(1);
    playGame();
});

mdnBtn.addEventListener("click", function(){
    this.classList.toggle("level");
    easyBtn.classList.remove("level");
    hardBtn.classList.remove("level");
    checkLevel(2);
    playGame();
});

hardBtn.addEventListener("click", function(){
    this.classList.toggle("level");
    easyBtn.classList.remove("level");
    mdnBtn.classList.remove("level");
    checkLevel(3);
    playGame();
});

function playGame(){
    //codigo ejecutado
    checkLevel(currentLevel);
    resultado.innerHTML="Selecciona el color.";
    colorList(numColores);
    asignarColores();
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
}

for (let index = 0; index < cuadrados.length; index++) {
    cuadrados[index].addEventListener("click", checkSelection); 
}

resetBtn.addEventListener("click", playGame);
playGame();
