<script lang="ts">
import { defineComponent, toRef, ref } from 'vue'
import { globalState } from '../store'
import http from '../http';

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {
      count: toRef(globalState, 'count'),
      name: ref(''),
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const res = http.get('/pubg/user/byname/The4nswer')
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    },
  },
})
</script>

<template>
  <div class="prose max-w-none">
    <h1>{{ msg }}</h1>
  </div>
</template>

<style>
.prose a {
  @apply text-gray-900 underline !important;
}
</style>
