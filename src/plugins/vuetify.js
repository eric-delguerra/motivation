import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#05F2DB',
                secondary: '#0388A6',
                accent: '#023859',
                error: '#F205CB',
                info: '#A61780'
            },
        },
    },
});
