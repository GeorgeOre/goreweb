// Function to play sound
function playSound() {
    var audio = new Audio('assets/sounds/BadToTheBonesRiff.ogg');
    audio.play();
}

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to all buttons
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            playSound();
        });
    });
});
