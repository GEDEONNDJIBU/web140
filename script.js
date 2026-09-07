let score = 0;

const answers = document.querySelectorAll(".answer");
const feedback = document.getElementById("feedback");
const scoreButton = document.getElementById("scoreButton");
const finalScore = document.getElementById("finalScore");

function checkAnswer(event) {

    if (event.target.dataset.correct === "true") {
        feedback.textContent = "Correct!";
        score++;
    } else {
        feedback.textContent = "Incorrect. Try again!";
    }
}

answers.forEach(function(answer) {
    answer.addEventListener("click", checkAnswer);
});

scoreButton.addEventListener("click", function() {
    finalScore.textContent = "Your Score: " + score + " out of 5";
});
