const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('https://your-backend-url.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // formData es el estado que contiene los datos del formulario
    })
    .then(response => response.json())
    .then(data => {
      console.log('Email sent successfully:', data);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
  };
  