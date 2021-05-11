export default () => {
  return {
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
    searchShow: false,
    column: [{
      label: "会员类型",
      prop: "name",
      type: 'select',
      dicData: [{
        label: '年卡会员',
        value: 0
      }, {
        label: '普通会员',
        value: 1
      }],
      search: true,
    }, {
      label: "头像",
      prop: "sex",
    },],
  }
}