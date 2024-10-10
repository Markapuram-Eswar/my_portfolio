
const scriptURL = 'https://script.google.com/macros/s/AKfycbwKua9VeKOc6KNzsjgLwTRDBLTXDZRIIU6G4McLQ4rqAf2ll-jNDXRRdOfPHcwhu4Er/exec'; // Replace with your actual script URL
const form = document.forms['portfolio_form'];
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', e => {
  e.preventDefault(); // Prevent default form submission
  submitButton.disabled = true; // Disable the submit button

  // Use fetch API to send form data
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => response.json()) // Parse JSON response
    .then(data => {
      console.log('Success!', data); // Log the success response
      form.reset(); // Reset form fields after successful submission
      alert('Submission successful!'); // Notify user of success
    })
    .catch(error => {
      console.error('Error!', error.message); // Log any errors
      alert('Submission failed. Please try again.'); // Notify user of error
    })
    .finally(() => {
      submitButton.disabled = false; // Re-enable the submit button
    });
});
// Example scroll-based navbar darkening
const header = document.querySelector(".navbar")

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
