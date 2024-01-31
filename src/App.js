
import './App.css';

function App() {
 // configurar la aplicación
const mensajeInicial = 'Empieza a adivinar...'
const SCORE = 20

// variables de la aplicación
let score
let highScore = 0
let secretNumber

// seleccionar elementos del DOM
const messageField = document.querySelector('.message')
const scoreField = document.querySelector('.score')
const highScoreField = document.querySelector('.highscore')
const secretNumberField = document.querySelector('.number')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessNumberField = document.querySelector('.guess')

// inicializar la aplicación
initApp()
console.log(highScore)
// funcionalidad de la aplicación

// addEventListener es una función que recibe
// como argumento otra función

checkButton.addEventListener('click', () => {
  // obtener el valor del input
  const guessNumber = Number(guessNumberField.value)
  if (guessNumber > secretNumber) {
    // actualizar el mensaje
    // actualizar el score
    score--
    scoreField.textContent = score
    messageField.textContent = 'Te has pasado'
  } else if (guessNumber < secretNumber) {
    // actualizar el mensaje
    // actualizar el score
    score--
    scoreField.textContent = score
    messageField.textContent = 'Te has quedado corto'
  } else {
    // cambiar fondo de pantalla
    document.body.style.backgroundColor = 'green'
    checkButton.disabled = true

    // mostrar el mensaje
    messageField.textContent = '¡Has acertado!'
    // mostrar el número secreto
    secretNumberField.textContent = secretNumber
    secretNumberField.style.backgroundColor = 'yellow'
    secretNumberField.style.width = '300px'

    // actualizar el highScore
    if (score > highScore) {
      highScore = score
      highScoreField.textContent = highScore
      localStorage.setItem('highScore',highScore)
      console.log(localStorage.getItem('highScore'))
    }
  }
})

function initApp() {
  // inicializamos score

  score = SCORE
  scoreField.textContent = score

  // TODO: inicializar highScore
  // habría que leer de algún almacenamiento: cookies, sessionStorage, localStorage
  highScore=localStorage.getItem('highScore')
  // highScoreField.textContent = highScore

  // inicializar el texto de inicio
  messageField.textContent = mensajeInicial

  // inicializar el número secreto
  secretNumber = Math.trunc(Math.random() * 20) + 1
  secretNumberField.textContent = '?'

  // inicializar el aspecto visual de los elementos
  document.body.style.backgroundColor = '#222'
  secretNumberField.style.backgroundColor = '#fff'
  secretNumberField.style.width = '150px'

  checkButton.disabled = false
}

againButton.addEventListener('click', initApp)

  return (
    <div className="App">
       <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <button className="btn again">Again!</button>
      <div className="number">?</div>
    </header>
    <main>
      <section className="left">
        <input type="number" className="guess" />
        <button className="btn check">Check!</button>
      </section>
      <section className="right">
        <p className="message">Start guessing...</p>
        <p className="label-score">💯 Score: <span className="score">20</span></p>
        <p className="label-highscore">
          🥇 Highscore: <span class="highscore">0</span>
        </p>
      </section>
    </main>
    </div>
  );
}

export default App;
