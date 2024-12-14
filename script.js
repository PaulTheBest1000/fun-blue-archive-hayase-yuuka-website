// Function to update the time
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeElement.innerHTML = `Current Time: ${hours}:${minutes}:${seconds}`;
}

// Function to update the calendar date
function updateCalendar() {
    const calendarElement = document.getElementById('calendar');
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; // months are 0-indexed
    const year = now.getFullYear();
    const dayOfWeek = now.toLocaleString('default', { weekday: 'long' });

    calendarElement.innerHTML = `Today: ${dayOfWeek}, ${month}/${day}/${year}`;
}

// Update the time and calendar every second
setInterval(updateTime, 1000);
setInterval(updateCalendar, 1000);

// Initialize the time and calendar display
updateTime();
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
