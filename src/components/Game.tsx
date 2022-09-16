import PlayerChoice from "./PlayerChoice"
import getMachineChoice from "../helpers/getMachineChoice"
import { useEffect, useState } from "react"

interface CounterPicks {
  '✊': string;
  '✌️': string;
  '🖐': string
}

export default function Game(): JSX.Element {
  const [machineChoice, setMachineChoice] = useState('');
  const [playerChoice, setPlayerChoice] = useState('');
  const [score, setScore] = useState({ player: 0, machine: 0 });
  const [showWinner, setShowWinner] = useState('');
  
  function chooseOption({ target }: { target: EventTarget }) {
    const button = target;
    setPlayerChoice((button as HTMLButtonElement).textContent!)
    setMachineChoice(getMachineChoice())
  }
  
  useEffect(() => {
    const counterPicks: CounterPicks = {
      '✊': '🖐',
      '✌️': '✊',
      '🖐': '✌️'
    }

    if ([playerChoice, machineChoice].every((value) => value !== '')) {
      const defeat = playerChoice === machineChoice;
      const userWins = counterPicks[playerChoice as keyof CounterPicks] !== machineChoice && !defeat;
      const winner = userWins ? 'player' : 'machine';
      if (!defeat) {
        setScore((currentScore) => ({
          ...currentScore,
          [winner]: currentScore[winner] + 1
        }))
        setShowWinner(winner === 'player' ? 'Você' : 'A máquina');
        setTimeout(() => {
          setShowWinner('')
        }, 900)
      }

      setTimeout(() => {
        setMachineChoice('')
        setPlayerChoice('')
      }, 700)
    }
  }, [playerChoice, machineChoice])

  return (
    <>
      <h1>Você: {score.player}</h1>
      <h1>Máquina: {score.machine}</h1>
      { showWinner !== '' && (
        <h1>{showWinner} ganhou!</h1>
      ) }
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
