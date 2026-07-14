var display = document.getElementById("display");

function append(value) 
 {
  var lastChar = display.value.slice(-1);
  var operators = ["+", "-", "*", "/"];


  if (operators.includes(value) && operators.includes(lastChar)) {
    return;
  }

  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function delChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
