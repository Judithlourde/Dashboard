<template>
    <section class="dashboard-section">
        <aside>
            <Sidebar />
        </aside>
        <main class="dashboard-section__main">
            <RouterView />
        </main> 
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
    @import '../css/reset.css';
	@import '../css/variables.css';
	@import '../css/style.css';
</style>