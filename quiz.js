function checkAnswer() {
  const correctAnswer = "4";

  const value = document.querySelector('input[name="quiz"]:checked');

  const userAnswer = value ? value.value : null;

  const feedbackElement = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Correct! Well done.";
  } else {
    feedbackElement.textContent = "That's incorrect. Try again!";
  }
}
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
