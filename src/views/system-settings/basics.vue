<!--
 * @Date: 2021-03-15 13:28:35
 * @LastEditors: Mingdeng
 * @LastEditTime: 2021-03-17 16:24:57
 * @FilePath: /che-rongyi-management/src/views/service-items/shenche-price.vue
-->
<template>
  <basic-container>
    <avue-form
        ref="form"
        v-model="data"
        :option="option0"
        v-loading="loading"
        @submit="handleSubmit"
        :permission="permissionList"
    >
    </avue-form>
  </basic-container>
</template>

<script>
import { getdate, update } from "@/api/crud/system-settings/basics.js";
import {baseUrl} from '@/config/env'
export default {
  data() {
    return {
      data: {},
      loading: false,
      option0: {
        translate: false,
        searchLabelWidth: 100,
        excelBtn: false,
        labelWidth: 110,
        selection: true,
        tip: false,
        index: true,
        align: 'center',
        headerAlign: 'center',
        border: true,
        stripe: true,
        column: [
          // {
          //   label: "网站id",
          //   prop: "id",
          //   hide: true,
          //   type: "number",
          //   value: 1,
          //   row: true,
          //   disabled: true,
          // },
          {
            label: "网站logo",
            prop: "logo",
            type: 'upload',
            row: true,
            listType: 'picture-img',
            accept: 'image/jpeg,image/png',
            action: baseUrl + '/upload',
            tip: '只能上传jpg/png文件，750*470，690*150',
            span: 24,
            propsHttp: {
              res: 'data',
              url:'absolutePath'
            },
            rules: [
              {
                required: true,
                message: "请上传图片",
                trigger: "blur",
              },
            ]
          },
          {

            label: "网站名称",
            prop: "name",
            row: true,
            rules: [
              {
                required: true,
                message: "请上传图片",
                trigger: "blur",
              },
            ]
          },
          {
            label: "前台域名地址",
            prop: "host",
            row: true,
            value: 'http://192.168.40.225:8080/',
            // type: "string",
            rules: [
              {
                required: true,
                message: "请输入 前台域名地址",
                trigger: "blur",
              },
            ],
          },
          {
            label: "关键字",
            prop: "kayword",
            row: true,
            rules: [
              {
                required: true,
                message: "请输入 关键字",
                trigger: "blur",
              },
            ],
          },
          {
            label: "网站描述",
            prop: "remark",
            row: true,
            rules: [
              {
                required: true,
                message: "请输入 网站描述",
                trigger: "blur",
              },
            ],
          },
          {
            label: "备案号",
            prop: "bnnumber",
            row: true,
            rules: [
              {
                required: true,
                message: "请输入 备案号",
                trigger: "blur",
              },
            ],
          },
          {
            label: "版权信息",
            prop: "bqinfo",
            row: true,
            rules: [
              {
                required: true,
                message: "请输入 版权信息",
                trigger: "blur",
              },
            ],
          },
          // {
          //   label: "qq 客服",
          //   prop: "qq",
          //   row: true,
          // },
          {
            label: "联系电话",
            prop: "phone",
            row: true,
            rules: [
              {
                required: true,
                message: "请输入 联系电话",
                trigger: "blur",
              },
            ],
          },
          {
            label: "网站 二维码",
            prop: "qcode",
            type: 'upload',
            row: true,
            listType: 'picture-img',
            accept: 'image/jpeg,image/png',
            action: baseUrl + '/upload',
            tip: '只能上传jpg/png文件，750*470，690*150',
            span: 24,
            propsHttp: {
              res: 'data',
              url:'absolutePath'
            },
            rules: [
              {
                required: true,
                message: "请上传二维码",
                trigger: "blur",
              },
            ]
          },
          {
            label: "底部文字",
            prop: "bottomText",
            row: true,
            rules: [
              {
                required: true,
                message: "请输入 底部文字",
                trigger: "blur",
              },
            ],
          },
        ],
      }
    };
  },
  computed: {
    permissionList() {
      // this.$set(
      //     this.option0,
      //     "submitBtn",
      //     this.vaildPermission(this, "business:orderSite:edit")
      // );
      return {};
    },
  },
  // activated() {
  //   // console.log('xxx')
  //
  //   this.getdate();
  // },
  created() {
    this.getdate();
  },
  methods: {
    getdate() {
      this.loading = true;
      getdate().then(({ data }) => {
        this.data = data.data;
        this.loading = false;
      });
    },
    handleSubmit() {
      this.$refs.form.validate((vaild, done) => {
        if (vaild) {
          update(this.data).then(() => {
            this.$message.success("修改成功");
            done();
            this.getdate();
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
