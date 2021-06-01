<template>
  <div>{{post.title}}</div>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    post: Object,
  }
}
</script>

<style scoped>

</style>
