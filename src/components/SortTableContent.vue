<template>
    <section class="sortTable" :class="{sortTableView: sortTableView}">
        <header class="sortTable__header">
            <h1>Recent Transaction</h1>
            
            <div>
                <div class="sortTable__header-date">
                    <h3 @click="sortBy('transactiondate')">Date</h3> 
                    
                    <img @click="toggleSortOrder" src="/svg/asc_desc_arrows.svg" alt="ascending-descending-arrows">
                </div>

                <div class="sortTable__header-description">
                    <h3>Description</h3>  
                </div>

                <div class="sortTable__header-transaction">
                    <h3 @click="sortBy('transaction')">Transaction</h3> 

                    <img @click="toggleSortOrder" src="/svg/asc_desc_arrows.svg" alt="ascending-descending-arrows">
                </div>
            </div>

            <hr>
        </header>

        <SortTable
            v-for="row in naturalSort"
            :key="row.id"
            :transactiondate="row.transactiondate"
            :description="row.description"
            :transaction="row.transaction"
        />
    </section>
</template>

<script>
    import SortTable from '../components/SortTable.vue';

    const transactionData = `[{ "transactiondate": "03/11/2021", "description": "Outdoors", "transaction": "$589.94" }, { "transactiondate": "07/11/2021", "description": "Clothing", "transaction": "$370.19" }, { "transactiondate": "16/11/2021", "description": "Beauty", "transaction": "$58.69" }, { "transactiondate": "19/11/2021", "description": "Health", "transaction": "$570.75" }, { "transactiondate": "12/11/2021", "description": "Outdoors", "transaction": "$61.01" }, { "transactiondate": "16/11/2021", "description": "Baby", "transaction": "$598.19" }, { "transactiondate": "18/11/2021", "description": "Home", "transaction": "$765.52" }, { "transactiondate": "16/11/2021", "description": "Computers", "transaction": "$313.29" }, { "transactiondate": "09/11/2021", "description": "Clothing", "transaction": "$687.43" }, { "transactiondate": "20/11/2021", "description": "Books", "transaction": "$519.88" }]`
    export default {
        components: {
            SortTable
        },

        data() {
            return {
                sortTableView: false,
                sort: {
                    key: 'transactiondate',
                    order: 'asc',
                },
                transactions: JSON.parse(transactionData),
            };
        },

        created() {
            const query = this.$route.query;

            if (query.sort) {
                this.sort.key = query.sort;
            }

            if (query.order) {
                this.sort.order = query.order;
            }
        },

        computed: {
            naturalSort() {
                const key = this.sort.key;
                const orderValue = this.sort.order === 'asc' ? 1 : -1;

                function compareFunction(a, b) {
                    a = a[key].toString();
                    b = b[key].toString();

                    return a.localeCompare(b, undefined, { numeric: true });
                }

                return this.transactions.sort((a, b) => compareFunction(a, b) * orderValue);
            },

            stylingSortTableView() {
                return this.sortTableView
            }
        },

        methods: {
            sortBy(key) {
                this.sort.key = key;
                this.$router.push({ query: { ...this.$route.query, sort: this.sort.key } })
            },

            toggleSortOrder() {
                this.sort.order = this.sort.order === 'asc' ? 'desc' : 'asc';
                this.$router.push({ query: { ...this.$route.query, order: this.sort.order } })
            }   
        },
    };
</script>

<style>
    .sortTable {
        font-size: .85rem;
        display: flex;
        flex-direction: column;
    }

    .sortTable__header {
        padding: .5rem 0;
    }

    .sortTable__header > h1 {
        padding: .5rem;
    }

    .sortTable__header > div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: .5rem;
    }   
       
    .sortTable__header-date, 
    .sortTable__header-transaction,
    .sortTable__header-description {
        display: flex;
        flex-direction: row;
        gap: .5rem;
        padding: .5rem;
        cursor: pointer;
        align-items: center;
    }

    .sortTable__header-date > svg, 
    .sortTable__header-transaction > svg {
        width: .85rem;
    }

    /* styling for view */
        .sortTableView {
            border-radius: 15px; 
            box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
            background: #fff;
            padding: 2%;
        }

    /* small devices (mobiles, 768px and down) */
    @media screen and (max-width: 768px) {
        .sortTableView {
            margin: 5vh;
            font-size: .65rem;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media screen and (min-width: 768px) {
        .sortTableView {
            height: 80%; 
            margin: 10vh;
            font-size: 1.25rem;
        }  
    }
</style>
