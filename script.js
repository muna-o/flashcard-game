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
        cardText.innerText = flashcards[currentIndex].term;
    } else {
        cardText.innerText = flashcards[currentIndex].definition;
    }
}

// The rest of the code you will write is apart of event listeners

// Represents buttons and cards
const submitButton = document.getElementById("add-card-btn");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const card = document.getElementById("flashcard");
const cardText = document.getElementById("card-content");

const newTerm = document.getElementById("new-term");
const newDefinition = document.getElementById("new-definition");

// Shows definition when card is clicked
card.onclick = () => {
    // Turns to opposite value allowing to switc back between front and back
    showingTerm = !showingTerm;
    displayCard();
}

// Moves to previous cards
prevButton.onclick = () => {
    // Makes sure that it shows term first when moving to next card
    showingTerm = true;

    // Decrements the index and loops back to end if it's on first card
    if (currentIndex == 0) {
        console.log("Current Index")
        currentIndex = flashcards.length - 1;
    } else {
        currentIndex--;
    }

    displayCard();
}

// Move to next cards
nextButton.onclick = () => {
    // Makes sure that it shows term first when moving to next card
    showingTerm = true;

    // Increments the index and loops back to first if it's on last card
    if (currentIndex == flashcards.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    displayCard();
}

submitButton.onclick = () => {
    // extracts values from input fields
    let termFieldValue = newTerm.value;
    let definitionFieldValue = newDefinition.value;

    // Adds object to flashcard array with the values in the input field
    flashcards.push({ term: termFieldValue, definition: definitionFieldValue });

    // makes input fields empty again 
    newTerm.value = "";
    newDefinition.value = "";
}

// This line will display the card when the page is refreshed
window.onload = displayCard;
