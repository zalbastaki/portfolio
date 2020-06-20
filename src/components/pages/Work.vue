<template>
    <div id="work"> </div>
</template>

<script>
    import dataLoader from '../../mixins/dataLoader';
    import data from '../../content/work.md';

    export default {
        name: 'work',

        mixins: [dataLoader(data)],
    };
</script>

<style lang="scss" scoped></style>
