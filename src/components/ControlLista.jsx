import { useState } from 'react';
import { VistaLista } from './VistaLista';
import { VistaTabla } from './VistaTabla';

const tareasIniciales = [
  { id: 1, texto: 'Aprender JSX', completada: true, categoria: 'React' },
  { id: 2, texto: 'Dominar renderizado de listas', completada: false, categoria: 'React' },
  { id: 3, texto: 'Entender Renderizado Condicional', completada: false, categoria: 'React' },
  { id: 4, texto: 'Estudiar CSS Flexbox', completada: true, categoria: 'CSS' }
];

export function ControlLista() {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [filtroCategoria, setFiltroCategoria] = useState('Todas');
  const [tipoVista, setTipoVista] = useState('tabla');

  const tareasFiltradas = tareas.filter(tarea =>
    filtroCategoria === 'Todas' ? true : tarea.categoria === filtroCategoria
  );

  const toggleTarea = (id) => {
    setTareas(tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t));
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>1. Renderizado de Listas y Tablas</h2>

      <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
        <div>
          <label>Categoría: </label>
          <select value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}>
            <option value="Todas">Todas</option>
            <option value="React">React</option>
            <option value="CSS">CSS</option>
          </select>
        </div>

        <div>
          <label>Vista: </label>
          <button
            onClick={() => setTipoVista('lista')}
            style={{ fontWeight: tipoVista === 'lista' ? 'bold' : 'normal' }}
          >
            Lista (ul)
          </button>
          <button
            onClick={() => setTipoVista('tabla')}
            style={{ fontWeight: tipoVista === 'tabla' ? 'bold' : 'normal' }}
          >
            Tabla (table)
          </button>
        </div>
      </div>

      {tareasFiltradas.length === 0 ? (
        <p><i>No hay tareas para esta categoría.</i></p>
      ) : tipoVista === 'lista' ? (
        <VistaLista tareas={tareasFiltradas} onToggleTarea={toggleTarea} />
      ) : (
        <VistaTabla tareas={tareasFiltradas} onToggleTarea={toggleTarea} />
      )}
    </div>
  );
}