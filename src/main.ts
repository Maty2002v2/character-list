import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import VueLazyload from "vue-lazyload";

import "animate.css";
import "@/assets/icons/css/fontello.css";

createApp(App)
  .use(createPinia())
  .use(VueAxios, axios)
  .use(VueLazyload)
  .mount("#app");
