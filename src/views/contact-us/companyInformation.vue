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
import { getdate, update } from "@/api/crud/contact-us/companyInformation";
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

          {
            label: "公司名称",
            prop: "name",
            row: true,
            rules: [
              {
                required: true,
                message: "请输入公司名称",
                trigger: "blur",
              },
            ],
          },
          {
            label: "联系方式一",
            prop: "phone",
            row: true,
            value: '我是电话号码1',
            // type: "string",
            // rules: [
            //   {
            //     required: true,
            //     message: "请输入 联系电话",
            //     trigger: "blur",
            //   },
            // ],
          },
          {
            label: "联系方式二",
            prop: "mobile",
            row: true,
            value: '我是电话号码2',
            // type: "string",
          },
          {
            label: "邮箱",
            prop: "email",
            row: true,
            // rules: [
            //   {
            //     required: true,
            //     message: "请输入 邮箱",
            //     trigger: "blur",
            //   },
            // ],
          },
          {
            label: "地址",
            prop: "address",
            row: true,
            rules: [
              {
                required: true,
                message: "请输入 地址",
                trigger: "blur",
              },
            ],
          },
          {
            label: "合作内容",
            prop: "detail",
            row: true,
            type: "textarea"
          },
          {
            label: "类型",
            prop: "type",
            row: true,
            type: 'select',
            disabled: true,
            value: 1,
            dicData: [{
              label: "公司信息",
              value: 1
            }],
            rules: [
              {
                required: true,
                message: "请输入 类型",
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

        this.data = data.data[0];

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
