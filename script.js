document.getElementById("submitQuiz").addEventListener("click", function () {

    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 && q1.value === "Uruguay") {
        score++;
    }

    if (q2 && q2.value === "Brazil") {
        score++;
    }

    if (q3 && q3.value === "Miroslav Klose") {
        score++;
    }

    document.getElementById("result").textContent =
        "You scored " + score + " out of 3!";
});



