
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function operate(num1, operation, num2) {
  switch (operation) {
    case "+":
      return add(num1, num2);
    case "-":
      return  subtract(num1, num2);
    case "*":
      return  multiply(num1, num2);
    case "/":
      return  divide(num1, num2);
  }
}
let firstNumber = null;
let currentOperator = null;

const buttons = document.querySelectorAll("#numButton");

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const buttonValue = button.textContent;
        buttonPressed(buttonValue)
    })
})


function buttonPressed(buttonValue){
    const display =  document.getElementById("display");
    if (display.value === "0"){
        display.value = buttonValue;
    }else{
        display.value+=buttonValue;
    }
}

function calculate(operator) {
  const display = document.getElementById("display");
  const currentNumber = parseFloat(display.value);

  if (firstNumber === null) {
    // If this is the first input in the calculation, set firstNumber to the currentNumber
    firstNumber = currentNumber;
  } else {
    // If this is not the first input in the calculation, perform the calculation using the current operator
    firstNumber = operate(firstNumber, currentOperator, currentNumber);
    display.value = firstNumber;
  }

  // Reset the display value to zero if an operator button is pressed
  if (operator !== "=") {
    display.value = "0";
  }

  // Set the current operator to the clicked operator
  currentOperator = operator;
  console.log(firstNumber, currentOperator, currentNumber)
}





function clearDisplay() {
  const display = document.getElementById("display");
  // Set the display value to "0"
  display.value = "0";
  // Reset the stored values and operator
  firstNumber = null;
  currentOperator = null;
}


function deleteNum() {
  const display = document.getElementById("display");
  // Get the current display value and remove the last character
  let currentDisplayValue = display.value;
  currentDisplayValue = currentDisplayValue.slice(0, -1);

  // Set the display value to the updated value, or "0" if the updated value is empty
  display.value = currentDisplayValue || "0";
}
