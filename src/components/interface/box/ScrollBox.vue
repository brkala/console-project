<template>
  <section class="scroll-box">
    <div class="content">
      <slot />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eaque,
      neque corporis, cum veniam, iure eligendi delectus velit deserunt adipisci
      accusantium consectetur asperiores cupiditate. Odit labore natus quas,
      similique non repellendus, cupiditate neque delectus at maiores iste
      aliquid officia? Officia ullam quasi doloribus vel, a ad obcaecati
      expedita nihil eum alias asperiores. Omnis dignissimos repellat saepe!
      Quia qui sit hic ullam? Delectus tenetur ullam totam deserunt debitis nam
      consectetur doloremque laborum unde aspernatur numquam itaque odio porro
      esse corrupti perspiciatis consequuntur culpa, reprehenderit officiis
      placeat atque modi reiciendis! Debitis, deleniti? Eaque sapiente fugit
      nisi ab fugiat odit autem totam maiores officiis iusto, eveniet, vero
      velit doloribus fuga harum itaque repudiandae, quos temporibus voluptate
      adipisci. Nesciunt vero quibusdam ea architecto vitae sequi! Esse, libero
      reiciendis distinctio quas aliquam, aperiam fugiat repudiandae sit
      sapiente id facilis. Vitae suscipit voluptatum saepe cum sint dicta sit
      velit neque ut dolor ducimus aspernatur odio veniam, animi quidem
      architecto maxime tempora aliquid. Ratione consequatur doloremque at,
      natus dolorem unde aliquid harum vel ut fuga deserunt nostrum ad cumque
      quas esse rerum nisi a inventore praesentium. Sit sed laudantium
      perferendis similique, quod tempora, voluptatum labore placeat laboriosam
      quos libero architecto nihil at, numquam sunt impedit? Rem autem
      voluptatum nemo vitae iusto eum repudiandae sint ipsum aliquid quos
      laboriosam porro aut asperiores quod, facere dicta aperiam eos veritatis
      maxime in? Sint tempora, aliquam error maxime sequi dicta quas vel animi?
      Recusandae magni, adipisci necessitatibus, debitis voluptatem nobis ipsa
      sit iste ad fugit iure blanditiis cum aperiam accusamus quia ut optio
      reprehenderit soluta tempora at. Voluptate similique omnis et unde quidem
      in doloremque accusamus nesciunt dolorum sequi, dicta nobis dolor beatae
      impedit? Molestiae, dicta ipsum architecto facere atque odio maiores
      officia eos qui veritatis enim mollitia sunt non rerum aliquam harum! Ex
      eveniet eaque aliquid rem laboriosam aliquam veritatis molestias
      asperiores modi eum quas officiis debitis illo blanditiis nesciunt dolores
      porro autem impedit, repellendus delectus nobis id! Beatae tenetur ad
      doloremque! Facilis officiis, cupiditate repellendus asperiores voluptatem
      nobis atque sed corrupti dicta velit quisquam tenetur voluptas quis harum
      illo id unde et suscipit earum, ad doloribus quia? Quas cum voluptatum
      blanditiis dicta velit esse fugit modi hic reiciendis, rerum, ipsum
      deleniti sequi. Tempore rerum neque distinctio voluptatem, facilis
      aspernatur molestiae fuga suscipit est adipisci repellat vero culpa eius
      unde facere velit eligendi fugit sint veritatis quidem nisi id delectus
      temporibus! Obcaecati eius iusto nostrum placeat ea esse id quos
      asperiores sequi, eaque saepe quo mollitia, possimus voluptate quae
      veritatis. Error expedita accusamus officia dolorum, aperiam ullam
      adipisci quas vitae modi, a eveniet architecto assumenda. Itaque similique
      excepturi tempore, eos alias cumque, maxime neque ea repellat vero,
      tempora reiciendis. Similique molestias minima sequi vero? Expedita magnam
      libero labore iste? Distinctio illum nobis pariatur sint sit iusto
      accusantium quae. Explicabo quidem cum officia ut quam reprehenderit
      consectetur minus ex aut nisi necessitatibus fugiat vel dolores vero eaque
      aspernatur iusto nulla reiciendis nemo dolorum, ipsum tempore sit commodi!
      Adipisci, sapiente dolore dolores ipsum eaque officiis placeat sint
      doloremque enim, ea itaque nobis.
    </div>
  </section>
</template>

<script>
export default {
  components: {},
};
</script>


<style lang="scss" scoped>
@import "@/assets/style/vars.scss";
.scroll-box {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  background-color: $--background-color-base;
  .content {
    position: absolute;
    padding: 16px;
  }
  /* width */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: $--color-text-placeholder;
    border-radius: 4px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
</style>