<template>
  <div>
    <div id="subapp" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMicroApp } from "../../../layout/hooks/useMicroApp";
import { useUserStore } from "../../../store/modules/user";

export default defineComponent({
  name: "SubApp1",
  setup() {
    useMicroApp({
      name: "SubApp1",
      entry: "//localhost:5173/",
      container: "#subapp",
      props: {
        userState: useUserStore().$state
      }
    });
    return {};
  }
});
</script>

<style scoped></style>
