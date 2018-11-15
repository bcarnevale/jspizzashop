const title = document.querySelector('#title')
const makeButton = document.querySelector('#makePizza')
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

makeButton.addEventListener('click', function(e) {
    var text = document.getElementById('inputToppings').value;     
    var node = document.createElement("li");    
    var textNode = document.createTextNode(text);    
    node.appendChild(textNode);     
    document.getElementById('toppings').appendChild(node);
    document.getElementById('inputToppings').value = ''
    // e.target.classList.add('makepizza')
    // alert("Making you your pizza!!")
})



