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
        label: "图片名称",
        prop: "name",
        // addDisplay: false,
        // editDisplay: false

      },
      {
        label: "类型",
        prop: "type",
        value: 1,
        type: 'select',
        dicData: [{
          label: "图片类型",
          value: 1
        }],
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
    ],
  }
}
