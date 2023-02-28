<template>
    <v-card class="d-flex justify-center align-center">
        <v-color-picker v-model="store.skinColor" class="ma-2" :swatches="[
            ['#25140b', '#e1af90'],
            ['#47230f', '#fdd6c2'],
            ['#944921'],
            ['#e3a669'],
        ]" show-swatches hide-inputs></v-color-picker>
    </v-card>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'
const store = useAppStore()
</script>