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
    .text {
        margin: 0;
    }

    .h1 {
        font-family: $heading-font;
        font-weight: 300;
        font-size: 100px;
        color: $primary-color;
        line-height: 1;

        &.tablet {
            font-size: 80px;
        }
    }

    .h2 {
        font-weight: 300;
        font-size: 35px;

        &.tablet {
            font-size: 28px;
        }
    }

    .h3 {
        font-family: $heading-font;
        font-weight: 300;
        font-size: 50px;
        color: $primary-color;
    }

    .p {
        line-height: 1.5;
    }
</style>
