<template>
  <n-layout-header bordered class="header-layout">
    <n-icon size="40" style="cursor: pointer" @click="store.changeStatus">
      <arrow-forward />
    </n-icon>
  </n-layout-header>
</template>
<script setup lang="ts">
  import { ArrowForward } from "@vicons/ionicons5";
  import { useConfigStore } from "@/stores/config";
  const store = useConfigStore();
</script>
<style scoped>
  .header-layout {
    height: 80px;
    display: flex;
    align-items: center;
  }
</style>
