<template>
    <svg id="ava-container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.85 311.76">
        <PyLadyBackground />
        <PyLadyFace />
        <PyLadyEyes />
        <PyLadyHair />
        <PyLadyGlasses />

    </svg>
</template>

<script setup lang="ts">
import PyLadyHair from './Components/PyLadyHair.vue';
import PyLadyEyes from './Components/PyLadyEyes.vue';
import PyLadyFace from './Components/PyLadyFace.vue';
import PyLadyGlasses from './Components/PyLadyGlasses.vue';
import { useAppStore } from '@/store/app'
import PyLadyBackground from './Components/PyLadyBackground.vue';
const store = useAppStore()
</script>
