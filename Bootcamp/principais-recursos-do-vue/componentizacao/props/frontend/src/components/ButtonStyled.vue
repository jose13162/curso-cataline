<template>
  <button :class="['button-styled', color]">
    {{ text }} <span>{{ user.name }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type Color = "primary" | "success" | "danger";

interface User {
  id: number;
  name: string;
}

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: "primary",
      validator: (value: Color) => {
        return ["primary", "success", "danger"].includes(value);
      },
    },
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
});
</script>

<style scoped>
.button-styled {
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
  background-color: #2d6cea;
}
.success {
  background-color: green;
}

.danger {
  background-color: red;
}

.primary {
  background-color: #2d6cea;
}
</style>
