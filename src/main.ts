import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import VueLazyload from "vue-lazyload";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "animate.css";
import "@/assets/icons/css/fontello.css";

createApp(App)
  .use(createPinia())
  .use(VueAxios, axios)
  .use(VueLazyload)
  .use(ElementPlus)
  .mount("#app");
