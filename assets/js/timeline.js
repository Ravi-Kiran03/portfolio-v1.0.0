document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Hide all sections
        document.querySelectorAll('.timeline-content-section').forEach(section => {
            section.style.display = 'none';
        });

        // Show the relevant section
        const sectionId = button.getAttribute('data-section') + '-section';
        document.getElementById(sectionId).style.display = 'block';
    });
});