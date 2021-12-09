<template>
    <section class="dashboard">
        <div class="dashboard__component dashboard__todolist">
            <Todolist />    
        </div>

        <div class="dashboard__component dashboard__slideshow">
            <SlideShow />
        </div>

        <div class="dashboard__component dashboard__sort-table">
            <SortTableContent />        
        </div>

        <div class="dashboard__component dashboard__quiz-app">
            <QuizApp />    
        </div>

        <div class="dashboard__component dashboard__contact-form">
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
    .dashboard {
        border: 1px solid #eee;
        box-shadow: 2px lightgray;
        display: grid;
        grid-template-columns: repeat(3, 32.5%);
        gap: 10px;
        padding: 10px; 
    }

    .dashboard__todolist {
        grid-row: 1 / 3;
    } 

    .dashboard__slideshow {
        position: relative;
    }

    .dashboard__component {
        position: relative;
        width: 100%;
        height: 100%;
        border: 1px solid #eee;
        border-radius: 15px;
        background: #fff;
        /* box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);  */
    }

    .dashboard-mobile {
        /* display: none; */
    }
    .dashboard-mobile__contact-form {
        text-decoration: underline;
        display: flex;
        border: 1px solid #eee;
        justify-content: center;
        color: green;
    }
   
     
</style>