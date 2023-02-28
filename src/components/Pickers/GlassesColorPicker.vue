<template>
    <v-card class="d-flex justify-center align-center">
        <v-color-picker v-model="store.glassesColor" class="ma-2" :swatches="[
            ['#ed2087', '#7ebee8',],
            ['#e9d49f',],
            ['#221f20',],
            ['#e8b947',],
            ['#db4052',]
        ]" show-swatches hide-inputs></v-color-picker>
    </v-card>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'
const store = useAppStore()
</script>