<template>
  <div class="index-p">
    <div
      class="order-count"
      :style="{ height: orderCountHieght, fontSize: orderCountFontSize }"
    >
      <div class="item" :style="{ padding: orderCountPadding }">
        <div class="count">
          <avue-count-up :end="222" />
        </div>
      </div>
      <div class="item" :style="{ padding: orderCountPadding }">
        <div class="count">
          <avue-count-up :end="222" />
        </div>
      </div>
      <div class="item" :style="{ padding: orderCountPadding }">
        <div class="count">
          <avue-count-up :end="222" />
        </div>
      </div>
      <div class="item" :style="{ padding: orderCountPadding }">
        <div class="count">
          <avue-count-up :end="222" />
        </div>
      </div>
      <div class="item" :style="{ padding: orderCountPadding }">
        <div class="count">
          <avue-count-up :end="222" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const orderCountItemWidth = (document.body.scrollWidth - 400) / 5;
export default {
  computed: {
    orderCountHieght() {
      return `${orderCountItemWidth * 0.613}px`;
    },
    orderCountFontSize() {
      return `${orderCountItemWidth * 0.1485}px`;
    },
    orderCountPadding() {
      return `${orderCountItemWidth * 0.3432}px 0 0 ${
        orderCountItemWidth * 0.1386
      }px`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
//.index-p {
//  padding: 0 30px;
//  .order-count {
//    display: flex;
//    .item {
//      flex: 1;
//      margin: 0 10px;
//      @include bgSettings();
//      background-image: url("/img/index/index-count-bg-00.png");
//      background-position: center top;
//      .count {
//        // font-size: 45px;
//        font-family: DIN;
//        font-weight: bold;
//        color: #ffffff;
//      }
//    }
//  }
//}
</style>
