<template>
  <form action="#" class="header__form">
    <button class="header__form-drop_down">
      Browse
      <i class="fas fa-caret-down"></i>
    </button>
    <input
      type="text"
      placeholder="Search for Item..."
      class="header__form-input"
    />
    <button class="header__form-search">
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header__form {
  display: flex;
}

.header__form-drop_down {
  width: 87px;
  height: 38px;
  background-color: #cdcdcc;
  background-image: linear-gradient(180deg, #f9f9f9 0%, #f5f5f5 100%);
  border: 1px solid #e6e6e6;
  border-radius: 3px 0 0 3px;
  // text
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.025em;
  color: #222222;

  .fa-caret-down {
    color: #838383;
  }
}

.header__form-input {
  width: 317px;
  height: 38px;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  padding: 16px 14px;
  border-left: none;
  border-right: none;
  outline: none;
  // text
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.025em;
  color: #a4a4a4;
}

.header__form-search {
  width: 35px;
  height: 38px;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 0 3px 3px 0px;
  color: #a4a4a4;
  outline: none;
}
</style>
