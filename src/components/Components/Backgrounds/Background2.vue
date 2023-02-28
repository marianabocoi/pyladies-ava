<template>
    <circle :fill="store.backgroundColor" cx="138.43" cy="142.94" r="137.25" />
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'
const store = useAppStore()
</script>
