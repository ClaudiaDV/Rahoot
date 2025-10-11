export const WEBSOCKET_PUBLIC_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL
export const WEBSOCKET_SERVER_PORT = 5505

const QUIZZ_CONFIG = {
  password: "PASSWORD",
  subject: "CONEXIÓN BÍBLICA",
  questions: [
    {
      question: "¿Para quién fue escrito el libro de Lucas?",
      answers: [
        "Judíos",
        "Nosotros",
        "Teófilo",
        "Romanos"
      ],
      solution: 2,
      cooldown: 5,
      time: 15,
    },
    {
      question: "¿De quién era descendiente Elisabet?",
      answers: [
        "Aarón",
        "Levi",
        "Judá",
        "Moisés"
      ],
      solution: 0,
      cooldown: 5,
      time: 15,
    },
    {
      question: "¿A quién le dieron la noticia del nacimiento de Juan?",
      answers: [
        "Zacarías", 
        "Abías", 
        "Juan", 
        "Elizabet"
      ],
      solution: 0,
      cooldown: 5,
      time: 15,
    },
    {
      question: "¿Cómo se llama el ángel que habló con María?",
      answers: [
        "Miguel",
        "Juan",
        "Gabriel",
        "Daniel",
      ],
      solution: 2,
      cooldown: 5,
      time: 15,
    },
    {
      question: "¿De qué forma comunicó Zacarías el nombre de su hijo, cuando le preguntaron con señas cómo se llamaría?",
      answers: [
        "Con muecas",
        "Con el lenguaje de señas", 
        "Lo escribió en una tablita",
        "Hablando", 
      ],
      solution: 2,
      cooldown: 8,
      time: 15,
    },
    {
      question: "¿Quién dió el edicto de que todo el mundo fuera empadronado?",
      answers: [
        "Cirenio", 
        "Augusto César", 
        "Pilato",
        "Herodes" 
      ],
      solution: 1,
      cooldown: 5,
      time: 15,
    },
    {
      question: "¿De dónde a dónde viajaron José y María para ser empadronados?",
      answers: [
        "De Galilea a Nazaret",
        "De Judea a Belén",
        "De Nazaret a Belén",
        "De Galilea a Belén",
      ],
      solution: 3,
      cooldown: 5,
      time: 15,
    },
    {
      question: "¿A los cuántos días fue circuncidado Jesús?",
      answers: [
        "7 días",
        "8 días",
        "10 días",
        "40 días"
      ],
      solution: 1,
      cooldown: 5,
      time: 15,
    },
    {
      question: "¿Cuántos meses de embarazo tenía su prima de María, cuando el ángel habló con ella?",
      answers: [
        "2 meses",
        "4 meses",
        "6 meses",
        "8 meses"
      ],
      solution: 2,
      cooldown: 8,
      time: 15,
    },
    {
      question: "¿Cómo se llamaba el hombre al que el Espíritu Santo le dijo que no vería la muerte hasta que viera al ungido del Señor?",
      answers: [
        "José", 
        "Felipe",
        "Fanuel", 
        "Simeón",
      ],
      solution: 3,
      cooldown: 8,
      time: 15,
    },
    {
      question: "¿Hacia cuanto tiempo la profetisa Ana era viuda?",
      answers: [
        "82 años",
        "84 años",
        "86 años",
        "89 años"
      ],
      solution: 1,
      cooldown: 5,
      time: 15,
    },
    {
      question: "¿Quienes eran los sumos sacerdotes cuando vino palabra de Dios a Juan en el desierto?",
      answers: [
        "Timoteo y Nicodemo",
        "Anás y Caifás",
        "Zacarías y Ananías",
        "Tiberio y Felipe"
      ],
      solution: 1,
      cooldown: 8,
      time: 15,
    },
    {
      question: "¿Que les contestó Juan a los publicanos que vinieron a él para ser bautizados, cuando le dijeron: que haremos?",
      answers: [
        "No hagáis extorsión a nadie",
        "Bienvenidos, el reino de los cielos es para todos",
        "El que tiene dos túnicas, dé al que no tiene",
        "No exijáis más de lo que os está ordenado."
      ],
      solution: 3,
      cooldown: 8,
      time: 18,
    },
    {
      question: "¿Por causa de quien reprendió Juan a Herodes el tetrarca?",
      answers: [
        "Felipe",
        "Herodías",
        "De la gente",
        "María"
      ],
      solution: 1,
      cooldown: 5,
      time: 15,
    },
    {
      question: "¿De cuantos años mas o menos empezó Jesús su ministerio?",
      answers: [
        "24 años",
        "28 años",
        "30 años",
        "32 años"
      ],
      solution: 2,
      cooldown: 5,
      time: 15,
    },
     {
      question: "¿Hijo de quien era José el padre de Jesús?",
      answers: [
        "Eli",
        "Amós",
        "Eliezer",
        "Elias"
      ],
      solution: 0,
      cooldown: 5,
      time: 15,
    },
  ],
}

// DONT CHANGE
export const GAME_STATE_INIT = {
  started: false,
  players: [],
  playersAnswer: [],
  manager: null,
  room: null,
  currentQuestion: 0,
  roundStartTime: 0,
  ...QUIZZ_CONFIG,
}
