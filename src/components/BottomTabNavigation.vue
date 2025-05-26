<template>
  <nav class="bottom-tabs">
    <RouterLink to="/" class="tab-item" active-class="active">
      <div class="tab-icon">🏠</div>
    </RouterLink>
    <RouterLink to="/about" class="tab-item" active-class="active">
      <div class="tab-icon">ℹ️</div>
    </RouterLink>
    <RouterLink to="/profile" class="tab-item" active-class="active">
      <div class="tab-icon">👤</div>
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.bottom-tabs {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: var(--color-background);
  border-top: 1px solid var(--color-border);
  padding: 0.5rem 0;
  z-index: 100;
}

.tab-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-decoration: none;
  color: var(--color-text-mute);
  transition: color 0.3s ease;
}

.tab-item:hover {
  color: var(--color-text);
}

.tab-item.active {
  color: var(--color-brand);
}

.tab-icon {
  font-size: 1.75rem;
}
</style>
