<template>
    <base-section name="home">
        <template v-slot:left>
            <base-text type="h1">{{ data.title }}</base-text>
            <base-text type="h2">{{ data.subtitle }}</base-text>

            <base-button @click="goto('contact')">
                Let's Talk!
            </base-button>
        </template>

        <template v-slot:right>
            <div
                class="image"
                :style="{ backgroundImage: `url(${data.image})` }"
            >
                <base-text type="tag" class="opening">&lt;img&gt;</base-text>
                <base-text type="tag" class="closing">&lt;/img&gt;</base-text>
            </div>
            <div class="image-bg" />
        </template>
    </base-section>
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

<style lang="scss">
    #home {
        .left {
            .h1 {
                margin-bottom: 10px;
            }

            .button {
                margin-top: 100px;
            }
        }

        .right {
            position: relative;

            .image {
                max-height: 600px;
                height: 70%;
                width: 70%;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                z-index: 1;
                position: relative;

                .tag {
                    position: absolute;
                    margin: 0 10px;

                    &.opening {
                        top: -25px;
                    }

                    &.closing {
                        bottom: -25px;
                    }
                }
            }

            .image-bg {
                max-height: 750px;
                height: 80%;
                width: 80%;
                position: absolute;
                background: $tertiary-color;
                left: 50px;
            }
        }
    }
</style>
