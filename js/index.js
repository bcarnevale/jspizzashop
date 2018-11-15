const title = document.querySelector('#title')

function changeInputBoxText() {
    title.innerText=(inputBox.value)
}

const getButton = document.querySelector('#getPizza')

getButton.addEventListener('click', function() {
    alert("Getting you your pizza!!")
})