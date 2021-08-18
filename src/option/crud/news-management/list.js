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
    updateBtnText:'保存',
    column: [
      {
        label: "ID",
        prop: "id",
        addDisplay: false,
        hide: true,
        editDisplay: false
      },
      {
        label: "图片",
        prop: "photo",
        type: 'upload',
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
        label: "新闻名称",
        prop: "name",
        row:true,
        // addDisplay: false,
        // editDisplay: false
      },
      {
        label: "新闻分类",
        prop: "typeId",
        hide: true,
        value:　1,
        row: true,
        addDisplay: false,
        editDisplay: false
      },
      {
        label: "新闻分类名称",
        prop: "typeName",
        row: true,
        hide: true,
        value:　1,
        addDisplay: false,
        editDisplay: false
        // editDisplay: false
      },
      {
        label: "状态",
        prop: "status",
        // row: true,
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
        label: "发布日期",
        prop: "publishdate",
        // row: true,
        // addDisplay: false,
        // editDisplay: false,
        hide: false,
        type: "date",
        format: "yyyy-MM-dd hh:mm:ss",
        valueFormat: "yyyy-MM-dd hh:mm:ss",
      },
      {
        label: "排序",
        prop: "sort",
        // hide: "true",
        type: 'number',
        width: 60,
        rules: [
          {
            required: true,
            message: "请输入排序信息",
            trigger: "blur",
          },
        ]
      },
      {
        label: "修改时间",
        prop: "updateTime",
        addDisplay: false,
        editDisplay: false,
        hide: true
      },
      {
        label: "新闻简介",
        prop: "brief",
        type: 'textarea',
        hide: true,
        row: true,
        span: 24,
        // rules: [
        //   {
        //     required: true,
        //     message: "请输入新闻简介",
        //     trigger: "blur",
        //   },
        // ]
      },
      {
        label: "新闻介绍",
        prop: "detail",
        type: 'ueditor',
        hide: true,
        row: true,
        span: 24,
        options: {
          action: baseUrl + "/upload",
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
      }
    ],
  }
}
