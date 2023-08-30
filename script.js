document.addEventListener('DOMContentLoaded', function() {
  // Select the form, button, and textarea elements
  const form = document.querySelector('.main');
  const button = document.getElementById('submitButton');
  const textarea = document.getElementById('myTextarea');
  const output = document.getElementById('output');

  // Attach a submit event listener to the form
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value of the textarea
    const inputValue = textarea.value;
    
    // Display the value in the output element
    output.textContent = inputValue;

    // Reset the form and button after submission
    textarea.value = '';  // Clear the input
    button.disabled = false;  // Enable the button again
  });
});
