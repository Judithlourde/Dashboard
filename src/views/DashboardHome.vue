<template>
    <section class="dasboard">
        <div class="dashboard__todolist">
            <Todolist />
        </div>

        <div class="dashboard__slideshow">
            <SlideShow />
        </div>

        <div class="dashboard__sort-table">
            <SortTableContent />    
        </div>

        <div class="dashboard__quiz-app">
            <QuizApp />
        </div>

        <div class="dashboard__contact-form">
            <ContactForm />
        </div>
        </section>
</template>
<script>
    import Todolist from '../components/Todolist.vue';
    import SortTableContent from '../components/SortTableContent.vue';
    import SlideShow from '../components/SlideShow.vue';
    import QuizApp from '../components/QuizApp.vue';
    import ContactForm from '../components/ContactForm.vue';

    export default {
        components: {
            Todolist,
            SortTableContent,
            SlideShow,
            QuizApp, 
            ContactForm
        },
    }
</script>
<style>
    .dasboard {
        width: 100%;
        height: 100vh;
        background: #F4F6FB;
        border: 1px solid #eee;
        box-shadow: 2px lightgray;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 10px;
    }

    .dashboard__todolist {
        grid-row: 1/3;
    }

    .dasboard > * {
        width: 100%;
        background: #fff;
        margin: 20px;
        border: 1px solid #eee;
        border-radius: 10px;
        overflow: scroll;
    }
</style>