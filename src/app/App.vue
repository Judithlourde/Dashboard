<template>
    <section class="home">
        <aside class="home__sidebar">
            <Sidebar />
        </aside> 
        
        <main class="home__main"> 
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
	@import '../css/fonts.css';
</style>


