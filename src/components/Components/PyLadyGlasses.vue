<template>
  <g v-if="store.glassesStyle == 2">
    <Glasses2 />
  </g>
  <g v-if="store.glassesStyle == 3">
    <Glasses3 />
  </g>
  <g v-if="store.glassesStyle == 4">
    <Glasses4 />
  </g>
</template>

<script setup lang="ts">
import Glasses2 from './Glasses/Glasses2.vue';
import Glasses3 from './Glasses/Glasses3.vue';
import Glasses4 from './Glasses/Glasses4.vue';
import { useAppStore } from '@/store/app'
const store = useAppStore()
</script>
