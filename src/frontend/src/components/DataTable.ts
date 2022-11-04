import { defineComponent } from 'vue';

export default defineComponent({
    name: "DataTable",
    props: {
        title: {
            type: String,
            required: true,
        },
        headlines: {
            type: Array<String>,
            required: true,
        },
        data: {
            type: Array<Array<any>>,
            required: true,
        }
    },
});