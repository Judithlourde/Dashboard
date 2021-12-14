<template>
    <div class="quiz" :class="{quizAppView:quizAppView}">
        <!-- Insert this unless quiz has no more questions -->
        <div v-if="quizId < quizData.length">
            <div class="quiz__name">
                <h1>{{ quizName }}</h1>

                <p>Question {{quizId + 1}}</p>
            </div>

            <div class="quiz__header">
                <h2> {{ quizData[quizId].question }} </h2>
            </div>

            <div class="quiz__image">
                <img :src="quizData[quizId].image" :alt="quizData[quizId].alt">

                <p class="quiz__image-text">{{ quizData[quizId].alt }}</p>
            </div>

            <div class="quiz__alternatives" v-for="(items, index) in quizData[quizId].alternatives" :key="quizData[quizId].alternatives[index]">
                <!-- How the heck do i bind classes to only one button at a time!? -->
                <!-- edit: I MADE IT! if index === selected!!!-->
                <button class="quiz__buttons" :class=" index === selected ? 'quiz__buttons--selected' : '' " @click="selectAlternative(index)">{{items}}</button>
            </div>

            <div>
                <button class="quiz__buttons quiz__buttons--answer" @click="nextQuestion">Next question!</button>
            </div>

            <div>
                <button class="quiz__buttons quiz__score"> Points so far: {{ score }}</button>
            </div>
        </div>

        <!-- if quiz is at end, display this -->
        <div v-else>
            <div v-if="score > quizData.length / 2">
                <h3>Gratulerer!</h3>

                <p>Du fikk {{ score }} av {{ quizData.length }} poeng!</p>

                <p>🥳</p>
            </div>

            <div v-else>
                <h3>Bedre lykke neste gang!</h3>

                <p>Du fikk {{ score }} av {{ quizData.length }} poeng!</p>

                <p>🙃</p>
            </div>

            <div>
                <button class="quiz__buttons-reset" @click="resetGame">Try again</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quizAppView: false,
                quizId: 0,
                selected: null,
                score: 0
            }
        },

        methods: {
            nextQuestion() {
                if (this.selected === null) {
                    alert('You have not selected an option. Please do so.')
                    return
                }
            
                if (this.selected === this.quizData[this.quizId].answer) {
                    this.score++;
                }
                this.quizId++;
                this.selected = null;
            },
        
            selectAlternative(index) {
                this.selected = index;
            },

            resetGame() {
                this.quizId = 0,
                this.score = 0
            }
        },

        computed: {
            quizName() {
                return this.$store.getters.getQuizName
            },

            quizData() {
                return this.$store.getters.getQuizData
            },
            
            stylingQuizAppView() {
                return this.quizAppView
            }
        },
    }
</script>

<style>
    .quiz {
        min-width: calc(200px + 1%);
        padding-top: 2vh; 
        font-size: .85em;
        padding-bottom: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .quiz__header {
        margin: .5em;
        color: var(--dark-green);
    }

    .quiz__image > img {
        max-width: 70%;
        padding: 10px;
    }

    .quiz__image-text {
        font-size: 0.85rem;
        color: gray;
    }

    .quiz__buttons--answer {
        color: var(--purple);
    }

    .quiz__buttons,
    .quiz__buttons--answer {
        text-align: center;
        width: 70%;
        height: 100%;
        min-width: fit-content;
        font-size: .85em;
        padding: 0.2em;
        margin: 0.5em 0;
        background: white;
        border: 1px solid black;
        border-radius: 2rem;
    }

   

    .quiz__buttons--selected {
        background: lightblue;
    }

    .quiz__buttons:hover {
        transform: scale(1.05);
        border-color: transparent;
        outline: 3px solid var(--purple);
    }

    .quiz__buttons--answer:hover {
        outline: black solid 1px;
    }

    .quiz__score,
    .quiz__score:hover {
        border-style: none;
        outline: none;
        cursor: default;
    }

    /* styling quizapp in view */
    /* small devices (mobiles, 768px and down) */
    .quizAppView {
        border-radius: 0.5em;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
    }

    /* small devices (mobiles, 768px and down) */
    @media screen and (max-width: 768px) {
        .quizAppView {
            margin: 20px;
            padding: 5%;
            font-size: .75rem;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media screen and (min-width: 768px) {
        .quizAppView {
            margin: 50px;
            padding: 3%;
            background: #fff;
            font-size: 1.25rem;
            text-align: center;
            min-width: calc(786px + 14%);
        }
    }
</style>