<template>
    <!-- <section class="container"> -->
        <section class="container__main">
            <div class="container__main--todoList">
                <Todolist />
<<<<<<< HEAD
                <!-- <RouterLink :to="{ name: 'todolist' }">Add To List</RouterLink> -->
=======
>>>>>>> 57954d0daee2f9c31b092125bb27723dca7ad5e0
            </div>
            <div class="container__main--slideShow">
                <RouterLink :to="{ name: 'features' }">Features of this Bank</RouterLink>
            </div>
            <div class="container__main--sortTable">
                <!-- <RouterLink :to="{ name: 'details' }">Customer Details</RouterLink> -->
                <SortTableContent />    
            </div> 
            <div class="container__main--quizApp">
<<<<<<< HEAD
                <RouterLink :to="{ name: 'quiz' }">Quiz App</RouterLink>
                <!-- <QuizApp /> -->
=======
                <QuizApp />
>>>>>>> 57954d0daee2f9c31b092125bb27723dca7ad5e0
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
    // import QuizApp from '../components/QuizApp.vue';
    export default {
        components: {
            Todolist,
            SortTableContent
            // QuizApp

<<<<<<< HEAD
        },
    }
</script>
<style>
=======
<script>
import Todolist from '../components/Todolist.vue'
import QuizApp from '../components/QuizApp.vue'

export default {
    components: {
        Todolist,
        QuizApp
    },
}
</script>


<style scoped>
>>>>>>> 57954d0daee2f9c31b092125bb27723dca7ad5e0
    .container__main {
        height: 100vh;
        background: #F7F7F8;
        margin: 20px;
        border: 1px solid #eee;
        border-radius: 15px;
        box-shadow: 2px lightgray;
        /* display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;   */
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