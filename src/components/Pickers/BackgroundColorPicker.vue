<template>
    <v-card class="d-flex justify-center align-center">
        <v-color-picker v-model="store.backgroundColor" class="ma-2" :swatches="[
            ['#d67977', '#ae6cc2', '#7c85c6', '#70c0f2', '#efbecf', '#f1f4c7', '#56bca5'],
            ['#69b3ad', '#b6d48b', '#fdf188', '#f4b960', '#cec5e6', '#fbecba', '#9b1ff6'],
            ['#9d887f', '#94a3ac', '#b63830', '#612194', '#c2ddf8', '#f7cebe'],
            ['#2c348f', '#3375b8', '#2c675c', '#618a3c', '#bee9f2', '#b9aba5'],
            ['#edab46', '#df742d', '#4b3530', '#3a474f', '#cee5cc', '#d2fd51'],
        ]" show-swatches hide-inputs></v-color-picker>
    </v-card>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'
const store = useAppStore()
</script>