import { createPinia } from 'pinia'
const pinia = createPinia();
pinia._testing = true;

import { useRouteStore } from "@/store/index.js"; 
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";

export {pinia};