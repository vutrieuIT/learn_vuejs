<template>
  <Navbar
    :pages="pages"
    :active-page="activePage"
  >
  </Navbar>
  <RouterView></RouterView>
  <!-- <PageContent v-if="pages.length > 0" :page="pages[activePage]"></PageContent>
  <CreatePage @pageCreated="pageCreated"></CreatePage> -->
</template>

<script>
import PageContent from "./components/PageContent.vue";
import Navbar from "./components/Navbar.vue";
import CreatePage from "./components/CreatePage.vue";

export default {
  components: {
    PageContent,
    Navbar,
    CreatePage,
  },
  created() {
    this.getPages();

    this.$bus.$on("navbarLinkActived", (index) => {
      this.activePage = index;
    })
  },
  data() {
    return {
      activePage: 0,
      pages: [],
    };
  },
  methods: {
    async getPages() {
      let res = await fetch("pages.json");
      let data = await res.json();
      this.pages = data;
    },
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
};
</script>
