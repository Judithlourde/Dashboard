<template>
    <div class="quiz" :class="{quizAppView:quizAppView}">
        <!-- This will be shown untill quiz runs out of questions -->
        <div v-if="quizId < quizData.length">
            <div class="quiz__name">
                <h1>{{ quizName }}</h1>

                <p>Question {{quizId + 1}}</p>
            </div>

            <div class="quiz__header">
                <h2> {{ quizObject.question }} </h2>
            </div>

            <div class="quiz__image">
                <img :src="quizObject.image" :alt="quizObject.alt">

                <p class="quiz__image-text">{{ quizObject.alt }}</p>
            </div>

            <!-- key used in v-for might not be optimal? Gave no errors, so it stands.
            Passing the index so we know what alternative was chosen -->
            <div class="quiz__alternatives" 
                v-for="(items, index) in quizObject.alternatives" 
                :key="quizData[quizId].alternatives[index]">
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
                <h3>Congratulations!</h3>

                <p>You scored {{ score }} out of {{ quizData.length }} points!</p>

                <p>🥳</p>
            </div>
            <!-- or this, depending on score -->
            <div v-else>
                <h3>Better luck next time!</h3>

                <p>You scored {{ score }} out of {{ quizData.length }} points.</p>

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
                // quizId refers to the index of the quizData-array in quiz.js
                quizId: 0,
                // selected works as a temporary storage for selected answer 
                selected: null,
                score: 0
            }
        },

        methods: {
            nextQuestion() {
                // make sure an option was selected before going to next question
                if (this.selected === null) {
                    alert('You have not selected an option. Please do so.')
                    return
                }
            
                // if value stored in data.selected equals the index of the answer
                // increase score by one
                if (this.selected === this.quizData[this.quizId].answer) {
                    this.score++;
                }
                // go to next question and reset temporary selected value
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
            quizObject() {
                return this.quizData[this.quizId]
            },

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
    /* */
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