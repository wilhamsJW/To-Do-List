import React, { useState, useEffect } from 'react';

import api from './services/api'

import './App.css'
import './global.css'
import './main.css'

import Notes from './Components/Notes'
import RadioButton from './Components/RadioButton'

function App() {

  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [allNotes, setAllNotes] = useState([]); // inicializado como array pq ele é um array de informações q irá receber a resposta do servidor ou do db, note abaixo q ele recebe response.data q é a resposta do servidor

  // Fazendo a função dentro do UseEffect() a página não carrega novamente se houver alguma alteração
  // na página feito pelo usuário, por ex: se o usuário add uma nova nota, essa nova nota não irá aparecer automáticamente na tela 
  // pois isso daria um refresh na página enão é isso que queremos, iremos setar na função handlesubmit() algo dessa forma:
  // setAllNotes([ ...allNotes, response.data ]) 
  // -> isso quer dizer que '...allNotes' -> irá repetir todos os valores já existentes
  // response.data -> está adicionando os novos valores existentes sem a necessidade de dá refresh na página
  // useEffect(() tbm previne que a página fique fazendo request o tempo todo, se tirar o useEffect(() e deixar só a chamada
  // vai ficar fazendo um request atrás do outro
  useEffect(() => {
    // É preciso executar a função
    getAllNotes()
    
  }, [])
  
  // Retirada a função getAllNotes() de dentro do useEffect() pq vou usala em outro local
  // no handleDelete() mas ela está sendo chamada dentro do useEffect() e não irá impactar na aplicação
  async function getAllNotes() {

    const response = await api.get('/annotation',);

    // Recebe todas as anotações a serem exibidas na tela
    setAllNotes(response.data.annotationList)

  }

 async function handleDelete(id) {
   const deletedNote = await api.delete(`/annotation/${id}`);

   if (deletedNote) {
    //  Responsável por me trazer todos os itens diferente da id excluída, então só irá trazer 
    //  id's existentes
    // Para isso usamos setAllNotes() q é reponsável por setar a variável chamada allNotes
    // Dessa forma atualizamos allNotes na página pois é ele q está exibindo as informações
    // abaixo ele é enviado ao < Notes />
     setAllNotes(allNotes.filter(allNotes => allNotes._id !== id));
   }
 }

 async function handleChangePriority(id) {
    const note = await api.post(`/priority/${id}`); 
    if (note) {
      // Atualizando os cards para q atualiza a tela com card de prioridade, q é um destaque css
      getAllNotes()
    } 
 }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/annotation', {
      title,
      notes,
      priority: false
    })

    setTitle('')
    setNotes('')

    // explicações sobre essa linha no comentário acima
    setAllNotes([ ...allNotes, response.data ])
  }

  // Setando valores para alterar a cor do botão para quando não tiver todos os campos
  // preenchidos o botão fique com uma certa opacidade
  useEffect(() => {

    function enableSubmitButton() {
      let btn = document.getElementById('btn_submit');
      btn.style.background = '#ffd3ca'

      if (title && notes) {
      btn.style.background = '#eb8f7a'

      }
    }
    enableSubmitButton();
  }, [title, notes]) // é necessário passar as dependecias aqui no '[]' pq estão sendo usadas na função exatamente no if

  return (

    <div id="app">

      <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={handleSubmit}>

          <div className="input-block">
            <label htmlFor="title" placeholder="Reunião da Empresa">Título da Anotação</label>
            <input
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
              maxLength="30"
            />
          </div>

          <div className="input-block">
            <label htmlFor="title">Anotações</label>
            <textarea
              required
              placeholder="Cumprir com reunião ás..."
              value={notes}
              onChange={e => setNotes(e.target.value)}
              maxLength="180"
            >
            </textarea>
          </div>

          <button id="btn_submit" type="submit">Salvar</button>

        </form>
        <RadioButton />

      </aside>

      <main>
        <ul>
          {allNotes.map(data => (
             <Notes 
                key={data._id}
                data={data}
                handleDelete={handleDelete}
                handleChangePriority={handleChangePriority}
              />
          ))}
        </ul>
      </main>
    </div>

  );
}

export default App;
