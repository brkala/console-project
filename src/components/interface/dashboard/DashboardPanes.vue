<template>
  <section class="dashboard-panes">
    <splitpanes style="height: 100%" horizontal>
      <pane :size="80">
        <splitpanes>
          <pane :size="20"> 1 </pane>
          <pane>
            <div class="pane-balancer">
              <splitpanes>
                <pane> 2 </pane>
                <pane> 3 </pane>
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
import splitpanes from "@/mixins/splitpanes";
export default {
  components: { IconText },
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