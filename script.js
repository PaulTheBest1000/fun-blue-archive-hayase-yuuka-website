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
