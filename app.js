// darkModeButton = document.getElementById("dark-mode-button")

// const originalBody = document.body.style.backgroundColor;

// handleButtonClick = function () {
//     if(originalBody === originalBody){
//         console.log("button clicked")
//     // change the background colour and text
//     body = document.body
//     body.style.backgroundColor = "#091d1e"
//     body.style.color = "#aaaaaa"

//     // change the border of the title

//     title = document.getElementById("title-section")
//     title.style.border = "1px solid #aaaaaa"

//     // change the border and headings on the posts

//     posts = document.getElementsByClassName("post")
//     for (post of posts){
//         post.style.border = "1px solid #aaaaaa"
//     }

//     postHeadings = document.getElementsByTagName("h3")
//     for (heading of postHeadings){
//         heading.style.color = "#466876"
//     }
// } else {
//     originalBody = originalBody
           
// }
    
// }

// darkModeButton.addEventListener("click", handleButtonClick)


// ----------------------------------------------------------------
// Creating a fucntion called darkModeButton 
// creating a variable named element which is equal to the document.body 
// i.e. the element that contains the content for the document
// classList is a DOM property that allows for styling the css classes of an element
// classList is a read-only property that returns the names of the css classes
// toggle() is method which switches between hide() and show() for the selected elements
// so classList.toggle suuports adding and removing css classes 
function darkModeButton(){
    let element = document.body;
    element.classList.toggle("dark-mode-button")
} 

// ----------------------------------------------------------------
// Create add to favourites button

function favBtn(element){
    element.classList.toggle("addToFavourite")
}

// ----------------------------------------------------------------
// Create form for new blog post

const input = document.querySelector("#text-field");
const preview = document.querySelector("#preview");

input.addEventListener("change", event => {
  preview.innerText = event.target.value
});

