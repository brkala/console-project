<template>
  <article class="icon-text" :class="color">
    <mdicon class="icon" :size="20" :name="icon" :class="iconColor" />
    <span class="text" :class="textColor"><slot /></span>
  </article>
</template>

<script>
export default {
  props: {
    color: String,
    iconColor: String,
    textColor: String,
    icon: {
      tpye: String,
      default: "xml",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/vars.scss";
.icon-text {
  display: inline-block;
  color: $--color-text-regular;
  .text {
    margin-left: 4px;
    font-weight: bold;
    line-height: 1;
    white-space: nowrap;
  }

  .primary {
    color: $--color-primary;
  }
  .success {
    color: $--color-success;
  }
}
</style>