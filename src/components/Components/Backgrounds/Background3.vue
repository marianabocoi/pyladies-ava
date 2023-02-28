<template>
    <rect :fill="store.backgroundColor" width="276.85" height="311.76" rx="0" ry="0" />
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'
const store = useAppStore()
</script>
