// script.js

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
          .then((registration) => {
              console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch((error) => {
              console.log('Service Worker registration failed:', error);
          });
  });
}

// main.js (or your script.js file)

const startOfflineTime = new Date();
startOfflineTime.setHours(12, 0, 0, 0); // Set 12:00 PM

const endOfflineTime = new Date();
endOfflineTime.setHours(18, 0, 0, 0); // Set 6:00 PM

function checkOfflinePeriod() {
    const currentTime = new Date();

    // Check if the current time is between the offline start and end time
    if (currentTime >= startOfflineTime && currentTime <= endOfflineTime) {
        // Enable offline behavior
        enableOfflineMode();
    } else {
        // Disable offline behavior
        disableOfflineMode();
    }
}

function enableOfflineMode() {
    console.log("Website is in offline mode.");
    // Optionally, show a message or activate service worker's caching behavior
}

function disableOfflineMode() {
    console.log("Website is back online.");
    // Reset to normal behavior
}

// Check if the site should be offline immediately
checkOfflinePeriod();

// Optionally, check every minute
setInterval(checkOfflinePeriod, 60000);

// Time and Calendar Functionality
function updateTimeAndCalendar() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
  document.getElementById("calendar").textContent = now.toLocaleDateString();
}

setInterval(updateTimeAndCalendar, 1000); // Update time and calendar every second

// Initialize score and question index
let currentScore = 0;
let currentQuestionIndex = 0;

// Array of questions
const questions = [
    {
        question: "Who is Hayse Yuuka?",
        correctAnswer: "Treasurer of Seminar",
        options: ["Treasurer of Seminar", "100KG", "I do not know", "Strict financial girl"]
    },
    {
        question: "What is 6 x 4?",
        correctAnswer: "24",
        options: ["108", "-7", "24", "9"]
    },
    {
        question: "Why does PaulTheBest1000 love Yuuka?",
        correctAnswer: "Because she's cute",
        options: ["Because she's a treasurer", "Because she's cute", "Because she's strict", "Because she's 100KG"]
    },
    {
        question: "Do you love Yuuka too?",
        correctAnswer: "Yes",
        options: ["No", "Undecided", "Maybe", "Yes"]
    },
];

// Get modal elements
const modal = document.getElementById("quiz-modal");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const scoreContainer = document.getElementById("score-container");
const scoreText = document.getElementById("score");

// Open the modal when the user clicks the "Start Quiz" button
openModalBtn.onclick = function() {
    resetGame();  // Reset the game when the button is clicked
    modal.style.display = "block"; // Show the modal
    loadQuestion();  // Load the first question
};

// Close the modal when the user clicks the "X" button
closeModalBtn.onclick = function() {
    modal.style.display = "none"; // Hide the modal
};

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal
    }
};

// Reset game state
function resetGame() {
    currentScore = 0;
    currentQuestionIndex = 0;
    scoreContainer.style.display = "block";  // Ensure the score container is visible
    scoreText.textContent = "Score: 0"; // Reset score display
    loadQuestion(); // Load the first question
}

// Load the current question
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById("question").textContent = currentQuestion.question;
        
        const answersContainer = document.getElementById("answers-container");
        answersContainer.innerHTML = ""; // Clear previous answers

        // Create the answer buttons
        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.classList.add("answer");
            button.textContent = option;
            button.onclick = () => checkAnswer(option);
            answersContainer.appendChild(button);
        });
    } else {
        endGame();
    }
}

// Check if the selected answer is correct
function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    
    // If the answer is correct, increment the score
    if (selectedAnswer === currentQuestion.correctAnswer) {
        currentScore++;
    }
    
    // Update the score display
    scoreText.textContent = "Score: " + currentScore;

    // Move to the next question
    currentQuestionIndex++;

    // Load the next question or end the game
    loadQuestion();
}

// End the game and display final score
function endGame() {
    scoreText.textContent = "Final Score: " + currentScore;
    setTimeout(() => {
        alert("Game Over! Your final score is: " + currentScore);
        modal.style.display = "none"; // Close the modal after the game ends
    }, 500); // Wait for a moment before showing final score
}

function showMessage() {
    alert('PAULTHEBEST1000 LOVES HAYASE YUUKA!!!'); // Show alert with the message

    // Display the GIF
    const gifContainer = document.getElementById('gif-container');
    gifContainer.style.display = 'block';  // Show the GIF container

    // Hide the GIF after 5 seconds (5000 ms)
    setTimeout(() => {
        gifContainer.style.display = 'none';  // Hide the GIF container
    }, 5000); // 5000ms = 5 seconds
}
