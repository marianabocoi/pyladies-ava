<template>
    <v-container fluid class="d-flex justify-center align-center">
        <v-item-group mandatory v-model="store.hairStyle">
            <v-row>
                <v-col v-for="n in store.hairStyles.length">
                    <v-item v-slot="{ isSelected, toggle }" :key="n - 1" :value="n - 1">
                        <v-card :color="isSelected ? '#ebecf0' : ''" width="150" @click="toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.85 311.76">
                                {{ store.hairStyles[n - 1] }}
                            </svg>


                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-item-group>
    </v-container>
</template>

<script setup>

import { useAppStore } from '@/store/app'
const store = useAppStore()
</script>