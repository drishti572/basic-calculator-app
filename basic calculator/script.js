let display = document.getElementById("display");
let historyList = document.getElementById("historyList");
let sound = document.getElementById("clickSound");

function playSound(){
    sound.currentTime = 0;
    sound.play();
}

function appendValue(value){
    playSound();
    display.value += value;

    display.style.boxShadow = "0 0 20px #00ffcc";
    setTimeout(()=>{
        display.style.boxShadow = "none";
    },200);
}

function clearDisplay(){
    playSound();
    display.value="";
}

function deleteLast(){
    playSound();
    display.value = display.value.slice(0,-1);
}

function calculate(){
    playSound();
    try{
        let result = eval(display.value);
        addToHistory(display.value + " = " + result);
        display.value = result;
    }catch{
        display.value="Error";
    }
}

function addToHistory(text){
    let li = document.createElement("li");
    li.textContent = text;
    historyList.appendChild(li);
}

/* Dark Mode */
function toggleTheme(){
    document.body.classList.toggle("dark");
}