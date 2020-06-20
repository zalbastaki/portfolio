<template>
    <div id="contact"> </div>
</template>

<script>
    import dataLoader from '../../mixins/dataLoader';
    import data from '../../content/contact.md';

    export default {
        name: 'contact',

        mixins: [dataLoader(data)],
    };
</script>

<style lang="scss" scoped></style>
