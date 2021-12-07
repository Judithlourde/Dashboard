<template>
        <section class="sortTable">
            <header class="sortTable__header">
                <h1>Recent Transaction</h1>
                <div>
                    <div class="sortTable__header-date">
                        <h3 @click="sortBy('transactiondate')">Date</h3>  
                        <svg @click="toggleSortOrder" width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.31501 32.3076C9.39146 32.4186 9.49375 32.5094 9.61308 32.5721C9.73241 32.6348 9.8652 32.6676 10 32.6676C10.1348 32.6676 10.2676 32.6348 10.3869 32.5721C10.5063 32.5094 10.6086 32.4186 10.685 32.3076L18.185 21.4742C18.2718 21.3493 18.3227 21.2029 18.3322 21.0511C18.3417 20.8992 18.3094 20.7477 18.2387 20.6129C18.1681 20.4781 18.0619 20.3653 17.9317 20.2866C17.8015 20.208 17.6522 20.1665 17.5 20.1667H2.50001C2.34821 20.1674 2.19946 20.2094 2.06974 20.2882C1.94003 20.3671 1.83426 20.4798 1.76382 20.6142C1.69337 20.7487 1.66091 20.8998 1.66993 21.0514C1.67895 21.2029 1.72911 21.3491 1.81501 21.4742L9.31501 32.3076Z" fill="black"/>
                            <path d="M10.7364 3.82451C10.6584 3.71457 10.5548 3.62524 10.4346 3.56423C10.3144 3.50321 10.1812 3.47233 10.0464 3.47425C9.91157 3.47616 9.77926 3.51082 9.66083 3.57522C9.54241 3.63963 9.44141 3.73186 9.36655 3.84397L2.02123 14.7828C1.9362 14.9089 1.88737 15.056 1.88006 15.208C1.87274 15.36 1.90722 15.511 1.97973 15.6448C2.05225 15.7785 2.16003 15.8899 2.29138 15.9667C2.42272 16.0435 2.5726 16.0828 2.72473 16.0804L17.7232 15.8673C17.875 15.8645 18.0231 15.8204 18.1517 15.7397C18.2803 15.659 18.3845 15.5448 18.453 15.4094C18.5215 15.2739 18.5518 15.1224 18.5406 14.971C18.5295 14.8196 18.4772 14.6741 18.3896 14.5502L10.7364 3.82451Z" fill="black"/>
                        </svg>
                    </div>

                    <div class="sortTable__header-description">
                        <h3>Description</h3>  
                    </div>

                    <div class="sortTable__header-transaction">
                        <h3 @click="sortBy('transaction')">Transaction</h3>  
                        <svg @click="toggleSortOrder" width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.31501 32.3075C9.39146 32.4185 9.49375 32.5093 9.61308 32.572C9.73241 32.6347 9.8652 32.6675 10 32.6675C10.1348 32.6675 10.2676 32.6347 10.3869 32.572C10.5063 32.5093 10.6086 32.4185 10.685 32.3075L18.185 21.4741C18.2718 21.3492 18.3227 21.2028 18.3322 21.051C18.3417 20.8991 18.3094 20.7476 18.2387 20.6128C18.1681 20.478 18.0619 20.3652 17.9317 20.2865C17.8015 20.2078 17.6522 20.1664 17.5 20.1666H2.50001C2.34821 20.1673 2.19946 20.2092 2.06974 20.2881C1.94003 20.3669 1.83426 20.4797 1.76382 20.6141C1.69337 20.7486 1.66091 20.8997 1.66993 21.0512C1.67895 21.2028 1.72911 21.349 1.81501 21.4741L9.31501 32.3075Z" fill="#013E40"/>
                            <path d="M10.7364 3.82438C10.6584 3.71445 10.5548 3.62512 10.4346 3.56411C10.3144 3.50309 10.1812 3.47221 10.0464 3.47413C9.91157 3.47604 9.77926 3.51069 9.66083 3.5751C9.54241 3.63951 9.44141 3.73174 9.36655 3.84385L2.02123 14.7826C1.9362 14.9088 1.88737 15.0559 1.88006 15.2079C1.87274 15.3598 1.90722 15.5109 1.97973 15.6447C2.05225 15.7784 2.16003 15.8897 2.29138 15.9665C2.42272 16.0433 2.5726 16.0827 2.72473 16.0803L17.7232 15.8672C17.875 15.8644 18.0231 15.8203 18.1517 15.7396C18.2803 15.6589 18.3845 15.5447 18.453 15.4093C18.5215 15.2738 18.5518 15.1222 18.5406 14.9708C18.5295 14.8195 18.4772 14.674 18.3896 14.5501L10.7364 3.82438Z" fill="#6429D5"/>
                        </svg>
                    </div>
                </div>
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
        /* min-width: calc(1000px + 14%); */
        font-size: .85rem;
        display: flex;
        flex-direction: column;
        padding: .5rem;
        /* font-size: calc(10px + (24 - 16)*(100vw - 1200px)/(1200 - 400)); */
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
</style>
