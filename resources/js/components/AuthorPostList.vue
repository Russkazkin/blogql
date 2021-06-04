<template>
  <div class="container mx-auto px-4 w-full md:w3/4 lg:w3/5 xl:w1/2 my-20">
    <h2 class="text-4xl">
      <router-link :to="{name: 'home'}" class="text-gray-600 hover:underline hover:text-blue-600">All posts</router-link>
      / {{ user.name }}
    </h2>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-else>
      <PostListItem class="mt-10" v-for="post in user.posts" :key="post.id" :post="post"></PostListItem>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import PostListItem from "./PostListItem";

export default {
  name: "AuthorPostList",
  components: {
    PostListItem,
  },
  apollo: {
    user: {
      query: gql`
        query($id: ID!) {
            user(id: $id) {
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
          id: this.$route.params.id
        }
      },
      error() {
        this.$router.push({name: '404'});
      }
    }
  },
}
</script>

<style scoped>

</style>

