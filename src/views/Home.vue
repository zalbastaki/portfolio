<template>
    <div>
        <home :data="data" />
        <about :data="data" />
        <work :data="data" />
        <contact :data="data" />
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
        name: 'home',

        mixins: [dataLoader(data)],

        components: {
            Home,
            About,
            Work,
            Contact,
        },
    };
</script>
