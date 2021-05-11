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
    column: [{
      label: "产品类型",
      prop: "name",
      search: true,
    }, {
      label: "性别",
      prop: "sex",
      type: 'select',
      dicData: [{
        label: '男',
        value: 0
      }, {
        label: '女',
        value: 1
      }],
      search: true,
    }],
  }
}
