const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

let numOfFlashcards = flashcards.length;

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    if (showingTerm) {
        card.innerText = flashcards[currentIndex].term;
    } else {
        card.innerText = flashcards[currentIndex].definition;
    }

}

// The rest of the code you will write is apart of event listeners

const submitButton = document.getElementById("add-card-btn");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const card = document.getElementById("card-content");



submitButton.onclick = () => {
    flashcards.push("something else");
    console.log(flashcards);
}

// This line will display the card when the page is refreshed
window.onload = displayCard;
