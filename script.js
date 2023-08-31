document.addEventListener('DOMContentLoaded', function() {
  // Select the form, button, and textarea elements
  const form = document.querySelector('.main');
  const button = document.getElementById('submitButton');
  const textarea = document.getElementById('myTextarea');
  const output = document.getElementById('output');
  const copyButton = document.getElementById('copyButton');
  const darkModeButton = document.getElementById('darkModeButton');

  // Function to insert special characters into the string
  function insertword(inputString) {
    return inputString.split('').join('‎');
  }

  // Attach a submit event listener to the form
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value of the textarea
    const inputValue = textarea.value;
    const modifiedString = insertword(inputValue);
    
    // Display the value in the output element
    output.textContent = modifiedString;

    // Reset the form and button after submission
    button.disabled = false;  // Enable the button again
  });

  // Attach a click event listener to the copy button
  copyButton.addEventListener('click', function() {
    // Copy the content of the output textarea to the clipboard
    output.select();
    document.execCommand('copy');

    // Show the notification
    const notification = document.getElementById('notification');
    notification.style.display = 'block';

    // Hide the notification after a delay
    setTimeout(function() {
      notification.style.display = 'none';
    }, 2000); // Hide after 2 seconds
  });

  // Retrieve and apply dark mode preference from localStorage
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  // Attach a click event listener to the dark mode button
  darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Store the dark mode preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });
});
