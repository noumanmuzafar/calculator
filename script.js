let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button"); // if we use only "querySelector", then only the first button gets stored in the buttons variable. This "buttons" variable strors the node list.

let string = " "; // Here we store the answer
let arrayButtons = Array.from(buttons); // This is the array of all the buttons on which we can run for loop

arrayButtons.forEach((value) => {
  // "forEach()" changes the array element into the individual element and stores all those variables into "value" variable

  value.addEventListener("click", (e) => {
    // console.log(e)... Here "e" is an event and it will print a particular event each time we click on any button. And if we do .... console.log(e.target).... and click on some button, this statement will give us the name of the button on the console as "<button>2</button>". But here we need to operate on the numbers on which we click, we need "innerHTML", hence we write....console.log(e.target.innerHTML)....to get the numbers only.

    // i.e., whenever we "click" on some button, this (e) gets passed and that button gets added in the string
    if (e.target.innerHTML == "=") {
      // i.e., if we pass "=" sign in "e", means we clicked "=" then evalute whatever is in the string as:-

      string = eval(string); // "eval" is an in-built JS function used for evalution
      input.value = string;
    } // It means that the result which is in the string gets displayed on the inputBox
    else if (e.target.innerHTML == "AC") {
      string = 0;
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML; // It means that if we click any button other than "=", then such buttons gets added in the string. Inother words the "+" means that we can add more than one number on the display.
      input.value = string; // Here those clicked buttons will be displayed on the inputBox.
    }
  });
});
