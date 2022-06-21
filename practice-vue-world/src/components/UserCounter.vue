<template>
  <p>{{ counter + counter2 }}</p>
  <button @click="counter++">숫자 상승</button>
  <button @click="onClick">숫자 상승</button>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      counter2: 0,
    };
  },
  setup() {
    let counter = ref(0);

    const onClick = (evt) => {
      if (evt) {
        evt.preventDefault();
        counter.value++;
      }
    };
    return {
      counter,
      onClick,
    };
  },
  methods: {
    onClick2: function (evt) {
      if (evt) {
        evt.preventDefault();
      }
      this.counter2++;
    },
  },
};
</script>
