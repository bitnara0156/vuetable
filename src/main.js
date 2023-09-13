import { createApp } from "vue";
import map from "./map.vue";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

// import the styles
import VueGoodTablePlugin from "vue-good-table-next";

// import the styles
import "vue-good-table-next/dist/vue-good-table-next.css";

// app.config.productionTip = false;
const app = createApp(map);
app.use(VueGoodTablePlugin);
app.component("EasyDataTable", Vue3EasyDataTable);
app.mount("#app");
