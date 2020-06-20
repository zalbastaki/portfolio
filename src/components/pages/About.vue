<template>
    <div id="about">
        <div class="text-wrapper">
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
        </div>

        <div class="skills-wrapper">
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
        </div>
    </div>
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

<style lang="scss" scoped>
    #about {
        flex-direction: row;
        align-items: center;

        .text-wrapper,
        .skills-wrapper {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .text-wrapper {
            width: 55%;
            padding: 0 7.5%;
            background: $tertiary-color;

            .p {
                margin-top: 20px;
            }

            .button {
                margin-top: 50px;
            }
        }

        .skills-wrapper {
            width: 40%;
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
