<template>
  <div class="quiz">
      <div class="quiz__container">
        <h1>{{quizName}}</h1>
        <div class="quiz__header">
            <h3> {{ quizData[quizId].question }} </h3>
        </div>
        <div class="quiz__image">
            <img :src="quizData[quizId].image" :alt="quizData[quizId].alt">
        </div>
        <div class="quiz__alternatives" v-for="(items, index) in quizData[quizId].alternatives">
            <!-- :key="quizData[quizId].alternatives[index]" -->
            <button @click="checkAnswer(index)">{{items}}</button>
        </div>
        <div>
            <button @click="nextQuestion">Neste spørsmål!</button>
        </div>
      </div>
  </div>
</template>

<script>
import image1 from "../assets/images/blue.jpg"
import image2 from "../assets/images/red.jpg"
import image3 from "../assets/images/caesar.jpg"

export default {
    data() {
        return {
            quizName: "Quiz om...ting.",
            quizId: 0,
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
            score: 0,
        }
    },
    methods: {
        nextQuestion() {
            this.quizId++
        },
        checkAnswer(index) {
            console.log(index)
            console.log(this.quizData[this.quizId].answer)
        }
    }
}
</script>

<style>
    .quiz {
        padding: 2rem;
        text-align: center;
        width: 80%;
        /* background: lightgrey; */
        margin: 1rem auto;
    }
    .quiz__header {
        margin: 50px;
    }
    .quiz__image {
        background-image: url();
    }
    .quiz__alternatives button
    ,button {
        min-width: 50%;
        font-size: 1.5rem;
        padding: 0.3em;
        margin: 0.5em 0;
        background: white;
        border-radius: 2em;
    }
    button:hover {
        background: rgb(186, 231, 186);
        transform: scale(1.05);
    }
</style>