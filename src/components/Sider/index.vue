<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="store.collapsed"
    inverted
    @collapse="store.changeStatus"
    @expand="store.changeStatus"
  >
    <n-menu
      :collapsed="store.collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :on-update:value="change"
      :default-expanded-keys="expanKeys"
      :value="activeMenu"
      inverted
    />
  </n-layout-sider>
</template>
<script setup lang="ts">
  import { useMenu } from "@/hooks/useMenu";
  import { useConfigStore } from "@/stores/config";
  import { ref } from "vue";
  import { useRoute, useRouter } from "vue-router";
  const route = useRoute();
  const router = useRouter();
  const store = useConfigStore();
  const activeMenu = ref("");
  const { name, fullPath, matched } = route;
  console.log(matched);

  activeMenu.value = name as string;

  const { menuOptions, expanKeys } = useMenu(fullPath);

  const change = (key) => {
    activeMenu.value = key;
    router.push({
      name: key,
    });
  };
</script>
<style scoped></style>
