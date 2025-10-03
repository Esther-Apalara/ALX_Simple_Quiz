// Function to check the user's answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const userChoice = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = "";
    if (userChoice) {
        userAnswer = userChoice.value;
    }

    // Get the feedback element
    const feedback = document.getElementById("feedback");

    // Compare answers and give feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Add event listener to button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);