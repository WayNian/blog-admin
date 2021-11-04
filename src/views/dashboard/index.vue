<template>
  <n-grid x-gap="12" :cols="4">
    <n-gi v-for="item in dashboardDataList" :key="item.title">
      <n-card
        :title="item.title"
        :segmented="{
          content: 'hard',
          header: 'hard',
          footer: 'hard',
        }"
        header-style="padding: 12px 15px"
        content-style="padding: 12px 15px"
        footer-style="padding: 12px 15px"
        :bordered="false"
      >
        <div>
          <span style="font-size: 30px">{{ item.value }}</span>
          <div class="text-between">
            <span>日新增 {{ item.dayUp }}</span
            ><span>周新增 {{ item.monthUp }}</span>
          </div>
        </div>
        <template #footer> 总访问量：{{ item.count }} </template>
      </n-card>
    </n-gi>
    <n-gi>
      <div class="green"></div>
    </n-gi>
    <n-gi>
      <div class="light-green"></div>
    </n-gi>
    <n-gi>
      <div class="green"></div>
    </n-gi>
  </n-grid>
  <n-grid x-gap="12" :cols="1">
    <n-gi> <div id="echarts"></div> </n-gi>
  </n-grid>
</template>
<script setup lang="ts">
var myChart = echarts.init(document.getElementById("echarts"));
myChart.setOption({
  // ...
});
const dashboardDataList = [
  {
    title: "访问量",
    value: 11153,
    dayUp: 123,
    monthUp: 56,
    count: 2036,
  },
  {
    title: "阅读数",
    value: 11153,
    dayUp: 123,
    monthUp: 56,
    count: 2036,
  },
  {
    title: "评论数",
    value: 11153,
    dayUp: 123,
    monthUp: 56,
    count: 2036,
  },
  {
    title: "文章",
    value: 11153,
    dayUp: 123,
    monthUp: 56,
    count: 2036,
  },
];
</script>
<style scoped>
.text-between {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
</style>
