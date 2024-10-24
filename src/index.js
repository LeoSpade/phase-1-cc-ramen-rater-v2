// index.js
const ramenMenu = document.querySelector("#ramen-menu")
const ramenDisplayField = document.querySelector("#ramen-detail")
const ratingField = document.querySelector("#rating-display")
const ramenForm = document.querySelector("#new-ramen")
const commentField = document.querySelector("#comment-display")
const newRamenNameInput = document.querySelector("#new-name")
const nameOfRestaurantInput = document.querySelector("#new-restaurant")
const newImageInput = document.querySelector("#new-image")
const newRatingInput = document.querySelector("#new-rating")
const newCommentInput = document.querySelector("#new-comment")
const submitButton  = document.querySelector("#submit-button")



// Callbacks
const handleClick = (ramen) => {
  // Add code
  // const response = await fetch("http://localhost:3000/ramens")
  // const ramen = await response.json()
  console.log(ramen)

  const featuredImage = document.querySelector(".detail-image")
  featuredImage.src = ramen.image

  const featuredRamenDish = document.querySelector(".name")
  featuredRamenDish.textContent = ramen.name
  
  const featuredRestaurantName = document.querySelector(".restaurant")
  featuredRestaurantName.textContent = ramen.restaurant

  const ratingDisplay = document.querySelector('#rating-display');
    ratingDisplay.textContent = ramen.rating

  const commentDisplay = document.querySelector('#comment-display');
    commentDisplay.textContent = ramen.comment


};


// const addDishToMenu = async (dish) => {
//   const response = await fetch("http://localhost:3000/ramens")

//   ramenMenu.append(newImageInput)
//   ramenMenu.append(newRatingInput)
//   ramenMenu.append(newCommentInput)
//   ramenMenu.append(newRamenNameInput)
//   console.log(dish)

// }


const addNewRamenToMenu = (ramen) => {
  const img = document.createElement("img")
  img.src = ramen.image
  img.addEventListener("click", () => handleClick(ramen))
  ramenMenu.append(img)
}
console.log('Img added', addNewRamenToMenu)

const addSubmitListener = () => {
  // Add code

  
  ramenForm.addEventListener("submit", (event) => {
    event.preventDefault()
  
  // ramenMenu.append(ramenForm)
  // console.log(ramenForm)
  
  const newRamen = {
    name: newRamenNameInput.value,
    restaurant: nameOfRestaurantInput.value,
    rating: newRatingInput.value,
    image: newImageInput.value,
    comment: newCommentInput.value
  
  }
  
  addNewRamenToMenu(newRamen)
  ramenForm.reset()
  console.log("New ramen added.", newRamen)
  
})
}

const displayRamens = async () => {

  const response = await fetch('http://localhost:3000/ramens');
  const ramens = await response.json()
  
  ramens.forEach(addImageToMenu)

  console.log(displayRamens)

  function addImageToMenu(ramen) {
    console.log(ramen)
    const img = document.createElement("img")
    img.src = ramen.image
    console.log(ramenMenu)
    
    img.addEventListener("click", () => handleClick(ramen))
    ramenMenu.append(img)


  };

  // data.forEach("img")
    // const img = document.createElement("img")
    // img.src = ramens.image
    // ramenMenu.append(ramenImage)
  }
  
  // Add code




const main = () => {
  displayRamens()
  addSubmitListener()
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}
main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
