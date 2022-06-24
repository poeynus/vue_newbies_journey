<template>
  <button v-bind="$attrs" :type="type" :class="classes" ref="button">
    <slot></slot>
  </button>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  props: {
    type: {
      default: "button",
      validator: (value) => {
        const allowed = ["button", "submit", "reset"];
        return allowed.includes(value);
      },
    },
    sm: Boolean,
    md: {
      type: Boolean,
      default: true,
    },
    lg: Boolean,
    pill: Boolean,
  },
  setup(props, context) {
    const classes = [];
    const button = ref(null);

    if (props.sm) classes.push("sm");
    else if (props.lg) classes.push("lg");
    else classes.push("md");

    if (props.pill) classes.push("pill");

    onMounted(() => {
      Object.keys(context.attrs).forEach((attr) => {
        if (attr.startsWith("text-")) {
          button.value.style.color = attr.substring(5);
        }
        if (attr.startsWith("background-")) {
          button.value.style.background = attr.substring(11);
        }
      });
    });
    return { classes, button };
  },
};
</script>

<style scoped>
button {
  outline: none;
}

.sm {
  height: 20px;
  font-size: 13px;
}

.md {
  height: 30px;
  font-size: 22px;
}

.lg {
  height: 40px;
  font-size: 31px;
}

.pill {
  border-radius: 16px;
}
</style>

<!-- App.vue에서 이렇게 씀
<template>
  <CustomBtnVue sm>MyButton</CustomBtnVue>
  <CustomBtnVue>MyButton</CustomBtnVue>
  <CustomBtnVue lg background-white>MyButton</CustomBtnVue>
  <CustomBtnVue sm pill text-red background-black>MyButton</CustomBtnVue>
  <CustomBtnVue md pill text-green background-pink>MyButton</CustomBtnVue>
  <CustomBtnVue lg pill @click.prevent="onClick">MyButton</CustomBtnVue>
</template>

<script>
import InputExVue from "./components/training/InputEx.vue";
import CustomBtnVue from "./components/training/CustomBtn.vue";

export default {
  name: "App",
  methods: {
    onClick(evt) {
      alert("Clicked");
    },
  },
  components: {
    CustomBtnVue,
  },
};
</script> -->
