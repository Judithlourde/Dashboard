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
                    <RouterLink :to="{ name: 'todolist' }">
                        <img src="../assets/svg/todo.svg" alt="to-do-logo">
                        <p>To Do List</p>  
                    </RouterLink>

                </li>
                <li>
                    <RouterLink :to="{ name: 'features' }">
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
    ol {
        /* border-right: 1px solid #9966CC; */
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-rows: repeat(7, 1fr);
        padding: 30px;
    }
    ol > li {
        list-style: none;
    }
    a {
        color: #000;
        /* display: grid; */
        /* grid-template-columns: 50px 150px; */
        display: flex;
        flex-direction: row;
        gap: 10px;
        
    }

</style>