<template>
    <div>
        <home :data="data" class="page" />
        <about :data="data" class="page" />
        <work :data="data" class="page" />
        <contact :data="data" class="page" />
    </div>
</template>

<script>
    import dataLoader from '../mixins/dataLoader';
    import data from '../content/home.md';

    import Home from '../components/pages/Home.vue';
    import About from '../components/pages/About.vue';
    import Work from '../components/pages/Work.vue';
    import Contact from '../components/pages/Contact.vue';

    export default {
        name: 'homepage',

        mixins: [dataLoader(data)],

        components: {
            Home,
            About,
            Work,
            Contact,
        },
    };
</script>

<style lang="scss" scoped>
    .page {
        height: 100vh;
    }
</style>
