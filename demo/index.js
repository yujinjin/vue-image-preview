import Vue from "vue";
import vueApp from "./app";

let VueApp = Vue.extend(vueApp);
new VueApp().$mount("#app");
