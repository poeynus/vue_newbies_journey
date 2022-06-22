import { createApp, ref } from "vue/dist/vue.esm-bundler";

const app = createApp({});

// 신규 컴포넌트를 app에 등록
app.component("counter", {
  // provide값을 불러 사용할 수 있다.
  inject: ["counter_header"],
  setup() {
    const count = ref(0);
    return { count };
  },
  template: `
        <span>{{ counter_header }}</span>
        <button @click="count++" v-text="count" />
        <hr/>
    `,
});

// app을 #app 엘리먼트에 장착
app.config.globalProperties.title = "Vue 3 Demo";
app.provide("counter_header", "Counter ");
app.mount("#app");
