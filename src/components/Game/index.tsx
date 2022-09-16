import { useEffect, useState } from "react"
import PlayerChoice from "../PlayerChoice"
import getMachineChoice from "../../helpers/getMachineChoice"
import style from './styles.module.scss'

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
    <div className={style.game}>
      <header className={style.score}>
        <strong>Você: {score.player}</strong>
        <strong>Máquina: {score.machine}</strong>
      </header>
      { showWinner !== '' && (
        <strong className={style.winner}>{showWinner} ganhou!</strong>
      ) }
      <div className={style.playerChoiceContainer}>
        <PlayerChoice choice={playerChoice} />
        <PlayerChoice machine choice={machineChoice} />
      </div>
      <section className={style.options}>
        <button onClick={chooseOption}>✊</button>
        <button onClick={chooseOption}>✌️</button>
        <button onClick={chooseOption}>🖐</button>
      </section>
    </div>
  )
}
