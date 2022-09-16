import PlayerChoice from "./PlayerChoice"
import getMachineChoice from "../helpers/getMachineChoice"
import { useState } from "react"

export default function Game(): JSX.Element {
  const [machineChoice, setMachineChoice] = useState('');
  const [playerChoice, setPlayerChoice] = useState('');
  
  function chooseOption({ target }: { target: EventTarget }) {
    const button = target;
    setPlayerChoice((button as HTMLButtonElement).textContent!)
    setMachineChoice(getMachineChoice())
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '5rem' }}>
        <PlayerChoice choice={playerChoice} />
        <PlayerChoice machine choice={machineChoice} />
      </div>
      <button onClick={chooseOption}>✊</button>
      <button onClick={chooseOption}>✌️</button>
      <button onClick={chooseOption}>🖐</button>
    </>
  )
}
