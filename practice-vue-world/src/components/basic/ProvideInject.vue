<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  inject: ["msg"],
};
</script>

<!-- App.vue에서 이렇게 사용
import {ProvideInjectVue} from './ProvideInject';

export default {
  provide: {
    msg: 'message',
  },
  components: {
    ProvideInjectVue
  }
} -->
