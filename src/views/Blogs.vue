<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div v-if="profileAdmin" class="toggle-edit">
        <span>Toggle Editing Post</span>
        <input type="checkbox" v-model="editPost" />
      </div>
      <BlogCard :post="post" v-for="(post, i) in blogPosts" :key="i" />
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";
export default {
  name: "Blogs",
  components: {
    BlogCard,
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
    editPost: {
        get(){
            return this.$store.state.editPost
        },
        set(payload){
            this.$store.commit("toggleEditPost", payload)
        }
    },
    profileAdmin(){
      return this.$store.state.profileAdmin;
    }
  },
  beforeDestroy(){
      this.$store.commit('toggleEditPost', false)
  }
};
</script>

<style lang="scss" scoped>
.blog-cards {
  position: relative;

  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right: 0;

    span {
      margin-right: 16px;
    }

    input[type="checkbox"] {
      position: relative;
      border: none;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 48px;
      height: 24px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba($color: #000000, $alpha: 0.1),
        0 2px 4px -1px rgba($color: #000000, $alpha: 0.06);

      &::before {
        content: "";
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 20px;
        top: 0;
        left: 0;
        background: #303030;
        transform: scale(1.1);
        transition: 750ms ease all;
        box-shadow: 0 4px 6px -1px rgba($color: #000000, $alpha: 0.1),
          0 2px 4px -1px rgba($color: #000000, $alpha: 0.06);
      }
    }

    input:checked[type="checkbox"]::before {
      background: #fff;
      left: 24px;
    }
  }
}
</style>