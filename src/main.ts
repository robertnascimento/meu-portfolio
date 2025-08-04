import { createApp } from "vue";
import App from "./App.vue";
import { initAOS } from "./aos";

import "@/styles/global.css";
import "@/styles/variables.css";

const app = createApp(App);

initAOS();
app.mount("#app");
