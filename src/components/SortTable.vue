<template>
        <main class="sortTable__main">
                <div> {{ transactiondate }} </div>
                <div> {{ description }} </div>
                <div> {{ transaction }} </div>
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