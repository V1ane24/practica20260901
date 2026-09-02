export function VistaLista({ tareas, onToggleTarea }) {
  return (
    <ul>
      {tareas.map((tarea) => (
        <li
          key={tarea.id}
          onClick={() => onToggleTarea(tarea.id)}
          style={{
            cursor: 'pointer',
            textDecoration: tarea.completada ? 'line-through' : 'none'
          }}
        >
          {tarea.texto} <strong>[{tarea.categoria}]</strong>
        </li>
      ))}
    </ul>
  );
}