<template>
    <!-- <section class="container"> -->
        <section class="container__main">
            <div class="container__main--todoList">
                <Todolist />
            </div>
            <div class="container__main--slideShow">
                <RouterLink :to="{ name: 'features' }">Features of this Bank</RouterLink>
                <!-- <SlideShow /> -->
            </div>
            <div class="container__main--sortTable">
                <RouterLink :to="{ name: 'transaction' }">Customer Details</RouterLink>
                <!-- <SortTableContent />     -->
            </div> 
            <div class="container__main--quizApp">
                <RouterLink :to="{ name: 'quiz' }">Quiz App</RouterLink>
                <!-- <QuizApp /> -->
            </div>
            <div class="container__main--contactForm">
                <RouterLink :to="{ name: 'contact' }">Contact Us</RouterLink>
            </div>
        </section>
    <!-- </section> -->


</template>
<script>
    import Todolist from '../components/Todolist.vue';
    import SortTableContent from '../components/SortTableContent.vue';
    // import SlideShow from '../components/SlideShow.vue';
    // import QuizApp from '../components/QuizApp.vue';
    export default {
        components: {
            Todolist,
            SortTableContent,
            // SlideShow
            // QuizApp

        },
    }
</script>
<style>
    .container__main {
        height: 100vh;
        background: #F4F6FB;
        /* margin: 20px; */
        border: 1px solid #eee;
        box-shadow: 2px lightgray;
    }

    .container__main > * {
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;
        border: 1px solid #eee;
        border-radius: 10px;
    }

    .container__main--slideShow {
        background: linear-gradient(#7164e6, #9198e5);    
    }

    .container__main--quizApp{
        overflow-y: scroll;
    }

    @media screen and (min-width:786px) {
        .container__main {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
        }
        
        .container__main--todoList {
            grid-row: 1/3;
        }
    }
</style>