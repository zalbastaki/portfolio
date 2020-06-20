<template>
    <div>
        <home class="page" :class="$mq" />
        <about class="page" :class="$mq" />
        <work class="page" :class="$mq" />
        <contact class="page" :class="$mq" />
    </div>
</template>

<script>
    import Home from '../components/pages/Home.vue';
    import About from '../components/pages/About.vue';
    import Work from '../components/pages/Work.vue';
    import Contact from '../components/pages/Contact.vue';

    export default {
        name: 'homepage',

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
        width: calc(100vw - #{$nav-width});
        max-width: 1700px;
        margin-left: $nav-width;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &.mobile {
            margin-left: $nav-width-mobile;
            width: calc(100vw - #{$nav-width-mobile});
        }
    }
</style>
