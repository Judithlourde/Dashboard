<template>
    <ContactForm :class="{contactFormView:!contactFormView}" />
</template>

<script>
import ContactForm from '../components/ContactForm.vue';

export default {
    components: {
        ContactForm
    }
}
</script>