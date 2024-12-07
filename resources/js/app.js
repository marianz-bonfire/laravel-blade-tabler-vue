/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('../js/tabler/tabler.mina89b')

import Vue from 'vue';
import VueInternationalization from 'vue-i18n';
import { components } from './components';
import directives from './directives';
import Locale from './vue-i18n-locales.generated';

const TablerVuePlugin = {

    install: function (Vue) {
        for (let component in components) {
            // register components
            Vue.component(components[component].name, components[component])
        }

        for (let directive in directives) {
            Vue.directive(directive, directives[directive])
        }
    },

    ...components,
    ...directives
};

Vue.use(TablerVuePlugin)
Vue.use(VueInternationalization);

const lang = document.documentElement.lang.substr(0, 2);

const i18n = new VueInternationalization({
    locale: lang,
    messages: Locale
});

Vue.config.productionTip = false

Vue.component('core', require('./views/Core.vue').default);
Vue.component('app', require('./views/App.vue').default);
Vue.component('login', require('./views/Login.vue').default);
Vue.component('dashboard', require('./views/Dashboard/Dashboard.vue').default);

Vue.component('user-list', require('./views/User/List.vue').default);
Vue.component('user-detail', require('./views/User/Detail.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    i18n,
    data: () => ({
        menuCollapsed: true
    }),
    methods: {
      toggleMenu() {
        this.menuCollapsed = !this.menuCollapsed
      }
    }
});
