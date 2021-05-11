import { baseUrl } from '@/config/env';
export default () => {
  return {
    translate: false,
    searchLabelWidth: 100,
    excelBtn: false, viewBtn: true,
    labelWidth: 110,
    selection: true,
    tip: false,
    index: false,
    align: 'center',
    headerAlign: 'center',
    border: true,
    stripe: true,
    searchShow: false,
    column: [
      {
        label: "ID",
        prop: "id",
        addDisplay: false,
        hide: true
      },
      {
        label: "图片",
        prop: "photo",
        type: 'upload',
        listType: 'picture-img',
        accept: 'image/jpeg,image/png',
        action: baseUrl + '/upload',
        tip: '只能上传jpg/png文件，750*470，690*150',
        row: true,
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
        label: "产品名称",
        prop: "name",
        // addDisplay: false,
        // editDisplay: false
      },
      {
        label: "产品分类",
        prop: "typeId",
        hide: false,
        value:　1,
      },
      {
        label: "状态",
        prop: "status",
        hide: false,
        type: 'select',
        value: 0,
        dicData: [{
          label: "上架",
          value: 0
        }, {
          label: "下架",
          value: 1
        }],
      },
      {
        label: "修改时间",
        prop: "updateTime",
        addDisplay: false,
      },
      {
        label: "产品介绍",
        prop: "detail",
        type: 'textarea',
        hide: true,
        span: 24,
        options: {
          action: baseUrl + "/upload/",
          props: {
            res:'data',
            url: "absolutePath"
          },
        },
        // rules: [
        //   {
        //     required: true,
        //     message: "请输入岗位详情",
        //     trigger: "blur",
        //   },
        // ]
      },
    ],
  }
}
