<template>
  <nav>
    <logo class="mb-8 mt-3" />
    <rubber-button />
  </nav>
</template>

<script>
import Logo from "@/components/interface/Logo.vue";
import RubberButton from "@/components/interface/navigation/RubberButton.vue";
export default {
  components: {
    Logo,
    RubberButton,
  },
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
}
</style>