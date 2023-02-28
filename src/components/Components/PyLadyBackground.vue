<template>
  <g v-if="store.backgroundShape == 2">
    <Background2 />
  </g>
  <g v-if="store.backgroundShape == 3">
    <Background3 />
  </g>
  <g v-if="store.backgroundShape == 4">
    <Background4 />
  </g>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'
import Background2 from './Backgrounds/Background2.vue';
import Background3 from './Backgrounds/Background3.vue';
import Background4 from './Backgrounds/Background4.vue';
const store = useAppStore()
</script>
