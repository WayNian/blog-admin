import SimpleMDE from "simplemde";
import "simplemde/dist/simplemde.min.css";
import type { Ref } from "vue";
import { ref, unref } from "vue";

export function useECharts(elRef: Ref<HTMLDivElement>) {
  return {
    setOptions,
    removeResizeListener,
    resize,
  };
}
