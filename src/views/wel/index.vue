<template>
  <basic-container>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          我是内容一
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          我是内容二
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-button type="primary" @click="option.switchTheme=!option.switchTheme" size="small">{{option.switchTheme?'关闭主题':'打开主题'}}</el-button>
          <el-button @click="theme='macarons'" size="small">换紫色主题</el-button>
          <el-button @click="theme='wonderland'" size="small">换绿色主题</el-button>
          <avue-echart-pie :theme="theme" :option="option" :data="data" width="1000"></avue-echart-pie>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          我是内容四
        </div>
      </el-col>
    </el-row>
  </basic-container>
</template>
<script>


export default {
  data() {
    return {
      theme:'',
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      option: {
        switchTheme:true,
        width: '100%',
        height: 600,
        title: '手机大比拼',
        subtitle: '纯属虚构',
        labelShow:true,
        radius: true,
        "barColor": [
          {
            "color1": "#83bff6",
          },
          {
            "color1": "#23B7E5",
          },
          {
            "color1": "rgba(154, 168, 212, 1)",
          },
          {
            "color1": "#188df0",
          },
          {
            "color1": "#564AA3",
          }
        ]
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
