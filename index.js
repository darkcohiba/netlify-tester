console.log("hello")

const jokeButton = document.querySelector("#jokeButton")

const warningImg = document.querySelector("#warningImage")
warningImg.style.display = "none"

jokeButton.addEventListener("click", fetchJoke)


function fetchJoke(){
    fetch("https://v2.jokeapi.dev/joke/Any")
    .then(response => response.json())
    .then(data => function(){
        console.log(data)
        if(data.safe){
            warningImg.style.display = "none"
        }else{
            warningImg.style.display = "block"
        }
        if (data.type === "twopart"){
            renderTwoPartJoke(data.delivery, data.setup)
        }else{
            renderSinglePartJoke(data.joke)
        }
    }())
}

function renderTwoPartJoke(delivery, setup){
    const deliveryText = document.querySelector("#delivery")
    const setupText = document.querySelector("#setup")
    const jokeText = document.querySelector("#joke")
    console.log(delivery)
    jokeText.textContent = ""
    deliveryText.textContent = delivery
    setupText.textContent = setup
}

function renderSinglePartJoke(joke){
    const deliveryText = document.querySelector("#delivery")
    const setupText = document.querySelector("#setup")
    const jokeText = document.querySelector("#joke")

    jokeText.textContent = joke
    deliveryText.textContent = ""
    setupText.textContent = ""
}

