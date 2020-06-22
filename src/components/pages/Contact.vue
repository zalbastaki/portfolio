<template>
    <base-section name="contact">
        <div slot="other" class="background" />
        <template v-slot:left>
            <base-text type="h3">{{ data.title }}</base-text>
            <contact-form />
        </template>

        <template v-slot:right></template>
    </base-section>
</template>

<script>
    import dataLoader from '../../mixins/dataLoader';
    import data from '../../content/contact.md';

    import ContactForm from '../ContactForm';

    export default {
        name: 'contact',

        mixins: [dataLoader(data)],

        components: {
            ContactForm,
        },
    };
</script>

<style lang="scss">
    #contact {
        position: relative;

        .background {
            width: 100vw;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: $tertiary-color;
        }

        .left,
        .right {
            z-index: 1;
        }

        .left {
            z-index: 1;

            .h3 {
                margin-bottom: 30px;
            }
        }
    }
</style>
