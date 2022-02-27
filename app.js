var btn = document.querySelector("#btn-translate");

var textinput= document.querySelector("#string");
console.log(textinput);

function clickEventHandler(){
    console.log("input",textinput.value);
}

btn.addEventListener('click',clickEventHandler);