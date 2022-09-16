import styles from './styles.module.scss';

export default function PlayerChoice({ choice, machine }: { choice: string, machine?: boolean }): JSX.Element {
  return (
    <>
      <div className={`${styles.container} ${machine ? styles.machine : styles.human}`}>
        <h1
          className={
            `${styles.playerChoice}
            ${!choice ? styles.choosing : styles.chose}
            ${machine ? styles.machine : styles.human}`
          }>
            {choice === '' ? '✊' : choice}
        </h1>
      </div>
    </>
  )
}
