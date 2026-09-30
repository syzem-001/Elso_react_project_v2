import { ButtonGroup } from '@heroui/react'
import './App.css'
import { Counter } from './components/Counter'
import { Dices } from './components/Dices'
import { Programs } from './components/Programs'
import { Button } from '@heroui/react'
import { useState } from 'react'
import { MyTodos } from './components/MyTodos'

function App() {
  const [selected, setSelected] = useState(null)

  //const nap='kedd'
  //const nr=110

  return (
    <div>
      <h1 className='text-center font-bold text-3xl'>My first App</h1>

      <div className='flex flex-col items-center gap-6 p-10'>
        <ButtonGroup variant="primary">
          <Button onClick={()=>setSelected('counter')}>Counter</Button>
          <Button onClick={()=>setSelected('dice')}>
            <ButtonGroup.Separator />
            Dice Roller
          </Button>
          <Button onClick={()=>setSelected('programs')}>
            <ButtonGroup.Separator />
            Programs
          </Button>
        </ButtonGroup>
        <Button onClick={()=>setSelected('todo')}>Todo</Button>
      </div>

      {/*<p>Ma {nap} van.</p>
      <p>A szám {nr%2==0 ? 'páros' :'páratlan'} !</p>*/}

      { selected=='counter' && <Counter />}
      {selected=='dice' && <Dices/>}
      {(selected=='programs' || !selected) && <Programs/>}
      {selected=='todo' && <MyTodos/>}
    </div>
  )
}

export default App
