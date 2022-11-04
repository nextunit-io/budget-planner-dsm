<script lang="ts">
import Modal from '@/components/Modal.vue';
import DataTable from '@/components/DataTable.vue'
import EntryForm from '@/components/EntryForm.vue'
import Toast, { type ToastProps } from '@/components/Toast.vue'
import { defineComponent, ref, toRefs, watch } from 'vue';
import generateEntry from '../../../models/entry';

export default defineComponent({
    name: 'EntryTable',
    emits: [
        'add:entry',
        'remove:entry',
    ],
    props: {
        data: {
            type: Array<Array<any>>,
            required: true,
        },
        toasts: {
            type: Array<ToastProps>,
            requierd: true,
            default: () => [],
        }
    },
    setup(props) {
        const isAddModalVisible = ref(false);
        const addEntryObject = ref(generateEntry());
        const { data, toasts } = toRefs(props);

        return { isAddModalVisible, addEntryObject, updateTrigger: 0, data, toasts };
    },
    methods: {
        showAddModal() {
            this.addEntryObject = generateEntry();
            this.isAddModalVisible = true
        },
        addEntry() {
            this.$emit('add:entry', this.addEntryObject)
            this.isAddModalVisible = false
        },
    },
    components: {
        Modal,
        DataTable,
        EntryForm,
        Toast,
    }
})
</script>

<template>
    <div>
        <Modal title="Add entry" v-model:show="isAddModalVisible">
            <EntryForm v-model:entry="addEntryObject" />
            <template v-slot:footer>
                <button type="button" class="btn btn-default" @click="isAddModalVisible = false">Close</button>
                <button type="button" class="btn btn-primary" @click="addEntry">Save changes</button>
            </template>
        </Modal>
    </div>
    <section class="content">
        <div class="container-fluid">
            <DataTable title="Income" :headlines="[
                'Date',
                'Description',
                'Amount',
                'Probability'
            ]" :data="data">
                <template v-slot:actions>
                    <button class="btn btn-secondary buttons-copy buttons-html5 float-right" tabindex="0" type="button"
                        @click="showAddModal"><span>+</span></button>
                </template>
            </DataTable>
        </div>
    </section>
    <Teleport to="body">
        <div v-if="toasts.length > 0" class="toasts-top-right fixed">
            <Toast v-for="(item) in toasts" :type="item.type" :title="item.title" :subtitle="item.subtitle"
                :text="item.text" />
        </div>
    </Teleport>
</template>