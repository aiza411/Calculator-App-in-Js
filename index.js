let currentDisplay = "";
document.querySelector("#display").value = currentDisplay;

function pressed(num) {
  currentDisplay = currentDisplay + num;
  document.querySelector("#display").value = currentDisplay;
}

function clearDisplay() {
  currentDisplay = "";
  document.querySelector("#display").value = currentDisplay;
}


function calculateResult(){
    let result=eval(currentDisplay);
    document.querySelector("#display").value = result;
}