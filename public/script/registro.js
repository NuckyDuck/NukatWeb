function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    setTimeout(() => {
      messageDiv.textContent = '';
    }, 3000);
  }
  
  document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
    const data = {
      username: formData.get('username'),
      password: formData.get('password')
    };
  
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        const result = await response.json();
        showMessage(result.message);
      } else if (response.status === 409) {
        showMessage('El nombre de usuario ya está en uso');
      } else {
        showMessage('Error en el servidor');
      }
    } catch (error) {
      showMessage('Error en el servidor');
    }
  });
  