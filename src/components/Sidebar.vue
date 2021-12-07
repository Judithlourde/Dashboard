<template>
     <div class="side-bar">
            <ol class="side-bar__list">
                <li class="side-bar__list-logo">
                    <img src="../assets/svg/logo.svg" alt="logo-Rash Bnak">
                </li>
                
                <li class="side-bar__list-links">
                    <RouterLink :to="{ name: 'dashboard' }">
                        <img src="../assets/svg/dashboard.svg" alt="dashboard-logo">
                        <p>Dashboard</p>  
                    </RouterLink>
                </li>
                
                <li class="side-bar__list-links">
                    <RouterLink :to="{ name: 'todolist'}">
                        <img src="../assets/svg/todo.svg" alt="to-do-logo">
                        <p>To Do List</p>  
                    </RouterLink>

                </li>
                
                <li class="side-bar__list-links">
                    <RouterLink :to="{ name: 'loans'}">
                        <img src="../assets/svg/features.svg" alt="features-logo">
                        <p>Loans</p>  
                    </RouterLink>
                </li>
                
                <li class="side-bar__list-links">
                    <RouterLink :to="{ name: 'quiz' }">
                        <img src="../assets/svg/quiz.svg" alt="quiz-logo">
                        <p>Take a test</p>  
                    </RouterLink>
                </li>
                
                <li class="side-bar__list-links">
                    <RouterLink :to="{ name: 'transaction' }">
                        <img src="../assets/svg/table.svg" alt="sort-table-logo">
                        <p>Overview</p>  
                    </RouterLink>
                </li>
                
                <li class="side-bar__list-links">
                    <RouterLink :to="{ name: 'contact' }">
                        <img src="../assets/svg/contact.svg" alt="contact-logo">
                        <p>Contact</p>  
                    </RouterLink>
                </li>
            </ol>
        </div>
</template>

<script>

</script>

<style>
    .side-bar {
        width: 100%;
        height: 100%;
        padding: 20px;
        font-size: 1.5rem;
        border-right: 1px solid #eee;
    }

    .side-bar__list > li {
        list-style: none;
        border-bottom: 1px solid #eee;
    }

    .side-bar__list > li > img {
        width: 100%;
    }

    .side-bar__list-links {
        padding: 20px 0;
    }
    
    .side-bar__list-links > a {
        color: #000;
        display: flex;
        flex-direction: row;
        gap: 1vh;  
    }
    .side-bar__list-links > a > img {
        padding: 0 10px;
      
    }
    .router-link-active > p {
        color: #fff;
    }

    .router-link-active {
        background: #6429D5;
        padding: 10px;
        border-radius: 10px;
    }

</style>