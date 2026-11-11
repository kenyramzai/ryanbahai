const form = document.getElementById('contactForm');
const statusText = document.getElementById('formStatus');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    message: document.getElementById('message').value.trim()
  };

  if (formData.message.length < 10) {
    statusText.textContent = 'Please enter a message of at least 10 characters.';
    statusText.style.color = 'aqua';
    return;
  }

  statusText.textContent = 'Sending...';
try {
    const response = await fetch('https://your-endpoint.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      statusText.textContent = 'Message sent successfully!';
      statusText.style.color = 'aqua';
      form.reset();
    } else {
      statusText.textContent = 'Something went wrong. Please try again.';
      statusText.style.color = 'aqua';
    }
  } catch (error) {
    statusText.textContent = 'Network error. Please check your connection.';
    statusText.style.color = 'aqua';
  }
});
