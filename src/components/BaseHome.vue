<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { LoadingMaskType, GetMapName, GetModeName, GetDeathType } from '../constants';
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

const getDurationMins = (duration: string) => {
  const d = parseInt(duration, 10);
  const minutes = Math.floor(d / 60);
  const seconds = d % 60;

  return `${minutes > 0 ? `${minutes}m ` : ''}${seconds > 0 ? `${seconds}s` : ''}`
}

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

    <h2 class="text-lg dark:text-white mb-2">
      Last 5 matches
    </h2>

    <loading-mask
      :is-loading="matchesLoading"
      :type="LoadingMaskType.Blur"
    >
      <div
        v-for="match in matches"
        :key="match.id"
        class="border-2 rounded border-black dark:border-white mb-4"
      >
        <div
          class="flex justify-between flex-wrap text-base p-2 dark:text-white border-b
          border-black dark:border-white"
        >
          <span class="text-3xl">{{ `#${match.participant.winPlace}` }}</span>
          <span>{{ GetMapName(match.mapName) }}</span>
          <span>{{ GetModeName(match.gameMode) }}</span>
          <span>{{ new Date(match.createdAt).toLocaleString() }}</span>
          <span>{{ getDurationMins(match.duration) }}</span>
        </div>

        <div class="text-base dark:text-white p-2">
          <div class="flex justify-between flex-wrap">
            <div>
              <span>Kills: </span>
              <span>
                {{ match.participant.kills }}
              </span>
            </div>

            <div>
              <span>Assists: </span>
              <span>
                {{ match.participant.assists }}
              </span>
            </div>

            <div>
              <span>Damage dealt: </span>
              <span>{{ match.participant.damageDealt }}</span>
            </div>
          </div>

          <div class="flex justify-between">
            <div>
              <span>Longest kill: </span>
              <span>{{ match.participant.longestKill }}</span>
            </div>

            <div>
              <span>Time survived: </span>
              <span>{{ getDurationMins(match.participant.timeSurvived) }}</span>
            </div>

            <div>
              <span>Killed by: </span>
              <span>{{ GetDeathType(match.participant.deathType) }}</span>
            </div>
          </div>
          <!--          {{ match.participant }}-->
        </div>
      </div>
    </loading-mask>
  </loading-mask>
</template>
