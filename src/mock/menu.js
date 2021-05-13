import Mock from 'mockjs'
const top = []
const first = [
  {
    label: "图片设置",
    path: '/company-information',
    meta: {
    },
    icon: 'icon-caidan',
    children: [{
      label: "资质与合作",
      path: 'certificate',
      component: 'views/company-information/certificate',
      icon: 'icon-caidan',
      children: []
    }, {
      label: "宣传片",
      path: 'promotionalVideo',
      component: 'views/company-information/promotionalVideo',
      icon: 'icon-caidan',
      children: []
    }, {
      label: "轮播图",
      path: 'imageEditor',
      component: 'views/system-settings/imageEditor',
      icon: 'icon-caidan',
      children: []
    },
      {
        label: "其他图片",
        path: 'othersImageEditor',
        component: 'views/system-settings/othersImageEditor',
        icon: 'icon-caidan',
        children: []
      },]
  },
  {
    label: "产品管理",
    path: '/product-management',
    meta: {
    },
    icon: 'icon-caidan',
    children: [{
      label: "产品列表",
      path: 'list',
      component: 'views/product-management/list',
      icon: 'icon-caidan',
      children: []
    }]
  },
  {
    label: "新闻管理",
    path: '/news-management',
    meta: {
    },
    icon: 'icon-caidan',
    children: [{
      label: "新闻列表",
      path: 'list',
      component: 'views/news-management/list',
      icon: 'icon-caidan',
      children: []
    },]
  },
  {
    label: "联系我们",
    path: '/contact-us',
    meta: {
    },
    icon: 'icon-caidan',
    children: [{
      label: "公司信息",
      path: 'companyInformation',
      component: 'views/contact-us/companyInformation',
      icon: 'icon-caidan',
      children: []
    },
      {
        label: "留言列表",
        path: 'messageList.js',
        component: 'views/contact-us/messageList',
        icon: 'icon-caidan',
        children: []
      }]
  },
  {
    label: "系统设置",
    path: '/system-settings',
    meta: {
    },
    icon: 'icon-caidan',
    children: [
      {
        label: "公司信息",
        path: 'intro',
        component: 'views/company-information/intro',
        icon: 'icon-caidan',
        children: []
      },
      {
        label: "网站信息",
        path: 'basics',
        component: 'views/system-settings/basics',
        icon: 'icon-caidan',
        children: []
      }]
  },
]
const second = []
const third = []
export default ({ mock }) => {
  if (!mock) return;
  let menu = [first, second, third];
  Mock.mock('/user/getMenu', 'get', (res) => {
    let body = JSON.parse(res.body);
    return {
      data: menu[body.type] || []
    }
  })
  Mock.mock('/user/getTopMenu', 'get', () => {
    return {
      data: top
    }
  })

}
