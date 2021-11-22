<template>
    <!-- <section class="container"> -->
        <section class="container__main">
            <div class="container__main--todoList">
                <RouterLink :to="{ name: 'todolist' }">Add To List</RouterLink>
            </div>
            <div class="container__main--slideShow">
                <RouterLink :to="{ name: 'features' }">Features of this Bank</RouterLink>
            </div>
            <div class="container__main--sortTable">
                <RouterLink :to="{ name: 'details' }">Customer Details</RouterLink>
            </div> 
            <div class="container__main--quizApp">
                <RouterLink :to="{ name: 'quiz' }">Quiz App</RouterLink>
            </div>
            <div class="container__main--contactForm">
                <RouterLink :to="{ name: 'contact' }">Contact Us</RouterLink>
            </div>
        </section>
    <!-- </section> -->


</template>

<style scoped>
    .container__main {
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