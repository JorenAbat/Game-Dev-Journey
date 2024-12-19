// Fun Fact Visibility Toggle
document.addEventListener("DOMContentLoaded", () => {
  // Get the toggle button and the fun fact section by their IDs
  const toggleButton = document.getElementById("toggleVisibility");
  const funFactSection = document.getElementById("funFact");

  // Add an event listener for when the toggle button is clicked
  toggleButton.addEventListener("click", () => {
    // Toggle the visibility of the fun fact section
    if (funFactSection.style.visibility === "visible") {
      funFactSection.style.visibility = "hidden"; // Hide the section
    } else {
      funFactSection.style.visibility = "visible"; // Show the section
    }
  });
});

// So for some context before you go through the code, I wanted to
// challenge myself in incorporating some sort of more complicated
// javascript to my code. In line with the topic of game development
// I decided to add a little game in my website as well.
// I am familiar with most common programming language structures
// so I just had to look up certain syntax to create this.
// I tried to make it as simple as possible and just in case, I decided
// to comment everything to make it as simple to understand.

// Quiz Data
const quizData = [
  {
    question: "What is the main topic of Joren's website?",
    a: "Game development journey",
    b: "Travel adventures",
    c: "Cooking recipes",
    d: "Photography tips",
    correct: "a",
  },
  {
    question: "Which programming languages does Joren know?",
    a: "C#",
    b: "Java",
    c: "GDScript",
    d: "All of the above!",
    correct: "d",
  },
  {
    question: "What inspired Joren to pursue game development?",
    a: "A love for movies",
    b: "Interest in robotics",
    c: "Passion for anime",
    d: "A desire to create joyful experiences",
    correct: "c",
  },
  {
    question: "What is the purpose of Joren's final project website?",
    a: "To share favorite movies",
    b: "To showcase game development projects",
    c: "To provide gardening tips",
    d: "To host a cooking blog",
    correct: "b",
  },
  {
    question: "What is one of Joren's hobbies?",
    a: "Swimming",
    b: "Cooking",
    c: "Gardening",
    d: "Watching Anime",
    correct: "d",
  },
  {
    question:
      "Which of the following game engine does Joren use for 3D game development?",
    a: "GameMaker",
    b: "Unreal Engine",
    c: "Unity",
    d: "Godot",
    correct: "c",
  },
  {
    question: "What was Joren's first programming language?",
    a: "Java",
    b: "C++",
    c: "C#",
    d: "GDScript",
    correct: "a",
  },
  {
    question: "What content is included in Joren's final project website?",
    a: "Cooking recipes and tips",
    b: "Travel photos and experiences",
    c: "Game development tools and inspirations",
    d: "Fitness routines and workouts",
    correct: "c",
  },
];

// Quiz Variables
let currentQuestion = 0; // Track the current question
let score = 0; // Track the score

// Load the current quiz question and options
function loadQuiz() {
  // Get the elements to display question and answers
  const questionElement = document.getElementById("question");
  const answerA = document.getElementById("answer-a");
  const answerB = document.getElementById("answer-b");
  const answerC = document.getElementById("answer-c");
  const answerD = document.getElementById("answer-d");

  // Get the current question data
  const currentQuizData = quizData[currentQuestion];

  // Set the question and answer choices
  questionElement.textContent = currentQuizData.question;
  answerA.textContent = currentQuizData.a;
  answerB.textContent = currentQuizData.b;
  answerC.textContent = currentQuizData.c;
  answerD.textContent = currentQuizData.d;
}

// Handle the user's answer choice
function answer(choice) {
  const currentQuizData = quizData[currentQuestion];

  // Check if the answer is correct
  if (choice === currentQuizData.correct) {
    score++; // Add score if correct
  }

  // Move to the next question
  currentQuestion++;

  // If there are more questions, load the next one, otherwise show the results
  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    showResults();
  }
}

// Display the quiz results at the end
function showResults() {
  // Hide the question container and show the result container
  document.getElementById("question-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";

  // Display the user's score
  document.getElementById(
    "result"
  ).textContent = `You scored ${score} out of ${quizData.length}`;
}

// Restart the quiz
function restartQuiz() {
  currentQuestion = 0; // Reset question index
  score = 0; // Reset score
  document.getElementById("result-container").style.display = "none"; // Hide the result container
  document.getElementById("question-container").style.display = "block"; // Show the question container
  loadQuiz(); // Load the first question
}

// Initialize the quiz on page load
loadQuiz(); // Start by loading the first question

// What I would improve on:
// I would add a way to randomize the questions
// I might incorporate a way to track question progress
