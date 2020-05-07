import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default () => {
    library.add(faEnvelope);
    library.add(faFile);
    library.add(faLinkedinIn);
    library.add(faGithub);

    Vue.component('fa-icon', FontAwesomeIcon);
};
