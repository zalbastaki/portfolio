<template>
    <div id="home">
        <div class="text-wrapper">
            <base-text type="h1">{{ data.title }}</base-text>
            <base-text type="h2">{{ data.subtitle }}</base-text>

            <base-button @click="goto('contact')">
                Let's Talk!
            </base-button>
        </div>

        <div class="image-wrapper">
            <div
                class="image"
                :style="{ backgroundImage: `url(${data.image})` }"
            />
            <div class="image-bg" />
        </div>
    </div>
</template>

<script>
    import dataLoader from '../../mixins/dataLoader';
    import data from '../../content/home.md';

    export default {
        name: 'home',

        mixins: [dataLoader(data)],

        methods: {
            goto(id) {
                const el = document.getElementById(id);
                el.scrollIntoView();
            },
        },
    };
</script>

<style lang="scss" scoped>
    #home {
        flex-direction: row;
        align-items: center;

        .text-wrapper,
        .image-wrapper {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .text-wrapper {
            width: 55%;
            padding: 0 7.5%;

            .h1 {
                margin: 10px 0;
            }

            .button {
                margin-top: 100px;
            }
        }

        .image-wrapper {
            width: 40%;
            position: relative;

            .image {
                max-height: 600px;
                height: 70%;
                width: 70%;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                z-index: 1;
            }

            .image-bg {
                max-height: 750px;
                height: 80%;
                width: 75%;
                position: absolute;
                background: $tertiary-color;
                left: 50px;
            }
        }
    }
</style>
