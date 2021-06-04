<template>
  <div>
    <router-link :to="{name: 'post', params: {id: post.id} }">
      <h4 class="text-2xl pb-3 font-semibold hover:underline hover:text-blue-600">{{ post.title }}</h4>
    </router-link>
    <p class="text-gray-600 pb-3">{{ post.lead }}</p>
    <div class="text-sm text-gray-600">By
      <router-link class="underline hover:text-blue-600" :to="{name: 'authors', params: {id: post.author.id}}">
        {{ post.author.name }}
      </router-link>
      in
      <router-link class="underline hover:text-blue-600" :to="{name: 'topics', params: {slug: post.topic.slug}}">
        {{ post.topic.name }}
      </router-link> •
      {{ post.created_at | timePassed }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    post: Object
  }
};
</script>

<style scoped>

</style>
