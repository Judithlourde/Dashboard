import hundreddollarbill from "/images/hundreddollarbill.jpeg"
import dollarbill from "/images/dollarbill.jpeg"
import billcollection from "/images/billcollection.jpeg"
import loosechange from "/images/loosechange.jpeg"

export default {
    state() {
        return {
            quizName: "The big fat quiz about finance and stuff.",
            quizData: [ 
                {
                question: "Which denomination of money is the most counterfeited one? (in the US)",
                image: hundreddollarbill,
                alt: "Benjamin Franklin",
                alternatives: [
                    "the $1 bill",
                    "the $5 bill",
                    "the $10 bill",
                    "the $20 bill",
                    "the $100 bill"
                    ],
                answer: 3,
            
                },

                {
                question: "What is the typical lifespan of a $1 bill?",
                image: dollarbill,
                alt: "George Washington",
                alternatives: [
                    "6 months",
                    "18 months",
                    "3 years",
                    "5 years",
                    "9 years"
                    ],
                answer: 1,
                },

                {
                question: "The US has two money printing facilities. How much ink do they use per day combined?",
                image: billcollection,
                alt: "Dolla dolla bill, yall!",
                alternatives: [
                    "1.2 tons of ink",
                    "2.5 tons of ink",
                    "4.9 tons of ink",
                    "7.8 tons of ink",
                    "9.7 tons of ink"
                    ],
                answer: 4,
                },

                {
                question: "How much loose change does the average person have in their house?",
                image: loosechange,
                alt: "Loose change",
                alternatives: [
                    "$18",
                    "$29",
                    "$42",
                    "$56",
                    "$63",
                    "$78"
                    ],
                answer: 3,
                }
            ],
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
