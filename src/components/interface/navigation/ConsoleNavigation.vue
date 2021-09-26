<template>
  <tree :data="tree" v-model="selected" />
</template>

<script>
import { mapGetters } from "vuex";
import Tree from "@/components/tree/Tree";
export default {
  components: {
    Tree,
  },
  mounted() {},
  methods: {},

  computed: {
    ...mapGetters({
      tree: "content/tree",
      current: "content/current",
    }),
    selected: {
      get() {
        return this.$store.getters["content/current"];
      },
      set(val) {
        this.$store.commit("content/setCurrent", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/vars.scss";
</style>