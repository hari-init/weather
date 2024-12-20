import { defineStore } from "pinia";
import { computed, ref } from "vue";
export const useStore = defineStore("store", () => {
  const theme = ref("");
  const isDark = ref(false);
  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  return { theme, toggleTheme, isDark };
});
