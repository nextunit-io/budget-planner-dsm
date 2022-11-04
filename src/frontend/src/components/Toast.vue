<script lang="ts" src="./Toast.ts"></script>

<template>
    <div class="toast fade show" :class="`bg-${type}`">
        <div class="toast-header"><strong class="mr-auto">{{ title }}</strong><small>{{ subtitle }}</small></div>
        <div class="toast-body">{{ text }}</div>
    </div>
</template>