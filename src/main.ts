import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
// import VueLazyLoad from "vue3-lazyload";

import VueLazyload from "vue-lazyload";

import "animate.css";

createApp(App)
  .use(createPinia())
  .use(VueAxios, axios)
  // .use(VueLazyLoad)
  .use(VueLazyload)
  .mount("#app");
