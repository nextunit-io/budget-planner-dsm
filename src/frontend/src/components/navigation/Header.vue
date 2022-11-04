<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-dark">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
            <li class="nav-item d-none d-sm-inline-block">
                <router-link to="/" :class="'nav-link'">
                    <font-awesome-icon icon="tachometer-alt" />
                    Dashboards
                </router-link>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <router-link to="/income" :class="'nav-link'">
                    <font-awesome-icon icon="sack-dollar" />
                    Income
                </router-link>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <router-link to="/payments" :class="'nav-link'">
                    <font-awesome-icon icon="basket-shopping" />
                    Payments
                </router-link>
            </li>
        </ul>
    </nav>
    <!-- /.navbar -->
</template>