<template>
  <el-tabs class="tabs" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane name="output">
      <icon-text
        class="it"
        slot="label"
        :color="activeName == 'output' ? 'primary' : undefined"
      >
        Output
      </icon-text>
      <scroll-box> There is no code output yet... </scroll-box>
    </el-tab-pane>
    <el-tab-pane name="merkel_tree">
      <icon-text
        :color="activeName == 'merkel_tree' ? 'primary' : undefined"
        class="it"
        slot="label"
      >
        Merkel Tree
      </icon-text>
      <scroll-box> There is no merkel tree yet... </scroll-box>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import IconText from "@/components/interface/typography/IconText.vue";
import ScrollBox from "@/components/interface/box/ScrollBox.vue";
export default {
  components: {
    IconText,
    ScrollBox,
  },
  data() {
    return {
      activeName: "output",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style lang="scss" scoped>
.tabs {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  .it {
    padding: 4px 20px;
  }
  &::v-deep {
    .el-tabs__active-bar {
      height: 4px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }
    .el-tabs__nav-wrap::after {
      visibility: hidden;
    }
    .el-tabs__header {
      margin-bottom: 0;
    }
    .el-tabs__content {
      height: 100%;
      .el-tab-pane {
        height: 100%;
      }
    }
  }
}
</style>