<template>
    <div id="homepage">
        <div class="opening-tags" :class="$mq">
            <base-text type="tag">&lt;html&gt;</base-text>
            <base-text type="tag" class="body-tag">&lt;body&gt;</base-text>
        </div>
        <home />
        <about />
        <work />
        <contact />
        <div class="closing-tags" :class="$mq">
            <base-text type="tag" class="body-tag">&lt;/body&gt;</base-text>
            <base-text type="tag">&lt;/html&gt;</base-text>
        </div>
    </div>
</template>

<script>
    import Home from '../components/pages/Home.vue';
    import About from '../components/pages/About.vue';
    import Work from '../components/pages/Work.vue';
    import Contact from '../components/pages/Contact.vue';

    export default {
        name: 'homepage',

        components: {
            Home,
            About,
            Work,
            Contact,
        },
    };
</script>

<style lang="scss" scoped>
    #homepage {
        overflow: hidden;

        .opening-tags,
        .closing-tags {
            position: absolute;
            left: $nav-width + 20px;

            &.mobile {
                left: $nav-width-mobile + 20px;
            }

            .body-tag {
                margin-left: 20px;
            }
        }

        .opening-tags {
            top: 20px;
        }

        .closing-tags {
            bottom: 20px;
        }
    }
</style>
