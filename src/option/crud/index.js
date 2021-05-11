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
      label: "邮箱",
      prop: "email",
      span: 7,
      row: true,
      offset: 1,
      rules: [{
        required: true,
        message: "请输入邮箱",
        trigger: "blur"
      }]
    },{
      label: "地址",
      prop: "adress",
      span: 7,
      row: true,
      offset: 1,
      rules: [{
        required: true,
        message: "请输入地址",
        trigger: "blur"
      }]
    }]
  }
}


