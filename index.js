// generateEl.addEventListener("click", function() {
//     let passwordOne = ''
//     let passwordTwo = ''
//         for (let i = 0; i < 17; i++) {
//           passwordOne += characters[randomNum()]
//           passwordTwo += characters[randomNum()]
//         }
//         pwOne.textContent = passwordOne
//         pwTwo.textContent = passwordTwo
// })

// function randomNum() {
//     let randomNumber = Math.floor(Math.random() * characters.length)
//     return randomNumber
// }

// pwOne.addEventListener("click", function () {
//     let textToCopy = pwOne.textContent
//     let textarea = document.createElement('textarea')
//     textarea.value = textToCopy

//     document.body.appendChild(textarea)
//     textarea.select()
//     document.execCommand('copy')
//     document.body.removeChild(textarea)
//     alert('Password copied!')
// })

// pwTwo.addEventListener("click", function () {
//     let textToCopy = pwTwo.textContent
//     let textarea = document.createElement('textarea')
//     textarea.value = textToCopy

//     document.body.appendChild(textarea)
//     textarea.select()
//     document.execCommand('copy')
//     document.body.removeChild(textarea)
//     alert('Password copied!')
// })

const container = document.querySelector(".container")
const title = document.querySelector(".title")
const subtitle = document.querySelector(".subtitle")
const changeTheme = document.querySelector("#theme")
const notificationEl = document.querySelector("#notification-el")


// This needs some fixing. For some reason I don't get, some elements change properties on the first click and other on the secont. Anyway, all of them are syncronized -->

changeTheme.addEventListener("click", function () {
  const bgColorDark = "var(--bg-color-dark)"
  const bgColorLight = "var(--bg-color-light)"
  const darkColor = "var(--dark)"
  const whiteColor = "var(--white)"
  const mediumGrayColor = "var(--medium-gray)"

  if (container.style.backgroundColor === bgColorDark) {
    container.style.backgroundColor = bgColorLight
    title.style.color = darkColor
    subtitle.style.color = darkColor
    changeTheme.style.backgroundColor = darkColor
  } else {
    container.style.backgroundColor = bgColorDark
    title.style.color = whiteColor
    subtitle.style.color = mediumGrayColor
    changeTheme.style.backgroundColor = whiteColor
  }
});

const generateEl = document.getElementById("generate-el")
const pwOne = document.getElementById("pw-one")
const pwTwo = document.getElementById("pw-two")

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[]},|:;<>.?/";

generateEl.addEventListener("click", function () {
  pwOne.textContent = generateRandomPassword()
  pwTwo.textContent = generateRandomPassword()
})

pwOne.addEventListener("click", copyPasswordToClipboard)
pwTwo.addEventListener("click", copyPasswordToClipboard)

// ChatGPT helped me creating 2 random passwords with just one loop -->

function generateRandomPassword() {
  let password = ""
  const passwordLength = 17
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    password += characters[randomIndex]
  }
  return password
}

// Some random way of copying text from an element provided by a stackoverflow guy and the show notification only when the password box is not empty is from chatGPT --->

function copyPasswordToClipboard(event) {
  const password = event.target.textContent
  const textarea = document.createElement("textarea")
  textarea.value = password

  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  document.body.removeChild(textarea)

  const displayOnScreen = notificationEl.style.display

  notificationEl.style.display = "block"
  setTimeout(function () {
    notificationEl.style.display = displayOnScreen
  }, 1200)
  
  setTimeout(function () {
    notificationEl.style.display = "none"
  }, 1200)
}



// FIRST TRY A COUPLE OF MONTHS AGO

// const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
//     "/"];
// let firstPasswordEl = document.getElementById('first-password-el')
// let secondPasswordEl = document.getElementById('second-password-el')


// function generatePassword() {
//     // let firstPasswordEl = document.getElementById('first-password-el')
//     // let secondPasswordEl = document.getElementById('second-password-el')

//     let numOne = Math.floor(Math.random() * characters.length)
//     let numTwo = Math.floor(Math.random() * characters.length)
//     let numThree = Math.floor(Math.random() * characters.length)
//     let numFour = Math.floor(Math.random() * characters.length)
//     let numFive = Math.floor(Math.random() * characters.length)
//     let numSix = Math.floor(Math.random() * characters.length)
//     let numSeven = Math.floor(Math.random() * characters.length)
//     let numEight = Math.floor(Math.random() * characters.length)
//     let numNine = Math.floor(Math.random() * characters.length)
//     let numTen = Math.floor(Math.random() * characters.length)
//     let numEleven = Math.floor(Math.random() * characters.length)
//     let numTwelve = Math.floor(Math.random() * characters.length)

//     let numberOne = Math.floor(Math.random() * characters.length)
//     let numberTwo = Math.floor(Math.random() * characters.length)
//     let numberThree = Math.floor(Math.random() * characters.length)
//     let numberFour = Math.floor(Math.random() * characters.length)
//     let numberFive = Math.floor(Math.random() * characters.length)
//     let numberSix = Math.floor(Math.random() * characters.length)
//     let numberSeven = Math.floor(Math.random() * characters.length)
//     let numberEight = Math.floor(Math.random() * characters.length)
//     let numberNine = Math.floor(Math.random() * characters.length)
//     let numberTen = Math.floor(Math.random() * characters.length)
//     let numberEleven = Math.floor(Math.random() * characters.length)
//     let numberTwelve = Math.floor(Math.random() * characters.length)
    
//     firstPasswordEl.textContent = characters[numOne] + characters[numTwo] + characters[numThree] + characters[numFour] + characters[numFive] + characters[numSix] + characters[numSeven] + characters[numEight] + characters[numNine] + characters[numTen] + characters[numEleven] + characters[numTwelve]
//     secondPasswordEl.textContent = characters[numberOne] + characters[numberTwo] + characters[numberThree] + characters[numberFour] + characters[numberFive] + characters[numberSix] + characters[numberSeven] + characters[numberEight] + characters[numberNine] + characters[numberTen] + characters[numberEleven] + characters[numberTwelve]
// }

// function copyOne() {
//     const textareaOne = document.createElement('textarea')
//     const passwordOne = firstPasswordEl.innerText
//     if (!passwordOne) {
//         return
//     }
//     textareaOne.value = passwordOne
//     document.body.appendChild(textareaOne)
//     textareaOne.select()
//     document.execCommand('copy')
//     textareaOne.remove()
//     alert('Password copied to clipboard')
// }

// function copyTwo() {
//     const textareaTwo = document.createElement('textarea')
//     const passwordTwo = secondPasswordEl.innerText
//     if (!passwordTwo) {
//         return
//     }
//     textareaTwo.value = passwordTwo
//     document.body.appendChild(textareaTwo)
//     textareaTwo.select()
//     document.execCommand('copy')
//     textareaTwo.remove()
//     alert('Password copied to clipboard')
// }