const dom = {
  password: document.getElementById("password"),
  button: document.getElementById("button"),
  PasswordSettings: {
    length: document.getElementById("length"),
    uppercase: document.querySelector("#uppercase"),
    lowcase: document.querySelector("#lowcase"),
    numbers: document.querySelector("#numbers"),
    symbols: document.querySelector("#symbols"),
  },
};

// Объект для генерации пароля
const data = {
  letters: {
    down: "abcdefghijklmnopqrstuvwxyz",
    up: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  },
  numbers: "1234567890",
  symbols: '!@#$%^&*()_+-=[]{};:|?><,./"',
};

// Функция генерация рандомного чиисла
function randomNumberGenerator(maxNumber) {
  const randomNubmer = Math.round(Math.random() * maxNumber);
  return randomNubmer;
}

// Функция генерации набора символов
function passwordgenerator(symbolsss, length) {
  const maxIdx = symbolsss.length - 1;
  let password = "";

  for (let i = 0; i < length; i++) {
    const idx = randomNumberGenerator(maxIdx);
    const randomLetter = symbolsss[idx];
    password = password + randomLetter;
  }
  return password;
}

// Отслеживаем клик по кнопке
dom.button.onclick = () => {
  const passwordLength = dom.PasswordSettings.length.value;
  const uppercase = dom.PasswordSettings.uppercase;
  const numbers = dom.PasswordSettings.numbers;
  const symbols = dom.PasswordSettings.symbols;
  let string = data.letters.down;
  // Какие строки включать в пароль
  if (uppercase.querySelector("input:checked")) {
    string = string + data.letters.up;
  }
  if (numbers.querySelector("input:checked")) {
    string = string + data.numbers;
  }
  if (symbols.querySelector("input:checked")) {
    string = string + data.symbols;
  }
  console.log(string);

  const pass = passwordgenerator(string, passwordLength);
  dom.password.innerHTML = pass;
};
