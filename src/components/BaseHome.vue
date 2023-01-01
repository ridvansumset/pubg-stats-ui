<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { LoadingMaskType, GetMapName, GetModeName } from '../constants';
import LoadingMask from './LoadingMask.vue';
import BaseInput from './BaseInput.vue';

const store = useStore();

const playerIsLoading = computed(() => store.getters['player/getIsLoading']);
const player = computed(() => store.getters['player/getPlayer']);
const playerParamName = computed(() => store.getters['player/getNameParam']);

const matchesLoading = computed(() => store.getters['match/getIsLoading']);
const matches = computed(() => store.getters['match/getMatches']);

onMounted(async () => {
  await store.dispatch('player/fetchPlayerByName');
  await store.dispatch('match/fetchMatchesById');
});

const onInputChange = (val: string) => {
  store.commit('player/setParams', { name: val });
}

const submitForm = async (e: Event) => {
  e.preventDefault();
  await store.dispatch('player/fetchPlayerByName');
  await store.dispatch('match/fetchMatchesById');
}
</script>

<template>
  <loading-mask
    :is-loading="playerIsLoading"
    :type="LoadingMaskType.Blur"
  >
    <div class="flex justify-between">
      <h1 class="text-xl dark:text-white mb-12">
        {{ player.name }} <span class="text-xs dark:text-white">({{ player.id }})</span>
      </h1>

      <form @submit="submitForm">
        <base-input
          :value="playerParamName"
          @input="onInputChange"
        />
        <button
          type="submit"
          :disabled="!playerParamName"
          class="text-base dark:text-white ml-2"
        >
          Submit
        </button>
      </form>
    </div>

    <h2 class="text-lg dark:text-white">
      Last 5 matches
    </h2>

    <loading-mask
      :is-loading="matchesLoading"
      :type="LoadingMaskType.Blur"
    >
      <div
        v-for="match in matches"
        :key="match.id"
        class="border rounded border-black dark:border-white"
      >
        <div class="grid grid-cols-4 gap-1 text-base dark:text-white border-b border-black dark:border-white">
          <span>{{ GetMapName(match.mapName) }}</span>
          <span>{{ GetModeName(match.gameMode) }}</span>
          <span>{{ match.createdAt }}</span>
          <span>{{ `${match.duration} seconds` }}</span>
        </div>

        <div class="text-base dark:text-white">
          {{ match.participant }}
        </div>
      </div>
    </loading-mask>
  </loading-mask>
</template>
