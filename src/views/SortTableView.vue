<template>
    <SortTableContent :class="{sortTableView:!sortTableView}"/>
</template>

<script>
import SortTableContent from '../components/SortTableContent.vue';

export default {
    components: {
        SortTableContent
    }
}
</script>

