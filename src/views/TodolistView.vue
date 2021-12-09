<template>
    <Todolist :class="{todoView:!todoView}" />
</template>

<script>
import Todolist from '../components/Todolist.vue';

export default {
    components: {
        Todolist
    }
}
</script>

