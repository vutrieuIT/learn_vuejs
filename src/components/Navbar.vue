<template>
  <nav :class="[`navbar-${theme} bg-${theme}`, 'navbar', 'navbar-expand-lg']">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="(page, index) in pages" :key="index">
          <NavbarLink
            :page="page"
            :isActive="activePage === index"
            @click.prevent="navLinkClick(index)"
          >
          </NavbarLink>
        </li>
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
  created(){
    this.getThemeSetting();
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
