<template>
    <div id="about"> </div>
</template>

<script>
    import dataLoader from '../../mixins/dataLoader';
    import data from '../../content/about.md';
    import showdown from 'showdown';

    export default {
        name: 'about',

        mixins: [dataLoader(data)],

        methods: {
            makeHtml(content) {
                const converter = new showdown.Converter();
                return converter.makeHtml(content);
            },
        },
    };
</script>

<style lang="scss" scoped></style>
