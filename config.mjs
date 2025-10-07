export const WEBSOCKET_PUBLIC_URL = "http://localhost:5505/"
export const WEBSOCKET_SERVER_PORT = 5505

const QUIZZ_CONFIG = {
  password: "PASSWORD",
  subject: "Adobe",
  questions: [
    {
      question: "¿Quién fue el primer hombre creado?",
      answers: [
        "Moisés",
        "Abraham",
        "Adán",
        "Noé",
      ],
      solution: 2,
      cooldown: 5,
      time: 15,
    },
    {
      question: "¿Cuál fue el primer milagro de Jesús según el Evangelio de Juan?",
      answers: [
        "Sanar a un ciego", 
        "Caminar sobre el agua",
        "Resucitar a Lázaro",
        "Convertir el agua en vino"
      ],
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=500&auto=webp",
      solution: 3,
      cooldown: 5,
      time: 15,
    },
    {
      question: "¿Cuántos libros tiene la Biblia en total?",
      answers: ["66", "43", "22", "73"],
      solution: 0,
      cooldown: 5,
      time: 15,
    },
    {
      question: "¿Quién construyó el arca para salvarse del diluvio?",
      answers: [
        "Moisés","David","Noé","Abraham"
      ],
      solution: 2,
      cooldown: 5,
      time: 15,
    },
    {
      question: "¿Dónde recibió Moisés los Diez Mandamientos?",
      answers: [
        "Monte Sinaí",
        "Monte Carmelo",
        "Monte de los Olivos",
        "Monte Ararat"
      ],
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=500&auto=webp",
      solution: 0,
      cooldown: 5,
      time: 15,
    },
    {
      question: "¿Qué apóstol negó a Jesús tres veces?",
      answers: [
        "Juan",
        "Tomás",
        "Judas",
        "Pedro"
      ],
      image:
        "https://images.unsplash.com/photo-1435348773030-a1d74f568bc2?q=80&w=500&auto=webp",
      solution: 3,
      cooldown: 5,
      time: 15,
    },
    {
      question: "¿Cuál de estos libros está en el Antiguo Testamento?",
      answers: [
        "Romanos",
        "Génesis",
        "Hechos",
        "Filipenses",
      ],
      solution: 1,
      cooldown: 5,
      time: 15,
    },
    {
      question: "¿Qué mujer en la Biblia se convirtió en estatua de sal?",
      answers: [
        "Ester",
        "María Magdalena",
        "Raquel",
        "La esposa de Lot",
      ],
      solution: 3,
      cooldown: 5,
      time: 15,
    },
    {
      question: "¿Quién fue tragado por un gran pez por desobedecer a Dios?",
      answers: [
        "Elías",
        "Isaías",
        "Jonás",
        "Pablo",
      ],
      solution: 3,
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
