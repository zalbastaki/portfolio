<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'default',
    };
</script>

<style lang="scss">
    body {
        background-color: $background-color;
        font-family: $primary-font;
        color: $secondary-color;
    }
</style>
