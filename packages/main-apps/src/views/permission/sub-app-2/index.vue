<template>
  <div>
    <div id="subapp" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted } from "vue";
import { loadMicroApp } from "qiankun";

export default defineComponent({
  name: "SubApp2",
  setup() {
    const microApp = ref(null);
    onMounted(() => {
      microApp.value = loadMicroApp({
        name: "SubApp2",
        entry: "//localhost:5174/",
        container: "#subapp"
      });
      console.log(microApp);
    });

    onUnmounted(() => {
      microApp.value.unmount();
    });

    return {};
  }
});
</script>

<style scoped></style>
