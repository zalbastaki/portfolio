<template>
    <div id="app">
        <main-nav />
        <router-view />
        <main-footer />
    </div>
</template>

<script>
    import MainNav from './components/main/MainNav';
    import MainFooter from './components/main/MainFooter';

    export default {
        name: 'default',

        components: {
            MainNav,
            MainFooter,
        },
    };
</script>

<style lang="scss">
    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
    }

    #app {
        background-color: $background-color;
        font-family: $primary-font;
        color: $secondary-color;
    }
</style>
