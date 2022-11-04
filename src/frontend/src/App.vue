<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/navigation/Header.vue';
import Sidebar from './components/navigation/Sidebar.vue';
</script>

<template>
  <div class="wrapper">

    <Header />
    <Sidebar />

    <div class="content-wrapper" style="min-height: 993px;">
      <RouterView />
    </div>
  </div>
</template>
