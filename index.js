let price;
let priceNum;
let cents;
let result;
let bottom;
let background;

document.getElementById("submit").onclick = function () {
  price = document.getElementById("priceInput");
  let priceNum = Number(price.value.trim());
  cents = priceNum * 100;
  let lastDigit = Math.floor(cents) % 10;
  let lastDigitNum = Number(lastDigit);

  let top = document.getElementById("top");
  top.style.display = "none";

  bottom = document.getElementById("bottom");
  bottom.style.display = "flex";

  console.log("Last Digit: " + lastDigitNum);
  console.log("Cents: " + cents);

  if (lastDigitNum >= 0 && lastDigitNum <= 2) {
    result = (cents - lastDigitNum) / 100;
    document.getElementById("output").textContent =
      "Zaokrúhlená cena: " + result + " EUR";
    background = document.getElementById("output");
    console.log("Zaokrúhlená cena: " + result);

    background.style.background = "rgb(245, 115, 115)";
    background.style.borderRadius = "3rem";
    background.style.padding = "0.7rem";
  } else if (lastDigitNum >= 3 && lastDigitNum <= 7) {
    result = (cents - lastDigitNum + 5) / 100;
    document.getElementById("output").textContent =
      "Zaokrúhlená cena: " + result + " EUR";
    console.log("Zaokrúhlená cena: " + result);

    background = document.getElementById("output");
    background.style.background = "rgb(245, 115, 115)";
    background.style.borderRadius = "3rem";
    background.style.padding = "0.7rem";
  } else {
    result = (cents - lastDigitNum + 10) / 100;
    document.getElementById("output").textContent =
      "Zaokrúhlená cena: " + result + " EUR";
    console.log("Zaokrúhlená cena: " + result);

    background = document.getElementById("output");
    background.style.background = "rgb(245, 115, 115)";
    background.style.borderRadius = "3rem";
    background.style.padding = "0.7rem";
  }
};

let paid;

document.getElementById("submitPaid").onclick = function () {
  paid = document.getElementById("paidInput");
  let paidNum = Number(paid.value.trim());

  bottom = document.getElementById("bottom");
  bottom.style.display = "none";

  console.log("Paid: " + paidNum);

  let change = paidNum - result;
  console.log("change " + change);
  console.log("result " + result);

  if (change < 0) {
    document.getElementById("changeOutput").textContent = "Nedostatočná suma!";

    let backgroundChange = document.getElementById("changeOutput");
    backgroundChange.style.background = "rgba(232, 42, 42, 0.82)";
    backgroundChange.style.borderRadius = "3rem";
    backgroundChange.style.padding = "0.7rem";
    backgroundChange.style.height = "auto";
  } else if (result === paidNum) {
    document.getElementById("changeOutput").textContent = "Žiaden výdavok";

    let backgroundChange = document.getElementById("changeOutput");
    backgroundChange.style.background = "rgba(69, 181, 54, 0.82)";
    backgroundChange.style.borderRadius = "3rem";
    backgroundChange.style.padding = "0.7rem";
    backgroundChange.style.height = "auto";
  } else {
    change = paidNum - result;
    document.getElementById("changeOutput").textContent =
      "Výdavok: " + change + " EUR";

    let backgroundChange = document.getElementById("changeOutput");
    backgroundChange.style.background = "rgba(69, 181, 54, 0.82)";
    backgroundChange.style.borderRadius = "3rem";
    backgroundChange.style.padding = "0.7rem";
    backgroundChange.style.height = "auto";
  }
};
