<template>
    <QuizApp :class="{quizAppView:!quizAppView}" />
</template>

<script>
import QuizApp from '../components/QuizApp.vue';

export default {
    components: {
        QuizApp
    }
}
</script>

