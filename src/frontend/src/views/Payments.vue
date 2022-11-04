<script lang="ts">
import Modal from '@/components/Modal.vue';
import DataTable from '@/components/DataTable.vue'
import EntryForm from '@/components/EntryForm.vue'
import Toast, { type ToastProps } from '@/components/Toast.vue'
import { defineComponent, ref, type Ref } from 'vue';
import generateEntry, { type Entry } from '../../../models/entry';
import moment from 'moment';
import EntryTable from './EntryTable.vue';

export default defineComponent({
    name: 'Payments',
    setup() {
        const addIncome = ref(generateEntry());
        const data: Array<Entry> = [];
        const tableData: Ref<any[][]> = ref([]);
        const toasts: Ref<ToastProps[]> = ref([]);
        return { addIncome, data, updateTrigger: 0, tableData, toasts };
    },
    methods: {
        async saveAddPayment(entry: Entry) {
            this.data.push(entry);
            this.tableData = this.data.map(d => ([
                moment(d.date).format('DD.MM.YYYY'),
                d.description,
                d.amount.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }),
                `${d.percentage}%`,
            ]))

            console.log("// TODO! Save Add Payment backend")

            this.toasts = this.toasts.concat({
                type: 'success',
                title: 'New Payment',
                text: 'New payment was successfully added',
            })

            setTimeout(() => {
                this.toasts.shift();
                this.$forceUpdate();
            }, 2000);
        }
    },
    components: {
        Modal,
        DataTable,
        EntryForm,
        Toast,
        EntryTable
    }
})
</script>

<template>
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Payments</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                        <li class="breadcrumb-item active">
                            <font-awesome-icon icon="basket-shopping" /> Payments
                        </li>
                    </ol>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>
    <EntryTable :data="tableData" :toasts="toasts" @add:entry="saveAddPayment" />
</template>
  
