import { onMounted, ref, onUnmounted } from "vue";
import { loadMicroApp } from "qiankun";

export function useMicroApp(setting) {
  const microApp = ref(null);
  onMounted(() => {
    microApp.value = loadMicroApp(setting);
  });

  onUnmounted(() => {
    microApp.value.unmount();
  });
}
