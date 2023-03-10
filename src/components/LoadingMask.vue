<script setup lang="ts">
import {LoadingMaskType as Type} from '../constants';
import { computed, PropType } from 'vue'

const props = defineProps({
  isLoading: {
    type: Boolean,
    required: true,
  },
  small: Boolean,
  text: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<Type>,
    default: Type.Solid,
  },
});

const typeClass = {
  [Type.Solid]: 'items-center bg-gray-300 text-white',
  [Type.Blur]: 'items-center backdrop-blur-sm text-white',
}

const className = computed(() => `${typeClass[props.type]}
                  flex justify-center absolute top-0 right-0 bottom-0 left-0 z-50 h-full rounded`);
const svgClassName = computed(() => `${props.small ? 'w-4 h-4' : 'w-6 h-6'} animate-spin`);
const textClassName = computed(() => `${props.small ? 'text-sm' : 'text-xl'} text-white shrink-0 ml-2`);
</script>

<template>
  <div class="relative">
    <div
      v-if="isLoading"
      :class="className"
    >
      <div class="flex base-txt text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          :class="svgClassName"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        <span
          v-if="text"
          :class="textClassName"
        >
          {{ text }}
        </span>
      </div>
    </div>

    <slot />
  </div>
</template>
