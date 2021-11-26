import image1 from "../assets/images/blue.jpg"
import image2 from "../assets/images/red.jpg"
import image3 from "../assets/images/caesar.jpg"

export default {
    state() {
        return {
            quizName: "Quiz om...ting.",
            // quizId: 0,
            quizData: [ 
                {
                id: 1,
                question: "Er 'blå' en farge?",
                image: image1,
                alt: "havet",
                alternatives: [
                    "Ja",
                    "Nei"
                    ],
                answer: 0,
            
                },
                {
                id: 2,
                question: "Hva med 'rød'?",
                image: image2,
                alt: "havet i solnedgang, muligens soloppgang, hvem vet",
                alternatives: [
                    "Nei",
                    "Kanskje",
                    "Ja",
                    "Kanskje ikke"
                    ],
                answer: 2,
                },
                {
                id: 3,
                question: "Hvor ble cæsarsalaten oppfunnet?",
                image: image3,
                alt: "salat av type caesar",
                alternatives: [
                    "I Roma",
                    "I Firenze",
                    "I Monaco",
                    "I Tijuana",
                    "På Grünerløkka"
                    ],
                answer: 3,
                }
            ],
            // score: 0,
        }
    },
    getters: {
        getQuizName(state) {
            return state.quizName
        },
        getQuizData(state) {
            return state.quizData
        }
    }
}
