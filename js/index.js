const title = document.querySelector('#title')
const getButton = document.querySelector('#getPizza')
const input = document.querySelector("#inputBox")
// console.dir(getButton)

// function changeInputBoxText() {
//     title.innerText=(inputBox.value)
// }

input.addEventListener('input', changeText)

function getRandomColor() {
    let color =  "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
    return color;
}

function changeText(e) {
    const text = e.target.value
    title.innerHTML = ''
    text.split('')
        .map(function(c) {
            return addColorToChar(c)
        })
        .forEach(function(elm) {
            title.appendChild(elm)
        })
}

function addColorToChar(char) {
    const span = document.createElement('span')
    span.innerText = char
    span.style.color = getRandomColor()
    return span
}

// getButton.addEventListener('click', function(e) {
//     e.target.style.backgroundColor = getRandomColor()
//     e.target.classList.add('getpizza')
//     alert("Getting you your pizza!!")
// })