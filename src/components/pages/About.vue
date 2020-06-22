<template>
    <base-section name="about">
        <template v-slot:left>
            <base-text type="h3">{{ data.title }}</base-text>

            <base-text type="p" v-html="makeHtml(data.content)" />

            <base-button
                type="a"
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
            >
                View Resume
            </base-button>
        </template>

        <template v-slot:right>
            <div />
            <div
                v-for="(skill, index) in data.skills"
                :key="index"
                class="skill"
                :style="{
                    width: `${skill.proficiency - 8}%`,
                    height: `${skillHeight}%`,
                }"
            >
                {{ skill.name }}
            </div>
            <div />
        </template>
    </base-section>
</template>

<script>
    import dataLoader from '../../mixins/dataLoader';
    import data from '../../content/about.md';
    import showdown from 'showdown';

    export default {
        name: 'about',

        mixins: [dataLoader(data)],

        computed: {
            skillHeight() {
                return 100 / ((this.data.skills.length + 2) * 2);
            },
        },

        methods: {
            makeHtml(content) {
                const converter = new showdown.Converter();
                return converter.makeHtml(content);
            },
        },
    };
</script>

<style lang="scss">
    #about {
        .left {
            background: $tertiary-color;

            .p {
                margin-top: 20px;
            }

            .button {
                margin-top: 50px;
            }
        }

        .right {
            justify-content: space-evenly;

            .skill {
                background: $primary-color;
                color: $tertiary-color;
                display: flex;
                align-items: center;
                padding-left: 3%;
                font-size: 18px;
            }
        }
    }
</style>
