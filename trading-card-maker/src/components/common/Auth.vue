<template>
  <div class="auth">
    <div v-if="!user">
      <button @click="signInWithGoogle">Sign in with Google</button>
    </div>
    <div v-else>
      <p>Welcome, {{ user.displayName }}</p>
      <button @click="signOutUser">Sign out</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '../../composables/useAuth';

const { user, signInWithGoogle, signOutUser } = useAuth();
</script>

<style scoped>
.auth {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 300px;
  margin: 0 auto;
}

button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}
</style>
