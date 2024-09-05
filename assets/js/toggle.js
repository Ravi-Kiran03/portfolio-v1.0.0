// Function to toggle the theme
function toggleTheme() {
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle');

    // Toggle between dark and light mode
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggleButton.querySelector('.bx-moon').style.display = 'none';
        themeToggleButton.querySelector('.bx-sun').style.display = 'block';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggleButton.querySelector('.bx-moon').style.display = 'block';
        themeToggleButton.querySelector('.bx-sun').style.display = 'none';
        localStorage.setItem('theme', 'dark');
    }
}

// Function to initialize the theme based on localStorage
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark mode
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle');

    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        themeToggleButton.querySelector('.bx-moon').style.display = 'none';
        themeToggleButton.querySelector('.bx-sun').style.display = 'block';
    } else {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        themeToggleButton.querySelector('.bx-moon').style.display = 'block';
        themeToggleButton.querySelector('.bx-sun').style.display = 'none';
    }
}

// Initialize the theme on page load
initializeTheme();

// Add event listener to the theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
