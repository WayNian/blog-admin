import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import naive from "./utils/ui";
import route from "@/router/";
import "@/utils/echarts/";

createApp(App).use(createPinia()).use(route).use(naive).mount("#app");
