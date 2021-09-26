<template>
  <section class="dashboard-panes">
    <splitpanes style="height: 100%" horizontal>
      <pane :size="80">
        <splitpanes>
          <pane :size="20">
            <vertical-box>
              <box-heading> Topic </box-heading>
              <scroll-box></scroll-box>
            </vertical-box>
          </pane>
          <pane>
            <div class="pane-balancer">
              <splitpanes>
                <pane>
                  <vertical-box>
                    <box-heading> Topic </box-heading>
                    <scroll-box></scroll-box>
                  </vertical-box>
                </pane>
                <pane>
                  <vertical-box>
                    <box-heading> Topic </box-heading>
                    <scroll-box></scroll-box>
                  </vertical-box>
                </pane>
              </splitpanes>
              <div>asdasd</div>
            </div>
          </pane>
        </splitpanes>
      </pane>
      <pane>4</pane>
    </splitpanes>
  </section>
</template>

<script>
import IconText from "@/components/interface/typography/IconText.vue";
import BoxHeading from "@/components/interface/typography/BoxHeading.vue";
import ScrollBox from "@/components/interface/box/ScrollBox.vue";
import VerticalBox from "@/components/interface/box/VerticalBox.vue";
import splitpanes from "@/mixins/splitpanes";
export default {
  components: { IconText, BoxHeading, ScrollBox, VerticalBox },
  mixins: [splitpanes],
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
}
</style>