<template>
    <component :is="type" class="text" :class="[type, $mq]">
        <slot />
    </component>
</template>

<script>
    export default {
        name: 'base-text',

        props: {
            type: {
                type: String,
                required: false,
                default() {
                    return 'h2';
                },
            },
        },
    };
</script>

<style lang="scss" scoped>
    .h1 {
        font-family: $heading-font;
        font-weight: 300;
        font-size: 100px;
        color: $primary-color;
        margin: 10px 0;
        line-height: 1;

        &.tablet {
            font-size: 80px;
        }
    }

    .h2 {
        font-weight: 300;
        font-size: 35px;
        margin: 0;

        &.tablet {
            font-size: 28px;
        }
    }
</style>
