document.addEventListener('DOMContentLoaded', function() {
  // Select the form, button, and textarea elements
  const form = document.querySelector('.main');
  const button = document.getElementById('submitButton');
  const textarea = document.getElementById('myTextarea');
  const output = document.getElementById('output');
  
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
});
