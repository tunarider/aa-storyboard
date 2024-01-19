import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import { I18n } from '@/lib/i18n';

import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

import MLTSelector from '@/renderer/src/MLTSelector.vue';

const pinia = createPinia();
pinia.use(
  createPersistedState({
    auto: true,
    storage: localStorage
  })
);

const app = createApp(MLTSelector);
app.use(I18n);
app.use(pinia);
app.use(ElementPlus);
app.mount('#app');
