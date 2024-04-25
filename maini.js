const display  = document.getElementById("display");

function appendToDisplay(value){
     display.value += value
}

function  ClearDisplay(){
    display.value = " "
}

function calculate(){
    if(display.value === "")
    {
    alert("Enter some values")
}
    let result = eval(display.value)
    display.value = result;

}