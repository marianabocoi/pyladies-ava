<template>
    <v-container fluid class="d-flex justify-center align-center">
        <v-item-group mandatory v-model="store.backgroundShape">
            <v-row>
                <v-col>
                    <v-item v-slot="{ isSelected, toggle }" key="1" value="1">
                        <v-card :color="isSelected ? '#ebecf0' : ''" width="150" @click="toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.85 311.76">

                            </svg>
                        </v-card>
                    </v-item>
                </v-col>
                <v-col>
                    <v-item v-slot="{ isSelected, toggle }" key="2" value="2">
                        <v-card :color="isSelected ? '#ebecf0' : ''" width="150" @click="toggle">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.85 311.76">
                                <Background2 />
                            </svg>
                        </v-card>
                    </v-item>
                </v-col>
                <v-col>
                    <v-item v-slot="{ isSelected, toggle }" key="3" value="3">
                        <v-card :color="isSelected ? '#ebecf0' : ''" width="150" @click="toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.85 311.76">
                                <Background3 />
                            </svg>
                        </v-card>
                    </v-item>
                </v-col>
                <v-col>
                    <v-item v-slot="{ isSelected, toggle }" key="4" value="4">
                        <v-card :color="isSelected ? '#ebecf0' : ''" width="150" @click="toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.85 311.76">
                                <Background4 />
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
import Background2 from '../Components/Backgrounds/Background2.vue';
import Background3 from '../Components/Backgrounds/Background3.vue';
import Background4 from '../Components/Backgrounds/Background4.vue';
const store = useAppStore()
</script>