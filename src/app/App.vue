<template>
    <section>
        <div>
            <Sidebar />
        </div>
        <div>
            <RouterView />
        </div> 
    </section> 
</template>

<script>
    import Sidebar from "../components/Sidebar.vue";
    export default {
       components: {
            Sidebar,
        },
   }
</script>

<style>
    section {
        height: 100vh; 
        display: grid;
        grid-template-columns: 200px 2fr;
        grid-template-rows: 1fr 1fr;
    }
</style>