<template>
  <nav class="tree-node">
    <icon-text
      class="icon-text"
      :style="`margin-left: ${(level - 1) * 24}px`"
      :class="{ active: data == selected, 'is-child': level > 1 }"
      @click="hasChildren ? toggle() : select()"
      :icon="nodeIcon(data)"
      :icon-color="hasChildren ? undefined : 'success'"
      v-if="!isArray"
    >
      {{ data.label }}
    </icon-text>
    <ul v-if="isArray || (hasChildren && open)">
      <li v-for="(node, key) in nodes" :key="key">
        <tree :data="node" v-model="selected" :level="level + 1" />
      </li>
    </ul>
  </nav>
</template>

<script>
import IconText from "@/components/interface/typography/IconText.vue";
export default {
  name: "Tree",
  components: {
    IconText,
  },
  props: {
    data: {
      type: Object | Array,
      default: () => [],
    },
    level: {
      type: Number,
      default: 0,
    },
    value: Object,
  },
  data() {
    return {
      open: true,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    select() {
      this.selected = this.data;
    },
    nodeIcon(node) {
      if (node) {
        return node.children?.length
          ? this.open
            ? "chevron-down"
            : "chevron-right"
          : node.icon || "xml";
      }
      return "xml";
    },
  },
  computed: {
    isArray() {
      return this.data instanceof Array;
    },
    hasChildren() {
      return !!this.data?.children?.length;
    },
    nodes() {
      return this.isArray ? this.data : this.data.children;
    },
    selected: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/vars.scss";
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.icon-text {
  display: block;

  padding-left: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-left: 2px solid transparent;
  &:not(.active) {
    cursor: pointer;
  }
  &:hover {
    background-color: $--color-primary-light-8;
  }

  &.is-child {
    border-left: 2px solid $--color-text-placeholder;
  }
  &.active {
    background-color: $--color-primary-light-8;
    border-left: 2px solid $--color-success;
  }
  &::v-deep {
    .text {
      font-weight: normal;
    }
  }
}
</style>