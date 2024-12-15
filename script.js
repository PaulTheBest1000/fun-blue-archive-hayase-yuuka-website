// Function to display the current time
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const time = now.toLocaleTimeString(); // Get the local time
    clockElement.textContent = `Current Time: ${time}`;
  }
  
  // Function to display a simple calendar
  function updateCalendar() {
    const calendarElement = document.getElementById('calendar');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString(undefined, options); // Local date with formatting
    calendarElement.textContent = `Today's Date: ${date}`;
  }
  
  // Update the time every second
  setInterval(updateClock, 1000);
  updateClock(); // Initialize immediately
  
  // Update the calendar (doesn't need frequent updates)
  updateCalendar();
  

function showMessage() {
    alert('I LOVE HAYASE YUUKA!!!'); // Show alert with the message

    // Display the GIF
    const gifContainer = document.getElementById('gif-container');
    gifContainer.style.display = 'block';  // Show the GIF container

    // Hide the GIF after 5 seconds (5000 ms)
    setTimeout(() => {
        gifContainer.style.display = 'none';  // Hide the GIF container
    }, 5000); // 5000ms = 5 seconds
}
