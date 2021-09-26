<template>
  <div>
    <galaxec-svg class="logo" />
    <span v-if="!solo">galaxec</span>
  </div>
</template>

<script>
import GalaxecSvg from "@/assets/media/galaxec.svg";
export default {
  components: {
    GalaxecSvg,
  },
  props: {
    solo: Boolean,
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/style/vars.scss";
div {
  color: $--color-primary;
  user-select: none;
  font-size: 0.8rem;
  text-align: center;
  .logo {
    width: 100%;
    height: auto;
    ::v-deep * {
      fill: $--color-primary;
    }
  }
}
</style>