<template>
  <nav :class="[`navbar-${theme} bg-${theme}`, 'navbar', 'navbar-expand-lg']">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <NavbarLink
          v-for="(page, index) in publishedPages"
          :key="index"
          :page="page"
          :index="index"
          :isActive="activePage === index"
          @actived="$emit('actived')"
        >
        </NavbarLink>
      </ul>
      <form action="" class="d-flex">
        <button class="btn btn-primary" v-on:click.prevent="changeTheme">
          Toggle Navbar
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";
export default {
  components: {
    NavbarLink,
  },
  props: ["pages", "activePage", "navLinkClick"],
  data() {
    return {
      theme: "dark",
    };
  },
  created() {
    this.getThemeSetting();
  },
  computed: {
    publishedPages() {
      return this.pages.filter((p) => p.published);
    },
  },
  methods: {
    changeTheme() {
      this.theme = this.theme == "dark" ? "light" : "dark";
      this.storeThemeSetting();
    },
    storeThemeSetting() {
      localStorage.setItem("theme", this.theme);
    },
    getThemeSetting() {
      let theme = localStorage.getItem("theme");

      if (theme) {
        this.theme = theme;
      }
    },
  },
};
</script>
