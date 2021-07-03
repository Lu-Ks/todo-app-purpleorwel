<template>
  <div class="flex flex-col min-h-screen">
    <header class="py-2 px-4 bg-purple-500 h-16 flex items-center">
      <h1 class="text-white">💜❤ Todo app ❤💜</h1>
      <Login class="ml-auto" />
    </header>
    <main class="p-4 flex-1">
      <TodoList>
        <template #default="{ item, toggle }">
          <TodoItem :item="item" @toggle="toggle(item)"></TodoItem>
        </template>
      </TodoList>
    </main>
    <footer class="py-2 px-4 bg-purple-300 h-8 flex items-center justify-center">
      <p>⚛ > vue 😈</p>
    </footer>
  </div>
</template>

<script>
import Login from './components/Login.vue';
import TodoList from './components/TodoList.vue';
import TodoItem from './components/TodoItem.vue';

export default {
  components: {
    Login,
    TodoList,
    TodoItem,
  },
};
</script>
