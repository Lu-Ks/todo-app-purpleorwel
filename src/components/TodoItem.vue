<template>
  <span class="mr-2 cursor-pointer" @click="$emit('toggle')">{{
    item.completed ? '✔' : '⬜'
  }}</span>
  <span
    :class="{
      'line-through': item.completed,
    }"
    >{{ item.title }}</span
  >
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true },
  },
  emits: ['toggle'],
};
</script>
