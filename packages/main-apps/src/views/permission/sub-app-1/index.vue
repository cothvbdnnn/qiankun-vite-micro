<template>
  <div>
    <div id="subapp" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted } from "vue";
import { loadMicroApp } from "qiankun";

export default defineComponent({
  name: "SubApp1",
  setup() {
    const microApp = ref(null);
    onMounted(() => {
      microApp.value = loadMicroApp({
        name: "SubApp1",
        entry: "//localhost:5173/",
        container: "#subapp"
      });
    });

    onUnmounted(() => {
      microApp.value.unmount();
    });

    return {};
  }
});
</script>

<style scoped></style>
