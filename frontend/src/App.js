import React from 'react';

import './App.css'
import './global.css'
import './main.css'

import Notes from './Components/Notes'

function App() {
  return (

    <div id="app">

      <aside>
        <strong>Caderno de Notas</strong>
        <form>

          <div className="input-block">
            <label htmlFor="title" placeholder="Reunião da Empresa">Título da Anotação</label>
            <input />
          </div>

          <div className="input-block">
            <label htmlFor="title">Anotações</label>
            <textarea placeholder="Cumprir com reunião ás..."></textarea>
            <input />
          </div>

          <button type="submit">Salvar</button>

        </form>

      </aside>

      <main>
        <ul>
          <Notes />
        </ul>
      </main>
    </div>

  );
}

export default App;
