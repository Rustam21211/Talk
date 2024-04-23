const inputEl = document.querySelector(".input");
const bodeEl = document.querySelector("body");
const containerEl = document.querySelector(".container");
const buttonEl = document.querySelector("button");
inputEl.checked = false;
updateBode();
function updateBode(){
    if(inputEl.checked){
        // станет
        bodeEl.style.background = "#25d7bf";
        containerEl.style.background = "#e60404";
        

    }else{
        bodeEl.style.background = "#ff9100";
        containerEl.style.background = "#3940ff"; 
        
    }
}
inputEl.addEventListener("input", ()=>{
    updateBode()
})