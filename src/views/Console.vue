<template>
  <section class="console">
    <aside>
      <pipe-content />
    </aside>
    <main>
      <main>
        <dashboard-panes />
      </main>
      <footer>
        <span class="copyright">
          Copyright © 2021 Galaxec, Inc. All rights reserved.
        </span>
      </footer>
    </main>
  </section>
</template>

<script>
import PipeContent from "@/components/interface/content/PipeContent.vue";
import DashboardPanes from "@/components/interface/dashboard/DashboardPanes.vue";
export default {
  components: {
    PipeContent,
    DashboardPanes,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/vars.scss";
section.console {
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  height: 100vh;
  width: 100%;

  color: $--color-text-regular;
  > main {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    width: 100%;
    padding-right: 16px;
    > main {
      height: 100%;
    }
    > footer {
      padding: 10px 0;
      font-size: 0.8rem;
    }
  }
  > aside {
    $aside-padding: 0.5rem;
    width: 5rem-$aside-padding * 3;
    padding: 0 $aside-padding;
  }
}
</style>