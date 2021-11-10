<template>
  <div>创作 <textarea style="width: 100%; height: 80vh" id="write"></textarea></div>
</template>
<script setup lang="ts">
  import { onMounted } from "vue";
  import SimpleMDE from "simplemde";
  import "simplemde/dist/simplemde.min.css";

  onMounted(() => {
    new SimpleMDE({
      element: document.getElementById("write"),
      autofocus: true,
      autosave: {
        enabled: true,
        uniqueId: "MyUniqueID",
        delay: 1000,
      },
    });
  });
</script>
<style scoped></style>
