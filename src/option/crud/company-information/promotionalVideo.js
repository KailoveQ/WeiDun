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
        label: "宣传片",
        prop: "photo",
        type: 'upload',
        hide: true,
        listType: 'picture-img',
        accept:"video/mp4",
        action: baseUrl + '/upload',
        tip: '只能上传mp4文件，750*470，690*150',
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
        label: "宣传片名称",
        span: "24",
        prop: "name",
        row: "true"
        // addDisplay: false,
        // editDisplay: false

      },
      {
        label: "类型",
        prop: "type",
        value: "视频类型",
        type: 'select',
        dicData: [{
          label: "视频类型",
          value: 2
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
