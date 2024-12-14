const type = ["num", "sAlpha", "cAlpha", "special"];

// Generate a random number
function getNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate random alphabet
function getRandomAlphabet(data1, data2) {
  const min = data1.charCodeAt(0); // ASCII value of 'data1'
  const max = data2.charCodeAt(0); // ASCII value of 'data2'
  const randomCharCode = Math.floor(Math.random() * (max - min + 1)) + min;
  return String.fromCharCode(randomCharCode); // Convert ASCII value back to character
}

// Generate random special character
function getSpecial() {
  let symbols = `!@#$%^&*()-_=+[]{}\\|;:'",.<>?/~`;
  let tmp = getNum(0, symbols.length - 1);
  return symbols[tmp];
}

function generatePass() {
  let length = getNum(8, 16);
  let password = "";

  for (let i = 0; i < length; i++) {
    let tmpNum = getNum(0, 3);
    let charType = type[tmpNum];
    switch (charType) {
      case "num":
        password += getNum(0, 9);
        break;
      case "sAlpha":
        password += getRandomAlphabet("a", "z");
        break;
      case "cAlpha":
        password += getRandomAlphabet("A", "Z");
        break;
      case "special":
        password += getSpecial();
        break;
    }
  }
  return password;
}

document.querySelector(".gen-btn").addEventListener("click", () => {
  document.querySelector(".pass-holder").textContent = generatePass();
});

document.querySelector(".copyBtn").addEventListener("click", () => {
  let password = document.querySelector(".pass-holder").textContent.trim();
  if (password != "Password") {
    navigator.clipboard
      .writeText(password)
      .then(console.log("Copied to chlipboard"));
  }
});
