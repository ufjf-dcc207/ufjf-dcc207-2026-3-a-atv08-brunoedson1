import './App.css'
import Pacote from './Pacote.tsx'
import type { PacoteType } from './types.ts'

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

  return (
    <>
      <h2>Pacotes</h2>
      <div className='pacotes'>
        {data.map((p) => <Pacote pacote={p} key={p.id} />)}
      </div>
    </>
  )
}

export default App
