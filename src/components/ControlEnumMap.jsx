import { useState } from 'react';

// 1. Definición de Enums 
const ESTADOS_ENVIO = {
  PENDIENTE: 'PENDIENTE',
  EN_TRANSITO: 'EN_TRANSITO',
  ENTREGADO: 'ENTREGADO',
  CANCELADO: 'CANCELADO',
  MI_NOMBRE: 'VANESSA'
};

// 2. Diccionario de Vistas 
const VISTAS_ESTADO = {
  [ESTADOS_ENVIO.PENDIENTE]: (
    <div style={{ background: '#fff3cd', color: '#856404', padding: '12px', borderRadius: '4px' }}>
      <strong>Pedido Pendiente:</strong> Tu orden se está procesando en el almacén.
    </div>
  ),
  [ESTADOS_ENVIO.EN_TRANSITO]: (
    <div style={{ background: '#cce5ff', color: '#004085', padding: '12px', borderRadius: '4px' }}>
      <strong>En Tránsito:</strong> El paquete está en camino con el repartidor.
    </div>
  ),
  [ESTADOS_ENVIO.ENTREGADO]: (
    <div style={{ background: '#d4edda', color: '#155724', padding: '12px', borderRadius: '4px' }}>
      <strong>Entregado:</strong> El paquete fue entregado con éxito.
    </div>
  ),
  [ESTADOS_ENVIO.CANCELADO]: (
    <div style={{ background: '#f8d7da', color: '#721c24', padding: '12px', borderRadius: '4px' }}>
      <strong>Cancelado:</strong> El envío fue cancelado.
    </div>
  ),
  [ESTADOS_ENVIO.MI_NOMBRE]: (
    <div style={{ background: '#e2e3e5', color: '#1f93f1', padding: '12px', borderRadius: '4px' }}>
      <h3>INGRID VANESSA CARTAGENA VALDEZ</h3>
    </div>
  )
};

// 3. Componente Principal
export function ControlEnumMap() {
  const [estadoActual, setEstadoActual] = useState(ESTADOS_ENVIO.PENDIENTE);

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>3. Renderizado Condicional con Enum / Object Map</h2>
      <p>Simulador de estado de paquete:</p>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
        {Object.keys(ESTADOS_ENVIO).map((clave) => (
          <button
            key={clave}
            onClick={() => setEstadoActual(ESTADOS_ENVIO[clave])}
            style={{
              fontWeight: estadoActual === ESTADOS_ENVIO[clave] ? 'bold' : 'normal'
            }}
          >
            {clave}
          </button>
        ))}
      </div>

      {VISTAS_ESTADO[estadoActual] || <p>Estado no reconocido</p>}
    </div>
  );
}