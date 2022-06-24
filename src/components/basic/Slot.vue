<template>
  <ul style="list-style-type: none">
    <li v-for="item in items" :key="item"><slot :item="item"></slot></li>
  </ul>
</template>

<script>
export default {
  data() {
    return { items: [1, 2, 3] };
  },
};
</script>

<!-- App.vue에서 이렇게 사용
<template>
  <SlotVue>
    <template v-slot="slotProps">dd {{ slotProps }}</template>
  </SlotVue>
</template> -->
