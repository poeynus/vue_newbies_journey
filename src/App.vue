<template>
  <header>
    <hgroup class="my-5">
      <h1>나의 할일</h1>
      <em>{{ today }}</em>
    </hgroup>
  </header>
  <todo-list-container />
</template>

<script>
export default {
  name: "App",
};
</script>

<!--
  script를 script setup으로 변경한 코드
  따로 return을 안해도 Vue가 자동으로 설정해줌
-->
<script setup>
import { inject } from "vue";
import TodoListContainerVue from "./components/todoList/components/TodoListContainer.vue";

const today = inject("today");
</script>

<style scoped>
hgroup {
  text-align: center;
  font-family: "Arial Bold";
}
hgroup h1 {
  font-weight: bolder;
}
</style>

<!--  
변경전 script 코드
<script>
import { inject } from "@vue/runtime-core";
import TodoListContainer from "./components/todoList/components/TodoListContainer.vue";
export default {
  components: { TodoListContainer },
  name: "App",
  setup() {
    const today = inject("today");
    return { today };
  },
};
</script>
-->
