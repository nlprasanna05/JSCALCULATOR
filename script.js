const res = document.getElementById("result");

//function to calculate result
function calculate(value) {
  try {
    if (!value) {
      res.value = "Please enter a valid input!";
      setTimeout(() => {
        res.value = "";
      }, 1300);
      return;
    }
    const calculatedValue = eval(value.replace("x", "*"));
    if (isNaN(calculatedValue)) {
      res.value = "Invalid operation!";
    } else {
      res.value = calculatedValue;
    }
  } catch (error) {
    res.value = "Error!";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  }
}

function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(e) {
  e.preventDefault();

  //numbers
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }else if (e.key === "00") { 
    res.value += "00";
  }

  //operators
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }else if (e.key === "%") {  
    res.value += "%";
  }

  //decimal key
  if (e.key === ".") {
    res.value += ".";
  }

  //press enter to see result
  if (e.key === "Enter") {
    calculate(result.value);
  }

  //backspace for removing the last input
  if (e.key === "Backspace") {
    const resultInput = res.value;
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}

// Function to clear the result input
function clearAll() {
    res.value = "";
  }
  
// Function to delete the last character
function deleteLastCharacter() {
    const resultInput = res.value;
    res.value = resultInput.substring(0, resultInput.length - 1);
}