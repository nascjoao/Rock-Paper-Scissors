export default function getMachineChoice() {
  const options = ['✊', '✌️', '🖐'];
  const randomIndex = Math.round(Math.random() * (options.length - 1));
  return options[randomIndex];
}
