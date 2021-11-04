<template>
  <n-space vertical size="large">
    <n-layout has-sider style="height: 100vh">
      <base-sider></base-sider>
      <n-layout content-style="background-color: #f5f7f9">
        <base-header></base-header>
        <n-layout-content
          content-style="padding: 24px;background-color: #f5f7f9"
        >
          <router-view></router-view>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-space>
</template>
<script setup lang="ts">
import request from "@/http";
import { useCounterStore } from "@/stores/";
import BaseSider from "@/components/Sider/index.vue";
import BaseHeader from "@/components/Header/index.vue";
defineProps<{ msg: string }>();

const store = useCounterStore();

request({
  // url: "122",
  baseURL: "https://i.snssdk.com/slardar/sdk_setting?bid=juejin_web",
  method: "GET",
  params: {},
});
</script>
<style scoped></style>
