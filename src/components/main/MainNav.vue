<template>
    <nav id="main-nav" :class="$mq">
        <img id="logo" :src="data.logo" alt="logo" @click="goto('home')" />

        <ul id="menu">
            <li
                v-for="(menuItem, index) in menu"
                :key="index"
                class="menu-item"
                :class="$mq"
                @click="goto(menuItem.id)"
            >
                <div
                    class="menu-indicator"
                    :class="{ show: menuItem.inView }"
                />
                {{ menuItem.label }}
            </li>
        </ul>

        <ul id="social">
            <li class="social-item" :class="$mq">
                <a :href="`mailto:${data.email}?subject=Let's Talk.`">
                    <fa-icon :icon="['fas', 'envelope']" aria-label="email" />
                </a>
            </li>
            <li class="social-item" :class="$mq">
                <a :href="data.linkedin" target="_blank" rel="noopener">
                    <fa-icon
                        :icon="['fab', 'linkedin-in']"
                        aria-label="linkedin"
                    />
                </a>
            </li>
            <li class="social-item" :class="$mq">
                <a :href="data.github" target="_blank" rel="noopener">
                    <fa-icon :icon="['fab', 'github']" aria-label="github" />
                </a>
            </li>
            <li class="social-item" :class="$mq">
                <a href="/resume.pdf" target="_blank" rel="noopener">
                    <fa-icon :icon="['fas', 'file']" aria-label="resume" />
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    import dataLoader from '../../mixins/dataLoader';
    import data from '../../content/general.md';

    export default {
        name: 'main-nav',

        mixins: [dataLoader(data)],

        data() {
            return {
                menu: [
                    { id: 'home', label: 'Home', inView: true },
                    { id: 'about', label: 'About', inView: false },
                    { id: 'work', label: 'Work', inView: false },
                    { id: 'contact', label: 'Contact', inView: false },
                ],
            };
        },

        mounted() {
            window.addEventListener('scroll', this.checkView);
        },

        methods: {
            goto(id) {
                const el = document.getElementById(id);
                el.scrollIntoView();
            },

            checkView() {
                this.menu.forEach(menuItem => {
                    menuItem.inView = false;

                    if (this.inView(menuItem.id)) {
                        menuItem.inView = true;
                    }
                });
            },

            inView(id) {
                const el = document.getElementById(id);
                const rect = el.getBoundingClientRect();
                const halfHeight = window.innerHeight / 2;

                return rect.y >= -halfHeight && rect.y <= halfHeight;
            },
        },
    };
</script>

<style lang="scss" scoped>
    #main-nav {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: $nav-width;
        background-color: $tertiary-color;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 30px 0;

        &.mobile {
            width: $nav-width-mobile;
            padding: 15px 0;
        }
    }

    #logo {
        width: 30px;
        cursor: pointer;
    }

    #menu,
    #social {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        a {
            text-decoration: none;
            color: $primary-color;
        }
    }

    .menu-item {
        transform: rotate(-180deg);
        writing-mode: vertical-lr;
        color: $primary-color;
        cursor: pointer;

        &:not(:first-of-type) {
            margin: 25px 0 0;
        }

        &.mobile:not(:first-of-type) {
            margin: 15px 0 0;
        }

        .menu-indicator {
            height: 100%;
            width: 1px;
            background-color: $primary-color;
            margin-right: 3px;
            max-height: 0;

            &.show {
                max-height: 100px;
                transition: max-height ease-in-out 0.5s;
            }
        }
    }

    .social-item {
        &:not(:first-of-type) {
            margin: 15px 0 0;
        }

        &.mobile:not(:first-of-type) {
            margin: 10px 0 0;
        }
    }
</style>
