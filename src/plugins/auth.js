import { ref, watch, readonly } from 'vue';

const user = ref(localStorage.getItem('username') || null);

async function login(username) {
  return new Promise((resolve) => {
    setTimeout(() => resolve((user.value = username)), 500);
  });
}

async function logout() {
  return new Promise((resolve) => {
    setTimeout(() => resolve((user.value = null)), 500);
  });
}

watch(user, (username) => {
  if (username) {
    localStorage.setItem('username', username);
  } else {
    localStorage.removeItem('username');
  }
});

export function useAuth() {
  return { user: readonly(user), login, logout };
}

export default function install(app) {
  app.config.globalProperties.$auth = {
    get user() {
      return user.value;
    },
    login,
    logout,
  };
}
