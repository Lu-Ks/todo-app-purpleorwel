<template>
  <div class="flex flex-col max-w-xl m-auto">
    <input v-model="filter" class="w-full border border-black mb-6" type="text" />
    <ul class="flex flex-col gap-4">
      <li
        v-for="item in filteredItems"
        :key="item.id"
        class="p-4 bg-purple-400 text-white rounded-lg"
        :class="{
          'opacity-50': item.completed,
        }"
      >
        <slot v-bind="{ item, toggle: toggleTodo }">{{ item.title }}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
import todoItems from '../assets/data/todo.json';

export default {
  data() {
    return {
      items: [...todoItems],
      filter: '',
    };
  },
  computed: {
    sortedItems() {
      return [...this.items].sort((a, b) => {
        if (a.completed) return 1;
        else if (b.completed) return -1;
        else return 0;
      });
    },
    filteredItems() {
      return this.sortedItems.filter(({ title }) => title.includes(this.filter));
    },
  },
  methods: {
    toggleTodo(item) {
      item.completed = !item.completed;
    },
  },
};
</script>
