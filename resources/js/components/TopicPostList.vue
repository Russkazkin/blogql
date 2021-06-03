<template>
  <div class="container mx-auto px-4 w-full md:w3/4 lg:w3/5 xl:w1/2 my-20">
    <h2 class="text-4xl">Posts from {{ topic.name }}</h2>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else>
      <PostListItem class="mt-10" v-for="post in topic.posts" :key="post.id" :post="post"></PostListItem>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import PostListItem from "./PostListItem";

export default {
  name: "TopicPostList",
  components: {
    PostListItem,
  },
  apollo: {
    topic: {
      query: gql`
        query($slug: String!) {
            topic(slug: $slug) {
                id
                name
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
            }
        }
      `,
      variables() {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  },
}
</script>

<style scoped>

</style>

