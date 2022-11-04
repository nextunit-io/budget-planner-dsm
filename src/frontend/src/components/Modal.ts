import { defineComponent } from "vue";

export default defineComponent({
    name: 'Modal',
    props: {
        title: {
            type: String,
            required: true,
        },
        show: {
            type: Boolean,
            required: false,
            default: false,
        }
    },
    emits: ['update:show'],
    methods: {
        close() {
            this.$emit('update:show', false);
        },
        open() {
            this.$emit('update:show', true);
        }
    },
})