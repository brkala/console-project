<template>
  <section class="dashboard-panes" v-if="current">
    <splitpanes style="height: 100%" horizontal>
      <pane :size="80">
        <splitpanes>
          <pane :size="20">
            <vertical-box>
              <box-heading icon="format-list-bulleted-type">
                Topic
              </box-heading>
              <scroll-box no-gutters>
                <console-navigation />
              </scroll-box>
            </vertical-box>
          </pane>
          <pane>
            <div class="pane-balancer">
              <splitpanes>
                <template v-for="(pane, key) in current.panes">
                  <pane v-if="pane.type == 'guide'" :key="key">
                    <vertical-box>
                      <box-heading icon="book-open-outline">
                        Guide
                      </box-heading>
                      <scroll-box>
                        <rich-text
                          :content="pane.content"
                          v-if="pane.content"
                        />
                      </scroll-box>
                    </vertical-box>
                  </pane>
                  <pane v-if="pane.type == 'bash'" :key="key">
                    <vertical-box>
                      <box-heading icon="console-line"> Live </box-heading>
                      <scroll-box fluid class="vcom">
                        <vue-command :commands="commands"
                      /></scroll-box>
                    </vertical-box>
                  </pane>
                </template>
              </splitpanes>
              <nav class="button-navigation">
                <el-button
                  @click="$store.commit('content/setCurrent', prev)"
                  type="success"
                  plan
                  size="small"
                  icon="el-icon-back"
                  v-if="prev"
                  >{{ prev.label }}</el-button
                >
                <el-button
                  @click="$store.commit('content/setCurrent', next)"
                  type="success"
                  plan
                  size="small"
                  icon
                  v-if="next"
                  >{{ next.label }}
                  <i class="el-icon-arrow-right el-icon-right"></i>
                </el-button>
              </nav>
            </div>
          </pane>
        </splitpanes>
      </pane>
      <pane>
        <result-tabs />
      </pane>
    </splitpanes>
  </section>
</template>

<script>
import ResultTabs from "@/components/interface/dashboard/ResultTabs.vue";
import RichText from "@/components/interface/typography/RichText.vue";
import IconText from "@/components/interface/typography/IconText.vue";
import BoxHeading from "@/components/interface/typography/BoxHeading.vue";
import ScrollBox from "@/components/interface/box/ScrollBox.vue";
import VerticalBox from "@/components/interface/box/VerticalBox.vue";
import ConsoleNavigation from "@/components/interface/navigation/ConsoleNavigation.vue";
import splitpanes from "@/mixins/splitpanes";
import VueCommand, { createStdout } from "vue-command";
import "vue-command/dist/vue-command.css";
export default {
  components: {
    ResultTabs,
    RichText,
    IconText,
    BoxHeading,
    ScrollBox,
    VerticalBox,
    ConsoleNavigation,
    VueCommand,
  },
  mixins: [splitpanes],
  mounted() {
    this.$store.commit("content/setCurrent", this.tree[0]);
  },
  data() {
    return {
      commands: {
        "hello-world": () => createStdout("Hello world"),
      },
    };
  },
  computed: {
    tree() {
      return this.$store.getters["content/tree"];
    },
    prev() {
      return this.$store.getters["content/prev"];
    },
    next() {
      return this.$store.getters["content/next"];
    },
    current() {
      return this.$store.getters["content/current"];
    },
  },
};
</script>


<style lang="scss" scoped>
.dashboard-panes {
  height: 100%;
  .pane-balancer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
  }
  .button-navigation {
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .vcom {
    background: black;
  }
}
</style>