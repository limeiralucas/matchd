<script setup lang="ts">
const isPreview = import.meta.env.VITE_IS_PREVIEW === 'true';
</script>

<template>
  <div class="profile">
    <h1>Profile</h1>
    <p>This is the profile page</p>
    <div v-if="isPreview" class="preview-badge">Preview</div>
  </div>
</template>

<style scoped>
.profile {
  padding: 2rem;
  text-align: center;
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

h1 {
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.preview-badge {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: var(--apple-blue);
  color: var(--color-text-primary);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: bold;
  font-size: 0.875rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 100;
}
</style>
