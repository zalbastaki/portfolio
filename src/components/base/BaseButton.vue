<template>
    <component
        :is="type"
        :type="buttonType"
        :to="to"
        :href="href"
        :target="target"
        :rel="rel"
        class="button"
        :class="design"
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
                required: true,
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

            design: {
                type: String,
                required: false,
                default() {
                    return 'primary';
                },
            },

            width: {
                type: String,
                required: false,
                default() {
                    return '228px';
                },
            },

            height: {
                type: String,
                required: false,
                default() {
                    return '57px';
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
        font-size: 20;
        font-weight: bold;
        color: #fff;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
        border: 0;
        text-decoration: none;
        cursor: pointer;

        &.primary {
            background: blue;

            &:hover {
                background: darken(blue, 5%);
            }

            &:focus {
                outline: 3px solid rgba(blue, 0.3);
            }
        }

        &.secondary {
            background: purple;

            &:hover {
                background: darken(purple, 5%);
            }

            &:focus {
                outline: 3px solid rgba(purple, 0.3);
            }
        }
    }
</style>
