<template>
  <div class="post-list">
    <post-card
      v-for="post in posts"
      :key="post.id"
      :post="post"
      :active="activePostsIds.find(id => post.id === id)"
      class="post-list__item"
      @click="$event => clickByPost(post.id, $event)"
      @edit-post="$emit('edit-post', post)"
      @delete-post="$emit('delete-post', post.id)"
    />
  </div>
</template>

<script>
import PostCard from '@/components/Posts/PostCard.vue'

export default {
  name: 'PostList',
  components: {
    PostCard
  },
  props: {
    posts: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      activePostsIds: []
    }
  },
  methods: {
    clickByPost(postId, isActive) {
      if (isActive) {
        this.activePostsIds = this.activePostsIds.filter(id => id !== postId)
      } else {
        this.activePostsIds.push(postId)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.post-list {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;

  &__item {
    width: calc(100% / 3 - 44px/3);
    margin-bottom: 40px;
  }
}
</style>