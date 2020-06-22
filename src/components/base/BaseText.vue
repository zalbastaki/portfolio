<template>
    <component
        :is="type === 'tag' ? 'p' : type"
        class="text"
        :class="[type, $mq]"
    >
        <span>
            <p v-if="type !== 'tag'" class="tag opening">&lt;{{ type }}&gt;</p>
            <slot />
            <p v-if="type !== 'tag'" class="tag closing">&lt;/{{ type }}&gt;</p>
        </span>
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

        span {
            position: relative;
        }

        .tag {
            position: absolute;
            bottom: 0;

            &.opening {
                left: -25px;
            }

            &.closing {
                right: -30px;
            }
        }
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

        .tag {
            bottom: 25px;
        }
    }

    .h2 {
        font-weight: 300;
        font-size: 35px;

        &.tablet {
            font-size: 28px;
        }

        .tag {
            bottom: 5px;
        }
    }

    .h3 {
        font-family: $heading-font;
        font-weight: 300;
        font-size: 50px;
        color: $primary-color;

        .tag {
            bottom: 10px;
        }
    }

    .p {
        line-height: 1.5;
    }

    .tag {
        font-family: $secondary-font;
        color: rgba($primary-color, 0.4);
        font-size: 18px;
        margin: 0;
    }
</style>
