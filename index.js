console.log("hello")

// code for joke api down below
// const jokeButton = document.querySelector("#jokeButton")

// const warningImg = document.querySelector("#warningImage")
// warningImg.style.display = "none"

// jokeButton.addEventListener("click", fetchJoke)

// function fetchJoke(){
//     fetch("https://v2.jokeapi.dev/joke/Any")
//     .then(response => response.json())
//     .then(data => function(){
//         console.log(data)
//         if(data.safe){
//             warningImg.style.display = "none"
//         }else{
//             warningImg.style.display = "block"
//         }
//         if (data.type === "twopart"){
//             renderTwoPartJoke(data.delivery, data.setup)
//         }else{
//             renderSinglePartJoke(data.joke)
//         }
//     }())
// }

// function renderTwoPartJoke(delivery, setup){
//     const deliveryText = document.querySelector("#delivery")
//     const setupText = document.querySelector("#setup")
//     const jokeText = document.querySelector("#joke")
//     console.log(delivery)
//     jokeText.textContent = ""
//     deliveryText.textContent = delivery
//     setupText.textContent = setup
// }

// function renderSinglePartJoke(joke){
//     const deliveryText = document.querySelector("#delivery")
//     const setupText = document.querySelector("#setup")
//     const jokeText = document.querySelector("#joke")

//     jokeText.textContent = joke
//     deliveryText.textContent = ""
//     setupText.textContent = ""
// }

// console.log(CONFIG.DOG_API_KEY)
function fetchDog(){
fetch(`https://api.thedogapi.com/v1/images/search`)
.then(response => response.json())
.then(data => createDogImage(data[0]))
.catch(error => console.log(error))
}

function createDogImage(dog){
    console.log(dog)
    const newDogImage = document.createElement("div")
    const dogImage = document.createElement("img")
    const breaker = document.createElement("br")
    const dogImageContainer = document.querySelector(".dogImages")
    newDogImage.className = dog.id
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    dogImage.src = dog.url
    deleteButton.className = "deleteButtonClass"

    newDogImage.appendChild(dogImage)
    newDogImage.appendChild(breaker)
    newDogImage.appendChild(deleteButton)
    dogImageContainer.appendChild(newDogImage)
    deleteButton.addEventListener("click", function(){
        dogImageContainer.removeChild(newDogImage)
    })
}

const dogButton = document.querySelector("#dogButton")
dogButton.addEventListener("click", fetchDog)
