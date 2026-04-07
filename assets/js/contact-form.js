// contact-form.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitButton = document.querySelector('input[type="submit"]');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Form validation
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/path-to-your-ajax-endpoint');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert('Message sent successfully!');
                form.reset();
            } else {
                alert('There was a problem sending your message.');
            }
        };
        
        xhr.send(`name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`);
    });
});
