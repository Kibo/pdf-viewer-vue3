import { createApp } from 'vue'
import * as Constant from './modules/constants/Constants.js';
import App from './modules/App.vue'

const app = createApp(App);
const vm = app.mount(`#${Constant.ID_APP}`)
