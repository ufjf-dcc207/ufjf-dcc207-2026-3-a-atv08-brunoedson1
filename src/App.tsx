import { useState } from 'react'
import './App.css'
import Pacote from './Pacote.tsx'
import type { PacoteType } from './types.ts'
import ListagemDePacotes from './ListagemDePacotes.tsx'

const data:Array<PacoteType> = [
  {
    id:"be3fab04-b6e9-4fe9-ad43-7dbb770ac241",
    largura: 20,
    altura: 30,
    profundidade: 40,
    peso: 2.34 
  },
  {
    id:"c6eaa93f-9477-481f-a9a2-8ac29f13597f",
    largura: 40,
    altura: 20,
    profundidade: 10,
    peso: 3.14 
  }

]

function App() {
  const [pacotes, setPacotes] = useState(data);

  function excluirPacote(id: string) {
    // const novoPacotes = [];
    // for (let i = 0; i < pacotes.length; i++) {
    //   if (pacotes[i] !== pacote) {
    //     novoPacotes.push(pacotes[i]);
    //   }
    // }
    setPacotes(pacotes.filter(p => p.id !== id));
  }

  return (
    <>
      <h2>Pacotes</h2>
      <ListagemDePacotes pacotes={pacotes} acaoExcluir={excluirPacote} />
    </>
  )
}

export default App
