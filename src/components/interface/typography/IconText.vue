<template>
  <article class="icon-text" :class="color" @click="$emit('click')">
    <span :class="iconColor">
      <mdicon class="icon" :size="20" :name="icon" />
    </span>
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
  user-select: none;
  white-space: nowrap;
  .text {
    margin-left: 4px;
    font-weight: bold;
    line-height: 1;
    white-space: nowrap;
  }

  .primary,
  &.primary {
    color: $--color-primary;
  }
  .success,
  &.success {
    color: $--color-success;
  }
}
</style>