import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueMq from 'vue-mq';
import icons from './plugins/icons';

Vue.use(icons);

Vue.use(VueMq, {
    breakpoints: {
        mobile: 700,
        tablet: 1100,
        desktop: Infinity,
    },
});

// Base Component Registration
const requireComponent = require.context(
    // The relative path of the components folder
    './components',
    // Whether or not to look in subfolders
    true,
    // The regular expression used to match base component filenames
    /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName);

    // Get PascalCase name of component
    const componentName = upperFirst(
        camelCase(
            // Gets the file name regardless of folder depth
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, '')
        )
    );

    // Register component globally
    Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: function(h) {
        return h(App);
    },
}).$mount('#app');
