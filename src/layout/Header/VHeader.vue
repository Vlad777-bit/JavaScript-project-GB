<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__content">
        <div class="header__logo">
          <a href="#" class="header__logo-link"
            ><img
              src="@/assets/img/promo/logo.png"
              class="header__logo-img"
              alt="logo"
          /></a>
          <div class="header__logo-text">
            <a href="#">BRAN<span>D</span></a>
          </div>

          <VSearch />
        </div>
        <VBasket />
      </div>
    </div>
  </header>
</template>

<script>
import VSearch from "./VSearch.vue";
import VBasket from "./VBasket.vue";

export default {
  components: {
    VSearch,
    VBasket,
  },
};
</script>

<style src="@/assets/scss/header/_header.scss" lang="scss" scoped></style>
