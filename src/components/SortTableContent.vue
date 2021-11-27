<template>
        <section class="sortTabel">
            <header class="sortTable__header">
                <h1>Recent Transaction</h1>
            </header>
            <SortTable
                v-for="transactionDetail in transactionDetails"
                :key="transactionDetail.id"
                :transactiondate="transactionDetail.transactiondate"
                :description="transactionDetail.description"
                :transaction="transactionDetail.transaction"
            /> 
        </section>   
</template>

<script>
import SortTable from '../components/SortTable.vue';
export default {
    components: {
        SortTable
    },
    data() {
        return {
            transactionDetails: [
                {   id: 1,
                    transactiondate: '22/11/2021', 
                    description: 'Kiwi Hosle',
                    transaction: '-220,64',
                },
                {   
                    id: 2,
                    transactiondate: '20/11/2021', 
                    description: 'Peter Vipps',
                    transaction: '-2000,00',
                },
                { 
                    id: 3,
                    transactiondate: '19/11/2021', 
                    description: 'Meny Bekkestua',
                    transaction: '-320,64',
                },
            
            ],
        }
    }
    
}
</script>

<style>
    .sortTable {
        margin: 20px;
        background: cornflowerblue;
        margin: 100px auto;
        max-width: 80vw;
        height: 80vh;
    }    
</style>
