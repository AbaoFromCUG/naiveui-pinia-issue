import { useMessage, useNotification } from "naive-ui";
import { defineStore } from "pinia";

export const useBarStore = defineStore("bar-store", () => {
    const notifier = useNotification()
    const messager = useMessage()

    const message = () => {
        messager.info("Hello")
    }

    const notify = () => {
        notifier.info({ content: "Hello" })
    }
    return {
        message,
        notify
    }
})
