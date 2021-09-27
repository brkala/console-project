<template>
  <article class="article-content" v-html="content"></article>
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>

<style lang="scss" scoped>
.article-content {
  &::v-deep {
    .v-icon__svg {
      height: 24px;
      width: 24px;
    }
  }
}
</style>
