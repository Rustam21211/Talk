const inputEl = document.querySelector(".input");
const bodeEl = document.querySelector("body");
const containerEl = document.querySelector(".container");
const button1El = document.querySelector(".qq1");
const button2El = document.querySelector(".qq2");
const button3El = document.querySelector(".qq3");
const button4El = document.querySelector(".qq4");
const button5El = document.querySelector(".qq5");
const iTA = document.querySelector(".inputTextArea");
const uTA = document.querySelector(".outputTextArea");
inputEl.checked = false;
updateBode();
function updateBode(){
    if(inputEl.checked){
        // станет
        bodeEl.style.background = "#25d7bf";
        containerEl.style.background = "#e60404";
        containerEl.style.color = "#fff";
        button1El.style.background = "#ffff33";
        button2El.style.background = "#ffff33";
        button3El.style.background = "#ffff33";
        button4El.style.background = "#ffff33";
        button5El.style.background = "#ffff33";
        button1El.style.color = "#000";
        button2El.style.color = "#000";
        button3El.style.color = "#000";
        button4El.style.color = "#000";
        button5El.style.color = "#000";
        iTA.style.background = "#333";
        iTA.style.color = "#0000ff";
        uTA.style.background = "#333";
        uTA.style.color = "#0000ff";

    }else{
        // было
        bodeEl.style.background = "#ff9100";
        containerEl.style.background = "#3940ff"; 
        containerEl.style.color = "#000000";  
        button1El.style.background = "#0d5f15";
        button2El.style.background = "#0d5f15";
        button3El.style.background = "#0d5f15";
        button4El.style.background = "#0d5f15";
        button5El.style.background = "#0d5f15";
        button1El.style.color = "#fff";
        button2El.style.color = "#fff";
        button3El.style.color = "#fff";
        button4El.style.color = "#fff";
        button5El.style.color = "#fff";
        iTA.style.background = "#fff";
        iTA.style.color = "#000";
        uTA.style.background = "#fff";
        uTA.style.color = "#000";
    }
}
inputEl.addEventListener("input", ()=>{
    updateBode()
})
