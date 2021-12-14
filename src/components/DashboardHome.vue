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
       background: #F7F7F8; 
       border-radius: 15px;
    }

    .dashboard__component {
        width: 100%;
        height: 100%;
        border: 1px solid #eee;
        border-radius: 15px;
        background: #fff;
        margin: 3% 0;
        border-radius: 0.5em;
        box-shadow: 1px 1px 1px 1px #eee;
    }
    
    /* small devices (mobiles, 768px and down) */
    @media screen and (max-width: 768px) {
         .dashboard {
            margin: 2%;
            padding: 2%;
        }

        .dashboard__component {
            padding: 20px 0;
        }

        .dashboard__contact-form {
            margin-bottom: 80px;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media screen and (min-width: 768px) {
        .dashboard {
            display: grid;
            grid-template-columns: repeat(3, 32.5%);
            grid-auto-rows: repeat(3, 32.5%);
            gap: 10px;
            padding: 10px; 
        }

        .dashboard__todolist {
            grid-row: 1 / 3;
        } 
    }    
</style>