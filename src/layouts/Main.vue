<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { DarkModeButton } from '../components';

const store = useStore();
const interval = ref(-1);

const checkTimestamps = async () => {
  if (Object.keys(queryTimestamps.value).length === 0) return;

  const startTs = Math.floor(new Date().getTime() / 1000) - 60;
  const timestamps = Object.keys(queryTimestamps.value);

  for (let i = 0; i < timestamps.length; i++) {
    const ts = parseInt(timestamps[i], 10);
    // remove query timestamp if made more than 60 secs ago
    if (ts < startTs) {
      await store.dispatch('common/deleteQueryTimestamps', ts);
    }
  }
}
const queryTimestamps = computed(() => store.getters['common/getQueryTimestamps']);
const isRequestsEnabled = computed(() => store.getters['common/getRequestsEnabled']);
const darkMode = computed(() => store.getters['ui/getDarkMode']);

onMounted(() => {
  checkTimestamps();
  interval.value = setInterval(() => checkTimestamps(), 5000);
});

onBeforeUnmount(() => {
  clearInterval(interval.value);
});
</script>

<template>
  <div :class="darkMode ? 'dark' : ''">
    <div class="min-h-screen bg-apple-web dark:bg-slate-800">
      <header class="flex justify-between mb-8 border-b border-b-black dark:border-b-white">
        <dark-mode-button class="ml-4" />

        <div
          class="flex flex-col items-center p-2"
          :class="isRequestsEnabled ? 'bg-gray-500' : 'bg-red-400'"
        >
          <p class="text-6xl dark:text-white mb-0">
            {{ `${store.state.common.requestCount}/10` }}
          </p>
          <span class="text-xxs dark:text-white">Requests made in the last 60 seconds</span>
        </div>
      </header>

      <div class="w-full flex justify-center">
        <div class="w-full md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1400px] px-8 md:px-0 pb-8">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
