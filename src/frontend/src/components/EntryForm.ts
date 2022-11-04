import { defineComponent } from 'vue';
import type { Entry } from '../../../models/entry';
import Datepicker from '@vuepic/vue-datepicker';

export default defineComponent({
    name: "EntryForm",
    props: {
        entry: {
            type: Object as () => Entry,
            required: true,
        },
    },
    emits: ['update:entry'],
    components: { Datepicker },
});