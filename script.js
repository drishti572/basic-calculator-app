let display = document.getElementById("display");
let historyList = document.getElementById("historyList");
let sound = document.getElementById("clickSound");

/* SOUND */
function playSound(){
    if(sound){
        sound.currentTime = 0;
        sound.play();
    }
}

/* APPEND VALUE */
function appendValue(value){
    playSound();
    display.value += value;

    display.style.boxShadow = "0 0 20px #00ffcc";
    setTimeout(()=>{
        display.style.boxShadow = "none";
    },200);
}

/* CLEAR */
function clearDisplay(){
    playSound();
    display.value="";
}

/* DELETE */
function deleteLast(){
    playSound();
    display.value = display.value.slice(0,-1);
}

/* CALCULATE */
function calculate(){
    playSound();

    try{
        if(display.value.trim() === ""){
            display.value = "Enter value";
            return;
        }

        let result = Function("return " + display.value)();
        addToHistory(display.value + " = " + result);

        display.value = result;

    }catch{
        display.value="Error";
    }
}

/* HISTORY */
function addToHistory(text){
    let li = document.createElement("li");
    li.textContent = text;

    historyList.prepend(li);
}

/* DARK MODE */
function toggleTheme(){
    document.body.classList.toggle("dark");
}
