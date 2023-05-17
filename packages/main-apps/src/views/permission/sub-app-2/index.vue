<template>
  <div>
    <div id="subapp" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMicroApp } from "../../../layout/hooks/useMicroApp";
import { useUserStore } from "@/store/modules/user";

export default defineComponent({
  name: "SubApp2",
  setup() {
    useMicroApp({
      name: "SubApp2",
      entry: "//localhost:5174/",
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
