<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const darkMode = computed(() => store.getters['ui/getDarkMode']);

onMounted(() => {
  if (!darkMode.value || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    store.dispatch('ui/updateDarkMode', true);
  }
});
</script>

<template>
  <button @click="store.dispatch('ui/updateDarkMode', !darkMode)">
    <div class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :fill="darkMode ? 'white' : 'black'"
        class="w-5 h-5 mr-1 pt-1"
      >
        <path
          fill-rule="evenodd"
          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
          clip-rule="evenodd"
        />
      </svg>

      <span class="base-txt text-sm dark:text-white">{{ darkMode ? 'Light' : 'Dark' }} Mode</span>
    </div>
  </button>
</template>
