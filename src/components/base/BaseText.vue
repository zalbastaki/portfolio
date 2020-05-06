<template>
    <component :is="type" class="text" :class="[type, $mq]">
        <slot />
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
    
</style>
