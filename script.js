document.addEventListener('DOMContentLoaded', function() {
  // Select the form, button, and textarea elements
  const form = document.querySelector('.main');
  const button = document.getElementById('submitButton');
  const textarea = document.getElementById('myTextarea');
  const output = document.getElementById('output');
  const copyButton = document.getElementById('copyButton');
  const darkModeButton = document.getElementById('darkModeButton');

  // ... (your existing code)

  // Attach a click event listener to the dark mode button
  darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Update button style based on dark mode state
    button.classList.toggle('dark-mode-button');

    // Store the dark mode preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });

  // Retrieve and apply dark mode preference from localStorage
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'enabled') {
    document.body.classList.add('dark-mode');
    button.classList.add('dark-mode-button'); // Add this line
  }
});
