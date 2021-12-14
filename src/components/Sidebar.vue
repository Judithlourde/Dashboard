<template>
    <div class="side-bar">
        <ol class="side-bar__list">
            <li class="side-bar__logo">
                <img src="/svg/logo.svg" alt="logo-Rash Bank">
            </li>
            
            <li class="side-bar__list-links">
                <RouterLink :to="{ name: 'dashboard' }">
                    <img src="/svg/dashboard.svg" alt="dashboard-logo">
                    
                    <p>Dashboard</p>  
                </RouterLink>
            </li>
            
            <li class="side-bar__list-links">
                <RouterLink :to="{ name: 'todolist' }">
                    <img src="/svg/todo.svg" alt="to-do-logo">
                    
                    <p>To Do List</p>  
                </RouterLink>

            </li>
                
            <li class="side-bar__list-links">
                <RouterLink :to="{ name: 'loans'}">
                    <img src="/svg/loans.svg" alt="loans-logo">
                    
                    <p>Loans</p>  
                </RouterLink>
            </li>
            
            <li class="side-bar__list-links">
                <RouterLink :to="{ name: 'quiz' }">
                    <img src="/svg/quiz.svg" alt="quiz-logo">
                    
                    <p>Take a test</p>  
                </RouterLink>
            </li>
                
            <li class="side-bar__list-links">
                <RouterLink :to="{ name: 'transaction' }">
                    <img src="/svg/table.svg" alt="sort-table-logo">
                    
                    <p>Overview</p>  
                </RouterLink>
            </li>
                
            <li class="side-bar__list-links">
                <RouterLink :to="{ name: 'contact' }">
                    <img src="/svg/contact.svg" alt="contact-logo">
                    
                    <p>Contact</p>  
                </RouterLink>
            </li>

            <li class="side-bar__bank-card">
                <p>Richard Nilson</p>
                <p>1234 **** **** 7890</p>
                <p>09 / 31</p>
            </li>
        </ol>
    </div>           
</template>

<script>

</script>

<style>
    /* small devices (mobiles, 768px and down) */
    @media screen and (max-width: 768px) {
        .side-bar {
            width: 100vw;
        }

        .side-bar__list {
            border-top: 2px solid var(--purple);
            padding: 3px;
            position: fixed;
            bottom: 0;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            list-style-type: none;
            z-index: 700;
            background: #fff;
        }

        .side-bar__logo {
            display: none;
        }

        .side-bar__list-links > a {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .side-bar__list-links > a > img {
            padding: 8px;
            width: 75%;
        }

        .side-bar__list-links > a > p {
            padding: 2px;
            font-size: 10px;
            color: var(--purple);
        }

        .side-bar__bank-card {
            display: none;
        }

        /* active links styling */
        .router-link-active > p {
            text-decoration: underline;
        }

        .router-link-active > img {
            background: linear-gradient(#9c3ee8, var(--purple));    
        } 
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media screen and (min-width: 768px) {
        .side-bar {
            width: 100%;
            height: 100%;
            padding: 20px;
            font-size: 1.5rem;
            border-right: 1px solid #eee;
        }

        .side-bar__list {
            width: 100%;
            list-style-type: none;
            z-index: 700;
            background: #fff;
        }

        .side-bar__logo > img {
            width: 100%;
        }

        .side-bar__list > li {
            list-style: none;
            border-bottom: 1px solid #eee;
        }

        .side-bar__list-links {
            padding: 20px 0;
        }

        .side-bar__list-links > a {
            color: #000;
            display: flex;
            flex-direction: row;
            gap: 2%;  
        }

        .side-bar__list-links > a > img {
            width: 60px;
        }

        .side-bar__bank-card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin: 5px;
            width: 210px;
            height: 150px;
            border-radius: 15px;
            background: linear-gradient(#9c3ee8, var(--purple));
        }

        .side-bar__bank-card > p {
            padding: 10px;
            color: #fff;
            font-size: 18px;
        }

        /* activ links styling */
        .router-link-active > p {
            color: #fff;
        }

        .router-link-active {
            background: linear-gradient(#9c3ee8, var(--purple));
            padding: 10px;
            border-radius: 10px;
        }       
    }

</style>