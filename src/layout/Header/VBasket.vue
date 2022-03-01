<template>
  <div id="basket">
    <button class="basket-btn" name="basketBtn" id="basket-btn">
      <img src="@/assets/img/promo/basket.svg" alt="basket" name="basketBtn" />
    </button>

    <div id="basket-inner" class="hidden">
      <div id="basket-items"></div>
      <div>
        <hr />
        <div class="cart_total">
          <p>TOTAL</p>
          <p>$<span id="basket-sum"></span></p>
        </div>
        <button class="cart_btn">Checkout</button>
        <button class="cart_btn">Go to cart</button>
      </div>
    </div>

    <button class="account">
      My Account
      <i class="fas fa-caret-down"></i>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style src="@/assets/scss/header/_cart.scss" lang="scss" scoped></style>
<style src="@/assets/scss/header/_account.scss" lang="scss" scoped></style>
