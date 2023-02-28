<template>
    <v-container fluid class="d-flex justify-center align-center">
        <v-item-group mandatory v-model="store.glassesStyle">
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
                                <Glasses2 />
                            </svg>
                        </v-card>
                    </v-item>
                </v-col>
                <v-col>
                    <v-item v-slot="{ isSelected, toggle }" key="3" value="3">
                        <v-card :color="isSelected ? '#ebecf0' : ''" width="150" @click="toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.85 311.76">
                                <Glasses3 />
                            </svg>
                        </v-card>
                    </v-item>
                </v-col>
                <v-col>
                    <v-item v-slot="{ isSelected, toggle }" key="4" value="4">
                        <v-card :color="isSelected ? '#ebecf0' : ''" width="150" @click="toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.85 311.76">
                                <Glasses4 />
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
import Glasses2 from '../Components/Glasses/Glasses2.vue';
import Glasses3 from '../Components/Glasses/Glasses3.vue';
import Glasses4 from '../Components/Glasses/Glasses4.vue';
const store = useAppStore()
</script>