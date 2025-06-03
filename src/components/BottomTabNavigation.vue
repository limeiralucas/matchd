<template>
  <nav class="bottom-tabs">
    <RouterLink to="/" class="tab-item" active-class="active">
      <Icon icon="mdi:scoreboard" class="tab-icon" />
    </RouterLink>
    <RouterLink to="/about" class="tab-item" active-class="active">
      <Icon icon="mdi:information" class="tab-icon" />
    </RouterLink>
    <RouterLink to="/profile" class="tab-item" active-class="active">
      <Icon icon="mdi:account" class="tab-icon" />
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';
</script>

<style scoped>
.bottom-tabs {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: var(--color-background-secondary);
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
  color: var(--color-text-secondary);
  transition: color 0.3s ease;
}

.tab-item:hover {
  color: var(--color-text-primary);
}

.tab-item.active {
  color: var(--apple-blue);
}

.tab-icon {
  width: 1.75rem;
  height: 1.75rem;
}
</style>
