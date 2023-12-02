<template>
  <g v-if="store.hairStyle == 2">
    <Hair2 />
  </g>
  <g v-if="store.hairStyle == 3">
    <Hair3 />
  </g>
  <g v-if="store.hairStyle == 4">
    <Hair4 />
  </g>
  <g v-if="store.hairStyle == 5">
    <Hair5 />
  </g>
  <g v-if="store.hairStyle == 6">
    <Hair6 />
  </g>
</template>

<script setup lang="ts">
import Hair2 from './Hair/Hair2.vue';
import Hair3 from './Hair/Hair3.vue';
import Hair4 from './Hair/Hair4.vue';
import Hair5 from './Hair/Hair5.vue';
import Hair6 from './Hair/Hair6.vue';
import { useAppStore } from '@/store/app'
const store = useAppStore()
</script>
