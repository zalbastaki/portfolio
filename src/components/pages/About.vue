<template>
    <div id="about"> </div>
</template>

<script>
    import showdown from 'showdown';

    export default {
        name: 'about',

        props: {
            data: {
                type: Object,
                required: true,
            },
        },

        methods: {
            makeHtml(content) {
                const converter = new showdown.Converter();
                return converter.makeHtml(content);
            },
        },
    };
</script>

<style lang="scss" scoped></style>
