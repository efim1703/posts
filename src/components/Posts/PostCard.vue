<template>
  <!-- В идеале я бы сделал этот компонент функциональным, потому что 
    на странице карточек будет много и важна скорость рендеринга -->
  <div :class="['post', { 'active': active }]" @click="$emit('click', active)">
    <div class="post__id">
      {{ 'Id: ' + post.id }}
    </div>
    <div class="post__name">
      {{ post.name }}
    </div>
    <div class="post__actions">
      <div class="icon">
        <svg @click.stop="$emit('edit-post')" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 32 32" viewBox="0 0 484 484"><path d="M401.648 18.234c-24.394-24.351-63.898-24.351-88.293 0l-22.101 22.223-235.27 235.145-.5.503c-.12.122-.12.25-.25.25-.25.375-.625.747-.87 1.122 0 .125-.13.125-.13.25-.25.375-.37.625-.625 1-.12.125-.12.246-.246.375-.125.375-.25.625-.379 1 0 .12-.12.12-.12.25L.663 437.32a12.288 12.288 0 0 0 2.996 12.735 12.564 12.564 0 0 0 8.867 3.625c1.356-.024 2.7-.235 3.996-.625L173.37 400.73c.121 0 .121 0 .25-.12a4.523 4.523 0 0 0 1.121-.505.443.443 0 0 0 .254-.12c.371-.25.871-.505 1.246-.755.371-.246.75-.62 1.125-.87.125-.13.246-.13.246-.25.13-.126.38-.247.504-.5l257.371-257.372c24.352-24.394 24.352-63.898 0-88.289zM169.375 371.383l-86.914-86.91L299.996 66.938l86.914 86.91zm-99.156-63.809 75.93 75.926-114.016 37.96zm347.664-184.82-13.238 13.363L317.727 49.2l13.367-13.36c14.62-14.609 38.32-14.609 52.945 0l33.965 33.966c14.512 14.687 14.457 38.332-.121 52.949zm0 0" data-original="#000000"/></svg>
      </div>
      <div class="icon">
        <svg @click.stop="$emit('delete-post')" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  style="enable-background:new 0 0 512 512" viewBox="0 0 32 32"><path d="m17.72508 16 5.23746-5.23746a1.22 1.22 0 0 0-1.72508-1.72508L16 14.27492l-5.23746-5.23746a1.22 1.22 0 0 0-1.72508 1.72508L14.27492 16l-5.23746 5.23746a1.22 1.22 0 0 0 1.72508 1.72508L16 17.72508l5.23746 5.23746a1.22 1.22 0 0 0 1.72508-1.72508z" data-original="#000000"/><path d="M28.2 31.86H3.8A3.66 3.66 0 0 1 .14 28.2V3.8A3.66 3.66 0 0 1 3.8.14h24.4a3.66 3.66 0 0 1 3.66 3.66v24.4a3.66 3.66 0 0 1-3.66 3.66zM3.8 2.58A1.22 1.22 0 0 0 2.58 3.8v24.4a1.22 1.22 0 0 0 1.22 1.22h24.4a1.22 1.22 0 0 0 1.22-1.22V3.8a1.22 1.22 0 0 0-1.22-1.22z" data-original="#000000"/></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  padding: 20px;
  border: 1px solid transparent;
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgb(66 66 66 / 15%);
  cursor: pointer;
  position: relative;

  &.active {
    border: 1px solid #212121;
  }

  &:hover {
    border: 1px solid #212121;

    .post__actions {
      display: flex;
    }
  }

  &__id {
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__actions {
    display: none;
    position: absolute;
    top: -16px;
    right: -20px;
    gap: 4px;

    .icon {
      padding: 8px;
      border-radius: 12px;
      background: #f2f2f2;

    }
  }
}
</style>