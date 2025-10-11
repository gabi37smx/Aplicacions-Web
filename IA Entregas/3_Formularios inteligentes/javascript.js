document.getElementById('registroForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let valido = true;

  // Limpiar errores previos
  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  // Expresiones regulares generadas por IA
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const regexNombre = /^[a-zA-ZÀ-ÿ\s]{2,50}$/;

  // Validar nombre
  const nombre = document.getElementById('nombre').value.trim();
  if (!nombre || !regexNombre.test(nombre)) {
    document.getElementById('error-nombre').textContent = 'Nombre inválido (solo letras y espacios, 2-50 caracteres).';
    valido = false;
  }

  // Validar email
  const email = document.getElementById('email').value.trim();
  if (!email || !regexEmail.test(email)) {
    document.getElementById('error-email').textContent = 'Correo electrónico inválido.';
    valido = false;
  }

  // Validar contraseña
  const password = document.getElementById('password').value;
  if (!password || !regexPassword.test(password)) {
    document.getElementById('error-password').textContent = 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.';
    valido = false;
  }

  // Confirmar contraseña
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (password !== confirmPassword) {
    document.getElementById('error-confirmPassword').textContent = 'Las contraseñas no coinciden.';
    valido = false;
  }

  // Validar fecha de nacimiento (opcional, pero si se ingresa, debe ser válida)
  const fechaNac = document.getElementById('fechaNacimiento').value;
  if (fechaNac) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNac);
    if (nacimiento >= hoy || nacimiento.getFullYear() < 1900) {
      document.getElementById('error-fechaNacimiento').textContent = 'Fecha de nacimiento inválida.';
      valido = false;
    }
  }

  // Validar país
  const pais = document.getElementById('pais').value;
  if (!pais) {
    document.getElementById('error-pais').textContent = 'Selecciona tu país.';
    valido = false;
  }

  // Validar términos
  if (!document.getElementById('terminos').checked) {
    document.getElementById('error-terminos').textContent = 'Debes aceptar los términos y condiciones.';
    valido = false;
  }

  if (valido) {
    alert('¡Registro exitoso!');
    // Aquí podrías enviar el formulario a un servidor
  }
});