import image1 from "../assets/images/blue.jpg"
import image2 from "../assets/images/red.jpg"
import image3 from "../assets/images/caesar.jpg"

export default {
    state() {
        return {
            quizName: "The big fat quiz about finance and stuff.",
            // quizId: 0,
            quizData: [ 
                {
                id: 1,
                question: "How much money is the ocean worth?",
                image: image1,
                alt: "the ocean is heckin´ huge!",
                alternatives: [
                    "$100",
                    "$100.000",
                    "$100.000.000",
                    "Nobody knows..."
                    ],
                answer: 3,
            
                },
                {
                id: 2,
                question: "The sun is also pretty big. How many nickles could you fit across it?",
                image: image2,
                alt: "the sun is ludicrously beeg!",
                alternatives: [
                    "A couple",
                    "A few",
                    "Some",
                    "A lot"
                    ],
                answer: 3,
                },
                {
                id: 3,
                question: "Where are caesar-salads most expensive?",
                image: image3,
                alt: "caesar salads; the new currency?",
                alternatives: [
                    "In Rome",
                    "In Florence",
                    "In Monaco",
                    "In Tijuana",
                    "In Oslo"
                    ],
                answer: 4,
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
