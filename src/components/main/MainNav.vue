<template>
    <nav> </nav>
</template>

<script>
    import dataLoader from '../../mixins/dataLoader';
    import data from '../../content/general.md';

    export default {
        name: 'main-nav',

        mixins: [dataLoader(data)],
    };
</script>

<style lang="scss" scoped></style>
