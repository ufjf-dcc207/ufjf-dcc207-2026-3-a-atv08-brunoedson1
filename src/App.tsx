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
  }

]

function App() {

  return (
    <>
      <h2>Pacotes</h2>
      <div className='pacotes'>
        <Pacote pacote={data[0]}/>
      </div>
    </>
  )
}

export default App
