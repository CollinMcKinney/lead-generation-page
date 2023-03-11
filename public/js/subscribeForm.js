const subscribeForm = document.querySelector('#subscribe-form');
const subscribeResult = document.querySelector('#subscribe-result');
      
subscribeForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    // Send a POST request to the server with the email address
    const response = await fetch('/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: subscribeForm.email.value
        })
    });
    
    // Handle the response from the server
    const responseData = await response.json();
    if (responseData.success) {
        subscribeResult.textContent = 'Thank you for subscribing!';
        subscribeForm.reset();
    } else {
        subscribeResult.textContent = `Error: ${responseData.message}`;
    }
});