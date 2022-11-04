<script lang="ts" src="./Modal.ts"></script>

<template>
    <Teleport to="body">
        <div v-if="show" class="modal fade show" style="display: block; padding-right: 15px;" aria-modal="true"
            role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">{{ title }}</h4>
                        <button type="button" class="close" @click="close" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <slot />
                    </div>
                    <div class="modal-footer justify-content-between">
                        <slot name="footer" />
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <div v-if="show" class="modal-backdrop fade show"></div>
    </Teleport>
</template>