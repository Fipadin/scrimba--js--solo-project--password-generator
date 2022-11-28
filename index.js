const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];



function generatePassword() {
    let firstPassword = document.getElementById('first-password')
    let secondPassword = document.getElementById('second-password')

    let numOne = Math.floor(Math.random() * characters.length)
    let numTwo = Math.floor(Math.random() * characters.length)
    let numThree = Math.floor(Math.random() * characters.length)
    let numFour = Math.floor(Math.random() * characters.length)
    let numFive = Math.floor(Math.random() * characters.length)
    let numSix = Math.floor(Math.random() * characters.length)
    let numSeven = Math.floor(Math.random() * characters.length)
    let numEight = Math.floor(Math.random() * characters.length)
    let numNine = Math.floor(Math.random() * characters.length)
    let numTen = Math.floor(Math.random() * characters.length)
    let numEleven = Math.floor(Math.random() * characters.length)
    let numTwelve = Math.floor(Math.random() * characters.length)

    let numberOne = Math.floor(Math.random() * characters.length)
    let numberTwo = Math.floor(Math.random() * characters.length)
    let numberThree = Math.floor(Math.random() * characters.length)
    let numberFour = Math.floor(Math.random() * characters.length)
    let numberFive = Math.floor(Math.random() * characters.length)
    let numberSix = Math.floor(Math.random() * characters.length)
    let numberSeven = Math.floor(Math.random() * characters.length)
    let numberEight = Math.floor(Math.random() * characters.length)
    let numberNine = Math.floor(Math.random() * characters.length)
    let numberTen = Math.floor(Math.random() * characters.length)
    let numberEleven = Math.floor(Math.random() * characters.length)
    let numberTwelve = Math.floor(Math.random() * characters.length)
    
    firstPassword.textContent = characters[numOne] + characters[numTwo] + characters[numThree] + characters[numFour] + characters[numFive] + characters[numSix] + characters[numSeven] + characters[numEight] + characters[numNine] + characters[numTen] + characters[numEleven] + characters[numTwelve]
    secondPassword.textContent = characters[numberOne] + characters[numberTwo] + characters[numberThree] + characters[numberFour] + characters[numberFive] + characters[numberSix] + characters[numberSeven] + characters[numberEight] + characters[numberNine] + characters[numberTen] + characters[numberEleven] + characters[numberTwelve]
}

function copy() {
    let copyText = document.getElementById('first-password')

    console.log(copyText)
    // copyText.select()
    //   // Copy the text inside the text field
    //     navigator.clipboard.writeText(copyText.value);

    //   // Alert the copied text
    //     alert("Copied the text: " + copyText.value);
}