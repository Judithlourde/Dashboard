<template>
  <div class="quiz">
      <div class="quiz__container">
        <!-- Insert this unless quiz has no more questions -->
        <div v-if="quizId < quizData.length">
            <div class="quiz__name">
                <h1>{{ quizName }}</h1>
            </div>
            <div class="quiz__header">
                <h2> {{ quizData[quizId].question }} </h2>
            </div>
            <div class="quiz__image">
                <img :src="quizData[quizId].image" :alt="quizData[quizId].alt">
                <p class="quiz__image--text">{{ quizData[quizId].alt }}</p>
            </div>
            <div class="quiz__alternatives"     
                v-for="(items, index) in quizData[quizId].alternatives"
                :key="quizData[quizId].alternatives[index]">
                <!-- How the heck do i bind classes to only one button at a time!? -->
                <!-- edit: I MADE IT! if index === selected!!!-->
                <button class="quiz__buttons"
                :class=" index === selected ? 'quiz__buttons--selected' : '' "
                @click="selectAlternative(index)"
                >{{items}}</button>

            </div>
            <div>
                <button class="quiz__buttons" @click="nextQuestion">Neste spørsmål!</button>
            </div>
            <div>
                <button class="quiz__buttons"> Poeng: {{ score }}</button>
            </div>
        </div>
        <!-- if quiz is at end, display this -->
        <div v-else>
            <h3>Gratulerer!</h3>
            <p>Du fikk {{ score }} av {{ quizData.length }} poeng!</p>
            <p>🥳</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            quizId: 0,
            selected: null,
            score: 0
        }
    },
    methods: {
        nextQuestion() {
            if (this.selected === this.quizData[this.quizId].answer) {
                this.score++;
            }
            this.quizId++;
            this.selected = null;
        },
        selectAlternative(index) {
            this.selected = index;           
        }
    },
    computed: {
        quizName() {
            return this.$store.getters.getQuizName
        },
        quizData() {
            return this.$store.getters.getQuizData
        },
    },
}
</script>

<style>
    .quiz {
        padding: 0.5em;
        margin: auto;
        width: 100%;
        text-align: center;
    }
    .quiz__container {
        max-width: 1600px;
    }
    .quiz__name  h1 {
        font-size: 2rem;
    }
    .quiz__header h2 {
        font-size: 1.5rem;
    }
    .quiz__header {
        margin: 20px;
    }
    .quiz__image img {
        width: 90%;
        max-width: 800px;
    }
    .quiz__image--text {
        font-size: 0.9rem;
        color: gray;
    }
    .quiz__buttons {
        text-align: center;
        width: 75%;
        min-width: fit-content;
        max-width: 400px;
        font-size: 1rem;
        padding: 0.3em;
        margin: 0.5em 0;
        background: white;
        border-radius: 2rem;
    }
    .quiz__buttons--selected {
        background: lightgreen;
    }
    .quiz__buttons:hover {
        transform: scale(1.05);
        border-color: transparent;
        outline: green solid 3px;
    }

   @media screen and (max-width: px) {
       .quiz__image img {
        width: 90%;
    }
}
</style>