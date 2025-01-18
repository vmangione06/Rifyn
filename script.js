// Handle solar proposal form submission
document.getElementById('solar-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const bill = document.getElementById('bill-upload').files[0];
    const isHomeowner = document.getElementById('home-owner').checked;

    if (!bill || !isHomeowner) {
        alert('Please upload your bill and confirm home ownership.');
        return;
    }

    // Simulate proposal generation (In production, this would be API-driven)
    document.getElementById('proposal-form').style.display = 'none';
    document.getElementById('proposal-result').style.display = 'block';
});

// Handle contact form submission (basic alert for demo)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent. We will get back to you soon.');
});
