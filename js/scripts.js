// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Function to play sound
    function playSound() {
        const audio = new Audio('assets/sounds/BadToTheBonesRiff.ogg');
        audio.play();
    }

    // Add event listener for keypress event
    document.addEventListener('keypress', function() {
        playSound();
    });
});
