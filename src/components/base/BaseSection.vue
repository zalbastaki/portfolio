<template>
    <div :id="name" class="base-section" :class="$mq">
        <slot name="other" />
        <div class="left">
            <base-text type="tag" class="opening">
                &lt;div id="{{ name }}"&gt;
            </base-text>
            <slot name="left" />
            <base-text type="tag" class="closing">
                &lt;/div&gt;
            </base-text>
        </div>
        <div class="right">
            <slot name="right" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'base-section',

        props: {
            name: {
                type: String,
                required: true,
            },
        },
    };
</script>

<style lang="scss" scoped>
    .base-section {
        height: 100vh;
        width: calc(100vw - #{$nav-width});
        max-width: 1700px;
        margin-left: $nav-width;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        &.mobile {
            margin-left: $nav-width-mobile;
            width: calc(100vw - #{$nav-width-mobile});
        }

        .left,
        .right {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .left {
            width: 55%;
            padding: 0 7.5%;
        }

        .right {
            width: 40%;
        }

        .opening,
        .closing {
            margin: 20px 0 0 -30px;
        }
    }
</style>
