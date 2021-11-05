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
            <span>日新增 {{ item.dayUp }}</span>
            <span>周新增 {{ item.monthUp }}</span>
          </div>
        </div>
        <template #footer>总访问量：{{ item.count }}</template>
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
  <n-button @click="resize">点击</n-button>
  <n-grid x-gap="12" :cols="1">
    <n-gi style="padding-top: 20px">
      <n-card :bordered="false">
        <div style="width: 100%; height: 300px" ref="echarts"></div>
      </n-card>
    </n-gi>
  </n-grid>
</template>
<script setup lang="ts">
  import { useECharts } from "@/hooks/useECharts";
  import { onMounted, onBeforeUnmount, Ref, ref } from "vue";
  import { useConfigStore } from "@/stores/config";

  const echarts = ref<HTMLDivElement | null>(null);

  const { setOptions, removeResizeListener, resize } = useECharts(echarts as Ref<HTMLDivElement>);
  const store = useConfigStore();

  store.$subscribe(() => {
    setTimeout(() => {
      resize();
    }, 500);
  });

  onMounted(() => {
    setOptions({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          lineStyle: {
            width: 1,
            color: "#019680",
          },
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "6:00",
          "7:00",
          "8:00",
          "9:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
          "23:00",
        ],
        splitLine: {
          show: true,
          lineStyle: {
            width: 1,
            type: "solid",
            color: "rgba(226,226,226,0.5)",
          },
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: [
        {
          type: "value",
          max: 80000,
          splitNumber: 4,
          axisTick: {
            show: false,
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ["rgba(255,255,255,0.2)", "rgba(226,226,226,0.2)"],
            },
          },
        },
      ],
      grid: {
        left: "1%",
        right: "1%",
        top: "2  %",
        bottom: 0,
        containLabel: true,
      },
      series: [
        {
          smooth: true,
          data: [
            111, 222, 4000, 18000, 33333, 55555, 66666, 33333, 14000, 36000, 66666, 44444, 22222,
            11111, 4000, 2000, 500, 333, 222, 111,
          ],
          type: "line",
          areaStyle: {},
          itemStyle: {
            color: "#5ab1ef",
          },
        },
        {
          smooth: true,
          data: [
            33, 66, 88, 333, 3333, 5000, 18000, 3000, 1200, 13000, 22000, 11000, 2221, 1201, 390,
            198, 60, 30, 22, 11,
          ],
          type: "line",
          areaStyle: {},
          itemStyle: {
            color: "#019680",
          },
        },
      ],
    });
  });

  onBeforeUnmount(() => {
    removeResizeListener();
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
