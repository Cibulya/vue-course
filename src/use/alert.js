import { ref } from "vue"

export const useAlert = () => {
    const alert = ref(false);
    const toggle = () => alert.value = !alert.value;
    const closeAlert = () => alert.value = false;

    return { alert,toggle,closeAlert}
}