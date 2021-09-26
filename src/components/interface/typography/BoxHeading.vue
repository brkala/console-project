<template>
  <section class="box-heading pt-5 pb-5">
    <icon-text :icon="icon">
      <slot />
    </icon-text>
  </section>
</template>

<script>
import IconText from "@/components/interface/typography/IconText.vue";
export default {
  components: {
    IconText,
  },
  props: {
    icon: {
      type: String,
      default: "xml",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/vars.scss";
</style>