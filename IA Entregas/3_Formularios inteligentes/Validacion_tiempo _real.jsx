// RegistroForm.jsx
import { useState } from 'react';

const RegistroForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
    fechaNacimiento: '',
    genero: '',
    pais: '',
    terminos: false
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Expresiones regulares
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const regexNombre = /^[a-zA-ZÀ-ÿ\s]{2,50}$/;

  const validateField = (name, value) => {
    switch (name) {
      case 'nombre':
        return value.trim().length >= 2 && regexNombre.test(value.trim());
      case 'email':
        return regexEmail.test(value.trim());
      case 'password':
        return regexPassword.test(value);
      case 'confirmPassword':
        return value === formData.password;
      case 'fechaNacimiento':
        if (!value) return true;
        const date = new Date(value);
        const today = new Date();
        return date < today && date.getFullYear() >= 1900;
      case 'pais':
        return value !== '';
      case 'terminos':
        return value;
      default:
        return true;
    }
  };

  const getErrorMessage = (name) => {
    const messages = {
      nombre: 'Nombre inválido (solo letras y espacios, 2-50 caracteres).',
      email: 'Correo electrónico inválido.',
      password: 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.',
      confirmPassword: 'Las contraseñas no coinciden.',
      fechaNacimiento: 'Fecha de nacimiento inválida.',
      pais: 'Selecciona tu país.',
      terminos: 'Debes aceptar los términos y condiciones.'
    };
    return messages[name] || '';
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData({ ...formData, [name]: val });

    if (touched[name]) {
      const isValid = validateField(name, val);
      setErrors(prev => isValid ? { ...prev, [name]: '' } : { ...prev, [name]: getErrorMessage(name) });
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setTouched(prev => ({ ...prev, [name]: true }));

    const isValid = validateField(name, val);
    setErrors(prev => isValid ? { ...prev, [name]: '' } : { ...prev, [name]: getErrorMessage(name) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar todos los campos
    const newErrors = {};
    let isValidForm = true;

    Object.keys(formData).forEach(key => {
      setTouched(prev => ({ ...prev, [key]: true }));
      const valid = validateField(key, formData[key]);
      if (!valid) {
        newErrors[key] = getErrorMessage(key);
        isValidForm = false;
      }
    });

    setErrors(newErrors);

    if (isValidForm) {
      alert('¡Registro exitoso!');
      // Enviar formData al backend
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h2>Registro de Usuario</h2>

      <div style={{ marginBottom: '15px' }}>
        <label><strong>Nombre completo *</strong></label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
        {errors.nombre && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.nombre}</div>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label><strong>Correo electrónico *</strong></label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
        {errors.email && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.email}</div>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label><strong>Contraseña *</strong></label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
        {errors.password && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.password}</div>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label><strong>Confirmar contraseña *</strong></label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
        {errors.confirmPassword && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.confirmPassword}</div>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label><strong>Fecha de nacimiento</strong></label>
        <input
          type="date"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
        {errors.fechaNacimiento && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.fechaNacimiento}</div>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label><strong>Género</strong></label>
        <select
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        >
          <option value="">Selecciona...</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
          <option value="no-especificar">Prefiero no decirlo</option>
        </select>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label><strong>País de residencia *</strong></label>
        <select
          name="pais"
          value={formData.pais}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        >
          <option value="">Selecciona tu país</option>
          <option value="AR">Argentina</option>
          <option value="BO">Bolivia</option>
          <option value="BR">Brasil</option>
          <option value="CL">Chile</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="EC">Ecuador</option>
          <option value="ES">España</option>
          <option value="MX">México</option>
          <option value="PE">Perú</option>
          <option value="UY">Uruguay</option>
          <option value="VE">Venezuela</option>
        </select>
        {errors.pais && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.pais}</div>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          <input
            type="checkbox"
            name="terminos"
            checked={formData.terminos}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          Acepto los <a href="#" target="_blank">términos y condiciones</a> *
        </label>
        {errors.terminos && <div style={{ color: 'red', fontSize: '0.9em' }}>{errors.terminos}</div>}
      </div>

      <button type="submit" style={{ padding: '10px 20px' }}>Registrarse</button>
    </form>
  );
};

export default RegistroForm;