<script lang="ts" src="./EntryForm.ts"></script>

<template>
    <div class="form-group">
        <label>Date</label>
        <div class="input-group mb-3">
            <Datepicker v-model="entry.date" :enableTimePicker="false" format="dd.MM.yyyy" />
        </div>
    </div>
    <div class="form-group">
        <label>Description</label>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Description for the entry" v-model="entry.description">
        </div>
    </div>
    <div class="form-group">
        <label>Amount</label>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">€</span>
            </div>
            <input type="number" class="form-control" placeholder="" v-model="entry.amount">
            <div class="input-group-append">
                <span class="input-group-text">.00</span>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label>Probability</label>
        <div class="input-group mb-3">
            <input type="number" class="form-control" placeholder="" v-model="entry.percentage">
            <div class="input-group-append">
                <span class="input-group-text">%</span>
            </div>
        </div>
    </div>
</template>