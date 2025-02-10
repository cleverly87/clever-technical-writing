function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            form.reset();
            alert('Thank you for your message!');
        } else {
            alert('Oops! There was a problem submitting your form');
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your form');
    });
}

document.getElementById('contact-form').addEventListener('submit', handleSubmit);