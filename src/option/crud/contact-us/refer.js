export default () => {
  return {
    emptyBtn:false,
    submitBtn:false,
    column: [{
      label: "公司名称",
      prop: "company-name",
      span: 7,
      row: true,
      offset: 1,
      rules: [{
        required: true,
        message: "请输入公司名称",
        trigger: "blur"
      }]
    },{
      label: "联系电话",
      prop: "telephone",
      span: 7,
      row: true,
      offset: 1,
      rules: [{
        required: true,
        message: "请输入联系电话",
        trigger: "blur"
      }]
    },{
      label: "合作内容",
      prop: "cooperative-contents",
      type: "textarea",
      rows: 4,
      row: true,
      offset: 1,
      rules: [{
        required: true,
        message: "请输入邮箱",
        trigger: "blur"
      }]
    }]
  }
}
