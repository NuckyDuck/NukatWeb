// login.js

// Definición de la función showMessage
function showMessage(message) {
  alert(message);
}

document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = {
    username: formData.get('username'),
    password: formData.get('password')
  };

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const result = await response.json();
      showMessage(result.message);
      // Redireccionar al usuario a la URL de redirección obtenida desde el servidor
      window.location.href = result.redirectUrl;
    } else if (response.status === 401) {
      showMessage('Usuario o contraseña incorrectos');
    } else {
      showMessage('Error en el servidor');
    }
  } catch (error) {
    showMessage('Error en el servidor');
  }
});
