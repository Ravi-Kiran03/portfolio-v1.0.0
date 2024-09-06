document.addEventListener('DOMContentLoaded', () => {
    const fallingText = document.getElementById('falling-text');
    const titles = [
        'Cloud Engineer',
        'DevOps Enthusiast',
        'Tech Lover',
        'Problem Solver',
    ];
    let currentIndex = 0;

    function changeText() {
        fallingText.style.animation = 'none'; // Reset animation to restart
        fallingText.offsetHeight; // Trigger reflow to ensure animation reset

        // Change the text content to the next title
        fallingText.textContent = titles[currentIndex];
        currentIndex = (currentIndex + 1) % titles.length;

        // Reapply the animation
        fallingText.style.animation = 'fall 0.5s ease-in-out'; // Adjust duration here
    }

    // Change text every 2 seconds
    setInterval(changeText, 2000); // Adjust interval as needed

    // Initialize with the first title
    changeText();
});
