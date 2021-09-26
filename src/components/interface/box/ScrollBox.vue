<template>
  <section class="scroll-box" :class="{ 'no-gutters': noGutters }">
    <div class="content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  props: {
    noGutters: Boolean,
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/style/vars.scss";
.scroll-box {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  background-color: $--background-color-base;
  .content {
    position: absolute;
    padding: 16px;
    width: calc(100% - 32px);
  }
  &.no-gutters {
    .content {
      padding: 16px 0px;
      width: 100%;
    }
  }
  /* width */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: $--color-text-placeholder;
    border-radius: 4px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
</style>