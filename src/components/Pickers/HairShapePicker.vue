<template>
    <v-container fluid class="d-flex justify-center align-center">
        <v-item-group mandatory v-model="store.hairStyle">
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
                                <Hair2 />
                            </svg>
                        </v-card>
                    </v-item>
                </v-col>
                <v-col>
                    <v-item v-slot="{ isSelected, toggle }" key="3" value="3">
                        <v-card :color="isSelected ? '#ebecf0' : ''" width="150" @click="toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.85 311.76">
                                <Hair3 />
                            </svg>
                        </v-card>
                    </v-item>
                </v-col>
                <v-col>
                    <v-item v-slot="{ isSelected, toggle }" key="4" value="4">
                        <v-card :color="isSelected ? '#ebecf0' : ''" width="150" @click="toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.85 311.76">
                                <Hair4 />
                            </svg>
                        </v-card>
                    </v-item>
                </v-col>
                <v-col>
                    <v-item v-slot="{ isSelected, toggle }" key="5" value="5">
                        <v-card :color="isSelected ? '#ebecf0' : ''" width="150" @click="toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.85 311.76">
                                <Hair5 />
                            </svg>
                        </v-card>
                    </v-item>
                </v-col>
                <v-col>
                    <v-item v-slot="{ isSelected, toggle }" key="6" value="6">
                        <v-card :color="isSelected ? '#ebecf0' : ''" width="150" @click="toggle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.85 311.76">
                                <Hair6 />
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
import Hair2 from '../Components/Hair/Hair2.vue';
import Hair3 from '../Components/Hair/Hair3.vue';
import Hair4 from '../Components/Hair/Hair4.vue';
import Hair5 from '../Components/Hair/Hair5.vue';
import Hair6 from '../Components/Hair/Hair6.vue';
const store = useAppStore()
</script>