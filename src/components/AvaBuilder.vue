<template>
  <v-card class="d-flex justify-center align-center">

    <AvaContainer width="300" />
    <div width=200>
      <!--    -->
      <v-row>
        <v-col>
          <v-btn prepend-icon="mdi-dice-5" @click="store.randomizeAva">
            I feel lucky!
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-btn prepend-icon="mdi-download-circle-outline" @click="downloadSvg()">
            Download SVG
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn prepend-icon="mdi-download-circle" @click="downloadPNG()">
            Download PNG
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-card>
  <v-card>
    <v-tabs v-model="tab" align-tabs="center" center-active>
      <v-tab value="1">Skin Color</v-tab>
      <v-tab value="2">Eye Color</v-tab>
      <v-tab value="3">Hair Shapes</v-tab>
      <v-tab value="4">Hair Color</v-tab>
      <v-tab value="5">Glasses Shapes</v-tab>
      <v-tab value="6">Glasses Color</v-tab>
      <v-tab value="7">Background Shapes</v-tab>
      <v-tab value="8">Background Color</v-tab>
    </v-tabs>
    <v-window v-model="tab">

      <v-window-item key="1" value="1">
        <SkinColorPicker />
      </v-window-item>
      <v-window-item key="2" value="2">
        <EyeColorPicker />
      </v-window-item>
      <v-window-item key="3" value="3">
        <HairShapePicker />
      </v-window-item>
      <v-window-item key="4" value="4">
        <HairColorPicker />
      </v-window-item>

      <v-window-item key="5" value="5">
        <GlassesShapePicker />
      </v-window-item>
      <v-window-item key="6" value="6">
        <GlassesColorPicker />
      </v-window-item>

      <v-window-item key="7" value="7">
        <BackgroundShapePicker />
      </v-window-item>
      <v-window-item key="8" value="8">
        <BackgroundColorPicker />
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script setup>
import AvaContainer from './AvaContainer.vue';
import HairColorPicker from './Pickers/HairColorPicker.vue';
import SkinColorPicker from './Pickers/SkinColorPicker.vue';
import EyeColorPicker from './Pickers/EyeColorPicker.vue';
import HairShapePicker from './Pickers/HairShapePicker.vue';
import GlassesShapePicker from './Pickers/GlassesShapePicker.vue';
import GlassesColorPicker from './Pickers/GlassesColorPicker.vue';
import { saveSvgAsPng } from 'save-svg-as-png';

import { useAppStore } from '@/store/app'
import BackgroundColorPicker from './Pickers/BackgroundColorPicker.vue';
import BackgroundShapePicker from './Pickers/BackgroundShapePicker.vue';
const store = useAppStore()
</script>
<script>
export default {
  data: () => ({
    tab: null,
  }),
  methods: {
    downloadSvg() {
      const svg = document.getElementById("ava-container");
      const base64doc = btoa(unescape(encodeURIComponent(svg.outerHTML)));
      const a = document.createElement("a");
      const e = new MouseEvent("click");
      a.download = "ava-" + Date.now() + ".svg";
      a.href = "data:image/svg+xml;base64," + base64doc;
      a.dispatchEvent(e);
    },
    downloadPNG() {
      saveSvgAsPng(document.getElementById("ava-container"), "ava-" + Date.now() + ".png");
    },
  },
  components: { BackgroundColorPicker, BackgroundShapePicker }
}

</script>
