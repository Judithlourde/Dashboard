<template>
     <div class="condtainer__side-bar">
            <ol>
                <li>
                    <img src="../assets/svg/logo.svg" alt="logo-Rash Bnak">
                </li>
                <li>
                    <RouterLink :to="{ name: 'dashboard' }">
                        <img src="../assets/svg/dashboard.svg" alt="dashboard-logo">
                        <p>Dashboard</p>  
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'todolist'}">
                        <img src="../assets/svg/todo.svg" alt="to-do-logo">
                        <p>To Do List</p>  
                    </RouterLink>

                </li>
                <li>
                    <RouterLink :to="{ name: 'features'}">
                        <img src="../assets/svg/features.svg" alt="features-logo">
                        <p>Loans</p>  
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'quiz' }">
                        <img src="../assets/svg/quiz.svg" alt="quiz-logo">
                        <p>Take a test</p>  
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'transaction' }">
                        <img src="../assets/svg/table.svg" alt="sort-table-logo">
                        <p>Overview</p>  
                    </RouterLink>
                </li>
                <li>
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
    .condtainer__side-bar {
        width: 100%;
        height: 100%;
        padding: 20px;
        font-size: 1.5rem;
    }

    ol {
        display: grid;
        grid-template-rows: repeat(7, 90px);
        
    }

    ol > li {
        list-style: none;
       
    }

    li > img {
        width: 150px;
        padding: 10px 0;
    }
    
    a {
        color: #000;
        display: flex;
        flex-direction: row;
        gap: 10px;  
    }

    a > img {
        padding: 0 10px;
    }

</style>