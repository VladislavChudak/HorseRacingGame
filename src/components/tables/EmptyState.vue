<template>
  <div class="empty-state">
    <span><slot></slot></span>
  </div>
</template>

<script setup>
defineProps({
  text: String,
});
</script>

<style lang="scss" scoped>
.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  font-size: 14px;
  color: #666;
}
</style>
