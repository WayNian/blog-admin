import echarts from "@/utils/echarts";
import type { EChartsOption } from "echarts";
import type { Ref } from "vue";
import { ref, unref } from "vue";

export function useECharts(elRef: Ref<HTMLDivElement>) {
  let chartInstance: echarts.ECharts | null = null;
  const options = ref<EChartsOption>({});

  const initECharts = () => {
    if (!elRef) return;
    const el = unref(elRef);
    chartInstance = echarts.init(el);
  };
  const resize = () => {
    if (!chartInstance) {
      initECharts();
    }
    chartInstance?.resize();
  };
  const addResizeListener = (): void => {
    window.addEventListener("resize", resize);
  };
  const removeResizeListener = (): void => {
    window.removeEventListener("resize", resize);
  };
  const setOptions = (opt: EChartsOption) => {
    options.value = opt;
    if (!chartInstance) {
      initECharts();
    }
    chartInstance?.setOption(options.value);
    addResizeListener();
  };

  return {
    setOptions,
    removeResizeListener,
    resize,
  };
}
