<template>
    <SlideShow :class="{slideShowView:!slideShowView}" />
</template>

<script>
import SlideShow from '../components/SlideShow.vue';

export default {
    components: {
        SlideShow
    }
}
</script>