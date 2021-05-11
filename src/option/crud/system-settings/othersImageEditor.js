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
      },{
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
        label: "图片名称",
        prop: "name",
        // addDisplay: false,
        // editDisplay: false

      },
      {
        label: "图片类型",
        prop: "type",
        hide: false,
        type: 'select',
        value: 1,
        dicData: [{
          label: "首页-公司介绍",
          value: 1
        }, {
          label: "首页-视频背景图",
          value: 2
        },{
          label: "首页-新闻",
          value: 3
        },{
          label: "关于-页面顶部背景图",
          value: 4
        },{
          label: "关于-我们是谁-右",
          value: 5
        },{
          label: "关于-我们是谁-左下",
          value: 6
        },{
          label: "关于-我们是谁-右下",
          value: 7
        },{
          label: "产品-产品顶部背景图",
          value: 8
        },{
          label: "产品-产品介绍",
          value: 9
        },{
          label: "新闻-新闻顶部背景图",
          value: 10
        },{
          label: "联系-联系顶部背景图",
          value: 11
        },{
          label: "联系-联系页面地图",
          value: 12
        },{
          label: "首页-视频封面图",
          value: 13
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
