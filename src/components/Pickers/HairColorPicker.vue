<template>
    <v-card class="d-flex justify-center align-center">
        <v-color-picker v-model="store.hairColor" class="ma-2" :swatches="[
            ['#181313', '#53391c', '#6d4021'],
            ['#8c2825', '#efaf62', '#e4e1ce'],
        ]" show-swatches hide-inputs></v-color-picker>
    </v-card>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'
const store = useAppStore()
</script>