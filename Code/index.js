const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

//Get result when we clicked on a button
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
  });
});

//Calculate the result
equal.addEventListener("click", () => {
  try {
    result.textContent = eval(result.textContent);
  } catch (SyntaxError) {
    result.textContent = "ERROR";
  }
});

//Clear the result
clear.addEventListener("click", () => {
  result.textContent = result.textContent.clear;
});
