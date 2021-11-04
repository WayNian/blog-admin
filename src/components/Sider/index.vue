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
      default-value="dashboard"
      inverted
    />
  </n-layout-sider>
</template>
<script setup lang="ts">
import { useConfigStore } from "@/stores/config";
const store = useConfigStore();

const menuOptions = [
  {
    label: "Dashboard",
    key: "dashboard",
  },
  {
    label: "创作空间",
    key: "workspace",
    children: [
      {
        label: "列表",
        key: "aritle-list",
      },
      {
        label: "新增",
        key: "aritle-add",
      },
    ],
  },
  {
    label: "音乐空间",
    key: "workspace",
  },
  {
    label: "分类",
    key: "classification",
    children: [
      {
        label: "Tag",
        key: "tag",
      },
      {
        label: "Category",
        key: "category",
      },
    ],
  },
  {
    label: "关于",
    key: "about",
  },
];
</script>
<style scoped></style>
