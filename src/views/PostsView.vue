<template>
  <div class="posts">
    <div class="container">
      <h1>POSTS</h1>
      <div class="posts__search">
        <span>Поиск по названию: </span>
        <custom-input v-model="searchText" />
        <custom-button 
          title="Добавить пост" 
          class="save-btn"
          @click="openAddPostModal" 
        />
      </div>

      <post-list 
        :posts="getPostList" 
        @edit-post="openEditPostModal"
        @delete-post="openDeletePostModal"
      />

      <custom-modal v-model="deletePostModal.show">
        <div class="delete-modal">Вы точно хотите удалить пост?</div>
        <custom-button title="Отменить" @click="closeDeletePostModal"/>
        <custom-button 
          title="Удалить" 
          class="delete-btn"
          @click="deletePost"
        />
      </custom-modal>

      <custom-modal v-model="editPostModal.show">
        <div class="edit-modal">
          <span>Редактирование названия поста</span>
          <textarea 
            v-model="editPostModal.post.name"
            class="textarea" 
            rows="4"
          ></textarea>
          <div>
            <custom-button title="Отменить" @click="closeEditPostModal"/>
            <custom-button 
              title="Сохранить" 
              class="save-btn"
              @click="savePost"
            />
          </div>
        </div>
      </custom-modal>
      <!-- Я бы лучше использовал виртуал скролл для такой цели или в крайнем случае 
        либу пагинатора, но в задании ничего не сказано про сторонние библиотеки, поэтому 
        решение написанное на коленках -->
        <custom-button 
          title="PREV"
          class="paginator-btn"
          :disabled="activePage === 1"
          @click="activePage--"
        />
        <custom-button 
          title="NEXT" 
          class="paginator-btn"
          :disabled="activePage === getLastPage"
          @click="activePage++"
        />
    </div>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue'
import CustomInput from '@/components/ui/CustomInput.vue'
import CustomModal from '@/components/ui/CustomModal.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import postsRepository from '@/services/repositories/posts-repository.js'

export default {
  name: 'PostsView',
  components: {
    PostList,
    CustomInput,
    CustomModal,
    CustomButton
  },
  data() {
    return {
      searchText: '',
      deletePostModal: {
        show: false,
        postId: null
      },
      editPostModal: {
        show: false,
        post: {
          id: null,
          name: ''
        }
      },
      posts: [],
      POSTS_ON_PAGE: 30,
      activePage: 1
    }
  },
  computed: {
    getPostList() {
      if (this.searchText) {
        return this.posts.filter(({name}) => name.includes(this.searchText))
      }

      const firstIndex = (this.activePage - 1) * this.POSTS_ON_PAGE
      const lastIndex = firstIndex + this.POSTS_ON_PAGE
      return this.posts.slice(firstIndex, lastIndex )
    },
    getLastPage() {
      return Math.ceil(this.posts.length / this.POSTS_ON_PAGE)
    }
  },
  async created() {
    await this.getPosts()
  },
  methods: {
    async getPosts() {
      try {
        //const response = await postsRepository.getPosts()
        let response = await fetch('/test.json')
        response = await response.json()

        this.posts = response.posts;
      } catch (error) {
        console.warn(error)
      }
    },
    async addPost() {
      try {
        //const response = await postsRepository.addPost(this.editPostModal.post)

        // id должен прихоить с бэка но тут сделано для теста через самый простой способ
        const post = {
          id: new Date().getTime(),
          name: this.editPostModal.post.name
        }
        this.posts.unshift(post)

        this.closeEditPostModal()
      } catch (error) {
        console.warn(error)
      }
    },
    async updatePost() {
      try {
        // await postsRepository.updatePost(this.editPostModal.post)
        this.posts = this.posts
          .map(post => post.id === this.editPostModal.post.id ? this.editPostModal.post : post)

        this.closeEditPostModal()
      } catch (error) {
        console.warn(error)
      }
    },
    async deletePost() {
      try {
        // await postsRepository.deletePost(this.deletePostModal.postId)
        this.posts = this.posts.filter(({id}) => id !== this.deletePostModal.postId)

        this.closeDeletePostModal()
      } catch (error) {
        console.warn(error)
      }
    },
    savePost() {
      if (this.editPostModal.post.id === null) {
        this.addPost()
      } else {
        this.updatePost()
      }
    },
    openAddPostModal() {
      this.editPostModal.post = {
        id: null,
        name: ''
      }
      this.editPostModal.show = true
    },
    openEditPostModal(post) {
      this.editPostModal.post = Object.assign({}, post)
      this.editPostModal.show = true
    },
    openDeletePostModal(postId) {
      this.deletePostModal.postId = postId
      this.deletePostModal.show = true
    },
    closeEditPostModal() {
      this.editPostModal.post = {
        id: null,
        name: ''
      }
      this.editPostModal.show = false
    },
    closeDeletePostModal() {
      this.deletePostModal.postId = null
      this.deletePostModal.show = false
    },
  }
}
</script>

<style lang="scss" scoped>
  .posts {
    padding: 60px 0;
    h1 {
      margin: 30px auto;
      text-align: center;
    }

    &__search {
      text-align: center;
      margin: 20px;
      span {
        font-size: 18px;
        margin-right: 12px;
      }
    }

    .delete-modal {
      font-size: 18px;
      margin-bottom: 16px;
    }

    .delete-btn {
      background: rgb(194, 32, 32) !important;
      margin-left: 12px;
    }

    .edit-modal {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      font-size: 18px;

      .textarea {
        width: 100%;
        padding: 12px;
      }
    }

    .save-btn {
      background: rgb(37, 182, 21) !important;
      margin-left: 12px;
    }

    .paginator-btn {
      margin-right: 16px;

    }
  }
  
</style>