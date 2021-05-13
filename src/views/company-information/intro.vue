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
import { getdate, update } from "@/api/crud/company-information/intro";
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
        hide: true,
        column: [
          // {
          //   label: "网站id",
          //   prop: "id",
          //   type: "number",
          //   disabled: true,
          //   value: 1,
          //   row: true,
          //   rows: "10",
          //   rules: [
          //     {
          //       required: true,
          //       message: "请输入网站id",
          //       trigger: "blur",
          //     },
          //   ],
          // },
          {
            label: "公司概况",
            prop: "profile",
            type: "textarea",
            row: true,
            rules: [
              {
                required: true,
                message: "请输入公司概况",
                trigger: "blur",
              },
            ],
          },
          {
            label: "企业文化",
            prop: "culture",
            type: "textarea",
            row: true,
            rules: [
              {
                required: true,
                message: "请输入 企业文化",
                trigger: "blur",
              },
            ],
          },
          {
            label: "发展历程",
            prop: "experience",
            type: "textarea",
            row: true,
            rules: [
              {
                required: true,
                message: "请输入 发展历程",
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
            // console.log(this.data)
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
