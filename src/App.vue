<template>
  <div id="app">
<!--    <h1>36</h1>-->
<!--    <div style="text-align: right">-->
<!--      <video controls src="http://8.130.28.124:9000/cms/e0cb3acc-6956-44c1-81f1-d833ce401439.mp4"></video></div>-->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {}
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
