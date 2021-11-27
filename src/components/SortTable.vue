<template>
        <main class="sortTable__main">
            <div class="sortTable__main__transaction">
                <div> {{ transactiondate }} </div>
                <div> {{ description }} </div>
                <div> {{ transaction }} </div>
            </div>
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
    .sortTable__main__transaction {
        object-fit: cover;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }
</style>