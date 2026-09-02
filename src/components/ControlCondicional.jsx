import { useState } from 'react';

export function ControlCondicional() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rol, setRol] = useState('invitado');
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false);

  if (!isLoggedIn) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2>2. Renderizado Condicional</h2>
        <p>Debes iniciar sesión para ver los controles.</p>
        <button onClick={() => setIsLoggedIn(true)}>Iniciar Sesión</button>
      </div>
    );
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>2. Renderizado Condicional</h2>
      <button onClick={() => setIsLoggedIn(false)}>Cerrar Sesión</button>

      <hr />

      <div>
        <label>Cambiar Rol: </label>
        <button onClick={() => setRol('invitado')}>Invitado</button>
        <button onClick={() => setRol('usuario')}>Usuario</button>
        <button onClick={() => setRol('admin')}>Admin</button>
      </div>

      <div style={{ marginTop: '10px' }}>
        {rol === 'admin' && <p style={{ color: 'red' }}><strong>Panel de Administración Accesible</strong></p>}
        {rol === 'usuario' && <p style={{ color: 'green' }}>Bienvenido, usuario activo.</p>}
        {rol === 'invitado' && <p style={{ color: 'gray' }}>Modo de solo lectura.</p>}
      </div>

      <hr />

      <button onClick={() => setMostrarNotificacion(!mostrarNotificacion)}>
        {mostrarNotificacion ? 'Ocultar' : 'Mostrar'} Notificación
      </button>

      {mostrarNotificacion && (
        <div style={{
          background: '#e0f7fa', color: '#000', padding: '8px',
          marginTop: '8px', borderRadius: '4px'
        }}>
          ¡Tienes una nueva notificación!
        </div>
      )}
    </div>
  );
}