<template>
  <div style="width: 200px">
    <ol>
      <li v-for="(item, k) in items" v-bind:key="k">{{ item }}</li>
      <li v-for="(item, k) in items2" v-bind:key="k">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const items = reactive(["1번", "2번", "3번"]);
    const items2 = reactive({ 1: "1객", 2: "2객", 3: "3객" });
    return { items, items2 };
  },
};
</script>
