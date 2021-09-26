<template>
  <section class="vertical-box">
    <slot />
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.vertical-box {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  height: 100%;
}
</style>