<template>
  <p>{{ counter }}</p>
  <p v-if="counter < 5">5보다 작습니다.</p>
  <p v-else>5와 같거나 큽니다.</p>
  <button @click="counter++">숫자 상승</button>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let counter = ref(0);
    return { counter };
  },
};
</script>
