<script setup lang="ts">
import { RouterView } from 'vue-router';
import BottomTabNavigation from './components/BottomTabNavigation.vue';
</script>

<template>
  <div id="app">
    <main class="main-content">
      <RouterView />
    </main>
    <BottomTabNavigation />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-bottom: 5rem; /* Space for bottom navigation */
}
</style>
