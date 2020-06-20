<template>
    <component
        :is="type"
        :type="buttonType"
        :to="to"
        :href="href"
        :target="target"
        :rel="rel"
        class="button"
        :style="{
            width,
            height,
        }"
        @click="$emit('click')"
    >
        <slot />
    </component>
</template>

<script>
    export default {
        name: 'base-button',

        props: {
            type: {
                type: String,
                required: false,
                default() {
                    return 'button';
                },
            },

            buttonType: {
                type: String,
                required: false,
                default() {
                    return null;
                },
            },

            to: {
                type: String,
                required: false,
                default() {
                    return null;
                },
            },

            href: {
                type: String,
                required: false,
                default() {
                    return null;
                },
            },

            rel: {
                type: String,
                required: false,
                default() {
                    return null;
                },
            },

            target: {
                type: String,
                required: false,
                default() {
                    return null;
                },
            },

            width: {
                type: String,
                required: false,
                default() {
                    return '170px';
                },
            },

            height: {
                type: String,
                required: false,
                default() {
                    return '50px';
                },
            },
        },
    };
</script>

<style lang="scss" scoped>
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-family: $primary-font;
        color: $tertiary-color;
        border: 0;
        text-decoration: none;
        cursor: pointer;
        background: $primary-color;

        &:hover {
            background: darken($primary-color, 5%);
        }

        &:focus {
            outline: 3px solid rgba($primary-color, 0.3);
        }
    }
</style>
