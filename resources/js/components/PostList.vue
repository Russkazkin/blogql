<template>
  <div class="container mx-auto px-4 w-full md:w3/4 lg:w3/5 xl:w1/2 my-20">
    <h2 class="text-4xl">All posts</h2>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else>
      <PostListItem class="mt-10" v-for="post in posts" :key="post.id" :post="post"></PostListItem>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import PostListItem from "./PostListItem";

export default {
  name: "PostList",
  components: {
    PostListItem,
  },
  apollo: {
    posts: gql`
        {
            posts {
              id
              title
              lead
              created_at
                    author {
                        id
                        name
                    }
                    topic {
                        name
                        slug
                    }
            }
        }`,
  },
}
</script>

<style scoped>

</style>
