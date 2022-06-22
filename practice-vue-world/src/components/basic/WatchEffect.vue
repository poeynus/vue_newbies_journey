<template>
  <p>{{ count_c_1 }}</p>
  <button @click="count_c_1++">1st API 증가</button>
  <p>{{ count_c_2 }}</p>
  <button @click="count_c_2++">2nd API 증가</button>
  <p>상태: {{ state }}</p>
  <button @click="onStop()">watchEffect 중지</button>
</template>

<script>
import { watch, watchEffect, ref } from "vue";
export default {
  setup() {
    const count_c_1 = ref(0);
    const count_c_2 = ref(0);
    const state = ref("실행 중");

    watch(
      count_c_1,
      (cur, prev) => {
        console.log("Composition Api Watch : " + prev + " ==> " + cur);
      },
      { immediate: true }
    );

    watch([count_c_1, count_c_2], (cur, prev) => {
      console.log("Composition Api muiltiple Watch : " + prev + " ==> " + cur);
    });

    const stop = watchEffect(
      () => {
        console.log("Composition API watcheffect called " + count_c_2.value);
      },
      { flush: "post" }
    );

    const onStop = () => {
      state.value = "중지";
      stop();
    };

    return {
      count_c_1,
      count_c_2,
      state,
      onStop,
    };
  },
};
</script>
