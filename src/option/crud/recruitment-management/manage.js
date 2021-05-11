import { baseUrl } from '@/config/env';
export default () => {
  return {
    translate: false,
    searchLabelWidth: 100,
    excelBtn: false, viewBtn: true,
    labelWidth: 110,
    selection: true,
    tip: false,
    index: true,
    align: 'center',
    headerAlign: 'center',
    border: true,
    stripe: true,
    searchShow: false,
    column: [ {
        label: "岗位名称",
        prop: "name",
        rules: [
          {
            required: true,
            message: "请输入岗位名称",
            trigger: "blur",
          },
        ]
      },
      {
        label: "修改时间",
        prop: "updateTime",
        addDisplay: false,
        editDisplay: false
      },
      {
        label: "状态",
        prop: "status",
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
        label: "岗位详情",
        prop: "detail",
        type: 'ueditor',
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
      },],
  }
}
