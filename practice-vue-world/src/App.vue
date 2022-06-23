<template>
  <TraningTableVue :header="header" :rows="rows" />
</template>

<script>
import HelloWorld from "./components/basic/HelloWorld.vue";
import UserInputVue from "./components/basic/UserInput.vue";
import UserCounterVue from "./components/basic/UserCounter.vue";
import IfRenderVue from "./components/basic/IfRender.vue";
import ForRenderVue from "./components/basic/ForRender.vue";
import ComputedVue from "./components/basic/Computed.vue";
import WatchEffectVue from "./components/basic/WatchEffect.vue";
import EmitVue from "./components/basic/Emit.vue";
import SlotVue from "./components/basic/Slot.vue";
import InputExVue from "./components/training/InputEx.vue";
import CustomBtnVue from "./components/training/CustomBtn.vue";
import CustomTableVue from "./components/training/CustomTable.vue";
import TraningTableVue from "./components/training/TrainingTable.vue";
export default {
  name: "App",
  data() {
    return {
      header: ["1번 제목", "2번 제목"],
      rows: [
        [{ data: "1번 내용" }, { data: "2번 내용" }],
        [{ data: "1번 내용2", colspan: 2 }],
        [{ data: "1번 내용3", rowspan: 3 }, { data: "2번 내용3" }],
        [{ data: "2번 내용4" }],
        [{ data: "2번 내용5" }],
      ],
    };
  },
  components: {
    TraningTableVue,
  },
};
</script>
