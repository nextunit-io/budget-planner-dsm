import { createApp, defineComponent, type PropType } from "vue";

export interface ToastProps {
    type: 'success' | 'info' | 'danger' | 'warning',
    title: string,
    subtitle?: string,
    text: string,
}


const component = defineComponent({
    name: 'Toast',
    props: {
        type: {
            type: String as PropType<'success' | 'info' | 'danger' | 'warning'>,
            required: true,
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false
        },
        text: {
            type: String,
            required: true
        }
    }
})

const EventBus = createApp(component);

export default component;