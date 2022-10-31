const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
  });
});

equal.addEventListener("click", () => {
    try {
        result.textContent = eval(result.textContent);
    }
    catch (SyntaxError) {
        result.textContent = "ERROR"
    }
});

clear.addEventListener("click", () => {
  result.textContent = result.textContent.clear;
});


