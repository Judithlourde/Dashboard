<template>
    <main class="sortTable__data">
        <div> {{ transactiondate }} </div>
        <div> {{ description }} </div>
        <div> - {{ transaction }} </div>
    </main>    
</template>

<script>
    export default {
        props: {    
            transactiondate: String, 
            description: String,
            transaction: String,
        },    
    }
</script>

<style>
    .sortTable__data {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: .5rem;
        gap: .5rem;
    }
</style>