<script setup lang="ts">
import { computed, PropType } from 'vue'
import { Size } from '../constants';

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  required: Boolean,
  disabled: Boolean,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<Size>,
    default: Size.Medium,
  },
});

const emit = defineEmits(['input']);

const sizeClass = {
  [Size.Small]: 'text-sm px-2 py-1',
  [Size.Medium]: 'text-md px-4 py-2',
  [Size.Large]: 'text-2xl px-8 py-4',
}

const inputClassName = computed(() => {
  return `bg-white dark:bg-slate-500 rounded border border-black dark:border-white
          ${sizeClass[props.size]}
          ${props.disabled ? ' hover:cursor-not-allowed' : ''}`;
});

const onInput = (e: Event) => {
  emit('input', (e.target as HTMLInputElement).value);
}
</script>

<template>
  <input
    :value="value"
    :required="required"
    :type="type"
    :disabled="disabled"
    :placeholder="placeholder"
    :class="inputClassName"
    @input="onInput"
  >
</template>
