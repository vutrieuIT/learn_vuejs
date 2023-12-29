import { createRouter, createWebHashHistory } from "vue-router";
import PageContent from "./components/PageContent.vue"
import CreatePage from "./components/CreatePage.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/:index", component: PageContent },
    { path: "/create", component: CreatePage },
  ],
});

export default router;
