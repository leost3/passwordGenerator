// /DOM Elements

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};
// generat event listener
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);

  resultEl.innerText = generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length
  );
});

// Generate password function
function generatePassword(upper, lower, number, symbol, length) {
  // 1. Initialize pw var
  // 2. filter out unchecked types
  // 3. loop over length call generator function for each type
  // 4. Add final pw to the pw var and return it;

  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  console.log(typesCount);
  const arr = [{ lower }, { upper }, { number }, { symbol }].filter(
    item => Object.values(item)[0]
  );

  if (!typesCount) return;

  for (var i = 0; i < length; i += typesCount) {
    arr.forEach(el => {
      generatedPassword += randomFunc[Object.keys(el)[0]]();
    });
  }
  const finalPasswowrd = generatedPassword.slice(0, length);
  return finalPasswowrd;
}

// Genertor functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
