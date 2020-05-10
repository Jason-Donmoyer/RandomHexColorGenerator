// Array of possible hex values
const hexArr = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'
]

// select body to use to chacnge background color
const body = document.querySelector('body');

// select button
const changeButton = document.querySelector('button');

// select text element to be changed
const textOutput = document.querySelector('#outputText');

// event listener on button
changeButton.addEventListener('click', () => {
  changeHexVal();
});

// Function to change hex value and apply it to background color and text
const changeHexVal = () => {
  let hexVal = '#';
  let i = 0;
  while (i < 6) {
    // hexVal += hexArr[Math.floor(Math.random() * 17)];
    hexVal += hexArr[Math.floor(Math.random() * 16)];
    i++;
  }
  i = 0;
  body.style.backgroundColor = hexVal;
  textOutput.textContent = hexVal;
}

changeHexVal();