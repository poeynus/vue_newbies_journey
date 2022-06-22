<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/basic/HelloWorld.vue";
import UserInputVue from "./components/basic/UserInput.vue";
import UserCounterVue from "./components/basic/UserCounter.vue";
import IfRenderVue from "./components/basic/IfRender.vue";
import ForRenderVue from "./components/basic/ForRender.vue";
import ComputedVue from "./components/basic/Computed.vue";
import WatchEffectVue from "./components/basic/WatchEffect.vue";
import EmitVue from "./components/basic/Emit.vue";
import SlotVue from "./components/basic/Slot.vue";
</script>

<template>
  <EmitVue />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
