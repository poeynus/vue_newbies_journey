import { createApp, ref } from "vue/dist/vue.esm-bundler";
const app = createApp({});
app.component("Component", {
  setup(props, context) {
    const msg = context.attrs.msg;
    return { msg };
  },
  template: `<Component3></Component3>`,
});

app.component("Component2", {
  inheritAttrs: false,
  setup(props, context) {
    const msg = context.attrs.msg;
    return { msg };
  },
  template: `<Component3></Component3>`,
});

app.component("Component3", {
  template: `
  <div>
  <p>@Component: {{ $attrs.msg }}</p>
  </div>`,
});
app.mount("#app");
