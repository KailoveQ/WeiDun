<template>
  <div class="index-p">
    <div>
      <div class="wel">welcome</div>
      <div class="txt">欢迎进入 微盾管理后台</div>
    </div>
    <!-- <div
      class="order-count"
      :style="{ height: orderCountHieght, fontSize: orderCountFontSize }"
      v-if="false"
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
    </div> -->
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
.index-p {
  // padding: 0 30px;
  width: 100%;
  height: calc(100vh - 115px);
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url("https://cherongyi-read.oss-cn-qingdao.aliyuncs.com/2021/03/04/62d271ca659a42e89a57357359eda275.png");
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 200px;
  .wel {
    text-align: center;
    font-size: 180px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ffffff;
    opacity: 0.3;
  }
  .txt {
    font-size: 64px;
    text-align: center;
    font-family: PingFang SC;
    font-weight: bold;
    color: #ffffff;
  }
  // .order-count {
  //   display: flex;
  //   .item {
  //     flex: 1;
  //     margin: 0 10rpx;
  //     @include bgSettings();
  //     background-image: url("/img/index/index-count-bg-00.png");
  //     background-position: center top;
  //     .count {
  //       // font-size: 45px;
  //       font-family: DIN;
  //       font-weight: bold;
  //       color: #ffffff;
  //     }
  //   }
  // }
}
</style>
