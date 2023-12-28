<template>
  <form action="" class="container mb-3">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label for="" class="form-label"> Page Title </label>
          <input type="text" class="form-control" v-model="pageTitle" />
        </div>
        <div class="mb-3">
          <label for="" class="form-label"> Context </label>
          <textarea
            type="text"
            rows="5"
            class="form-control"
            v-model="content"
          ></textarea>
        </div>
      </div>

      <div class="col">
        <div class="mb-3">
          <label for="" class="form-label"> Link Text </label>
          <input type="text" class="form-control" v-model="linkText" />
        </div>
        <div class="mb-3">
          <label for="" class="form-label"> Link URL </label>
          <input type="text" class="form-control" v-model="linkUrl" />
        </div>
        <div class="row mb-3">
          <div class="form-check">
            <input type="checkbox" class="form-check-inout" />
            <label for="gridCheck1" class="form-check-label"> Published </label>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <button
        class="btn btn-primary"
        :class="{ disabled: isFromValid }"
        :disabled="isFromValid"
        @click.prevent="submitForm"
      >
        Create Page
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: ["pageCreated"],
  data() {
    return {
      pageTitle: "",
      content: "",
      linkText: "",
      linkUrl: "",
    };
  },
  computed: {
    isFromValid() {
      return (
        !this.pageTitle || !this.content || !this.linkText || !this.linkUrl
      );
    },
  },
  methods: {
    submitForm() {
      if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
        alert("please fill the form!!!");
        return;
      }

      this.pageCreated({
        pageTitle: this.pageTitle,
        content: this.content,
        link: {
          linkText: this.linkText,
          linkUrl: this.linkUrl,
        },
      });
    },
  },
};
</script>

<style scoped>
.disabled {
  background-color: gray !important;
}
</style>
