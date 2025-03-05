import { ref } from "vue";

const isVisible = ref(false);
const type = ref("success");
const title = ref("");
const message = ref("");
let autoCloseTimeout: number | undefined;

export function useAlert() {
  const closeAlert = () => {
    isVisible.value = false;
    if (autoCloseTimeout) {
      clearTimeout(autoCloseTimeout);
    }
  };

  const showAlert = ({
    type: alertType = "success",
    title: alertTitle = "",
    message: alertMessage = "",
    autoCloseDelay = 3000,
  }) => {
    type.value = alertType;
    title.value = alertTitle;
    message.value = alertMessage;
    isVisible.value = true;

    if (autoCloseTimeout) {
      clearTimeout(autoCloseTimeout);
    }
    autoCloseTimeout = window.setTimeout(() => {
      closeAlert();
    }, autoCloseDelay);
  };

  return {
    isVisible,
    type,
    title,
    message,
    showAlert,
    closeAlert,
  };
}
