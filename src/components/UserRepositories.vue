<template>
  <div>
    <p v-for="repository in repositories">
      {{ repository.name }}
    </p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import fetchUserRepositories from "../api/repositories";
import { Repository } from "../types/repository";

export default defineComponent({
  name: "UserRepositories",
  props: {
    userName: {
      type: String,
      required: true,
    },
  },
  setup: (props) => {
    const repositories = ref<Repository>([]);
    const getUserRepositories = async () => {
      repositories.value = await fetchUserRepositories(props.userName);
    };

    return {
      repositories,
      getUserRepositories,
    };
  },
  mounted() {
    this.getUserRepositories();
  },
});
</script>
