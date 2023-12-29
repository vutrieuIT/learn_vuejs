<template>
  <form action="" class="container mb-3">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label class="form-label" name=""> Page Title </label>
          <input type="text" class="form-control" v-model="pageTitle" />
        </div>
        <div class="mb-3">
          <label class="form-label" name=""> Context </label>
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
          <label class="form-label" name=""> Link Text </label>
          <input type="text" class="form-control" v-model="linkText" />
        </div>
        <div class="mb-3">
          <label class="form-label" name=""> Link URL </label>
          <input type="text" class="form-control" v-model="linkUrl" />
        </div>
        <div class="row mb-3">
          <div class="form-check">
            <input
              id="gridCheck1"
              type="checkbox"
              class="form-check-inout"
              v-model="published"
            />
            <label for="gridCheck1" class="form-check-label" name="">
              Published
            </label>
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
  emits:{
    pageCreated({pageTitle, content, link}) {
      if(!pageTitle) return false;
      if(!content) return false;
      if(!link || !link.text || !link.url) return false;
      return true;
    }
  },
  data() {
    return {
      pageTitle: "",
      content: "",
      linkText: "",
      linkUrl: "",
      published: true,
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

      this.$emit("pageCreated", {
        pageTitle: this.pageTitle,
        content: this.content,
        link: {
          text: this.linkText,
          url: this.linkUrl,
        },
        published: this.published,
      });

      this.pageTitle = "";
      this.content = "";
      this.linkText = "";
      this.linkUrl = "";
      this.published = true;
    },
  },
  watch: {
    pageTitle(newTitle, oldTitle) {
      if (this.linkText === oldTitle) {
        this.linkText = newTitle;
      }
    },
  },
};
</script>

<style scoped>
.disabled {
  background-color: gray !important;
}
</style>
