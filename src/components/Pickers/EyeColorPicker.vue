<template>
    <v-card class="d-flex justify-center align-center">
        <v-color-picker v-model="store.eyeColor" class="ma-2" :swatches="[
            ['#1c1312', '#3b2113', '#944921', '#999a9c'],
            ['#907338', '#85481f', '#a1504d', '#b6c4e0'],
            ['#6c6350', '#666552', '#b1b43e', '#4bb448'],
            ['#7e7952', '#5c574a', '#55513c', '#4c72d3'],
            ['#525156', '#7a8e92', '#a3d6cd', '#6649e7'],
        ]" show-swatches hide-inputs></v-color-picker>
    </v-card>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'
const store = useAppStore()
</script>