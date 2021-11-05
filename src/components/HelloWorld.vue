<template>
  <n-space vertical size="large">
    <n-layout has-sider>
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="120"
        :width="240"
        show-trigger="arrow-circle"
        content-style="padding: 24px;"
        bordered
      >
        <p>海淀桥 海淀桥 海淀桥 海淀桥 海淀桥</p>
      </n-layout-sider>
      <n-layout>
        <n-layout-header bordered>颐和园路</n-layout-header>
        <n-layout-content content-style="padding: 24px;"
          >平山道 <n-button @click="store.increment()">增加</n-button>
          <h1>{{ store.count }}</h1>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-space>
</template>
<script setup lang="ts">
  import request from "@/http";
  import { useCounterStore } from "@/stores/";
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
