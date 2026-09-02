export function VistaTabla({ tareas, onToggleTarea }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #ccc' }}>
          <th style={{ padding: '8px' }}>ID</th>
          <th style={{ padding: '8px' }}>Tarea</th>
          <th style={{ padding: '8px' }}>Categoría</th>
          <th style={{ padding: '8px' }}>Estado</th>
        </tr>
      </thead>
      <tbody>
        {tareas.map((tarea) => (
          <tr
            key={tarea.id}
            onClick={() => onToggleTarea(tarea.id)}
            style={{
              borderBottom: '1px solid #eee',
              cursor: 'pointer',
              backgroundColor: tarea.completada ? '#f0f0f0' : 'transparent'
            }}
          >
            <td style={{ padding: '8px' }}>{tarea.id}</td>
            <td style={{ padding: '8px', textDecoration: tarea.completada ? 'line-through' : 'none' }}>
              {tarea.texto}
            </td>
            <td style={{ padding: '8px' }}>{tarea.categoria}</td>
            <td style={{ padding: '8px' }}>
              {tarea.completada ? 'Completada' : 'Pendiente'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}