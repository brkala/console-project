<template>
  <section class="rubber-button">
    <mdicon class="icon" :name="icon" />
  </section>
</template>

<script>
export default {
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
.rubber-button {
  $contrast: $--color-text-regular;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  &::before {
    content: "";
    position: absolute;
    width: 2rem;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateX(-110%);
    background-color: $--color-primary;
    border-radius: 3px;
  }
  .icon {
    color: $contrast;
  }
}
</style>