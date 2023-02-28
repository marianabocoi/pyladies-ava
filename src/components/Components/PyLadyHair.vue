<template>
  {{ store.hairStyles[store.hairStyle] }}
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'
const store = useAppStore()
</script>
