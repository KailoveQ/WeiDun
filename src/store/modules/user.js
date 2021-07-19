import { setToken, removeToken } from '@/util/auth'
import { setStore, getStore } from '@/util/store'
import { isURL, validatenull } from '@/util/validate'
import { encryption, deepClone } from '@/util/util'
import webiste from '@/config/website'
import { loginByUsername, getUserInfo, getMenu, getTopMenu, logout, refeshToken } from '@/api/user'


function addPath(ele, first) {
  const menu = webiste.menu;
  const propsConfig = menu.props;
  const propsDefault = {
    label: propsConfig.label || 'label',
    path: propsConfig.path || 'path',
    icon: propsConfig.icon || 'icon',
    children: propsConfig.children || 'children'
  }
  const icon = ele[propsDefault.icon];
  ele[propsDefault.icon] = validatenull(icon) ? menu.iconDefault : icon;
  const isChild = ele[propsDefault.children] && ele[propsDefault.children].length !== 0;
  if (isURL(ele[propsDefault.path])) {
    ele[propsDefault.path] = ele[propsDefault.path].replace(/&/g, "$")
  }
  if (!isChild && first && !isURL(ele[propsDefault.path])) {
    ele[propsDefault.path] = ele[propsDefault.path] + '/index'
  } else {
    ele[propsDefault.children] && ele[propsDefault.children].forEach(child => {
      if (!isURL(child[propsDefault.path])) {
        child[propsDefault.path] = `${ele[propsDefault.path]}/${child[propsDefault.path] ? child[propsDefault.path] : 'index'}`
      }
      addPath(child);
    })
  }

}
const user = {
  state: {
    userInfo: {},
    permission: {},
    roles: [],
    menuId: getStore({ name: 'menuId' }) || [],
    menu: getStore({ name: 'menu' }) || [],
    menuAll: getStore({ name: 'menuAll' }) || [],
    token: getStore({ name: 'token' }) || '',
  },
  actions: {
    //根据用户名登录
    LoginByUsername({ commit }, userInfo) {
      // const user = encryption({
      //   data: userInfo,
      //   type: 'Aes',
      //   key: 'avue',
      //   param: ['useranme', 'password']
      // });
      return new Promise((resolve) => {
        loginByUsername(userInfo.username, userInfo.password, userInfo.code, userInfo.redomStr).then(res => {
          console.log(userInfo)
          console.log(res)
          const userId = res.data.data.userId
          const data = res.data.data.token;
          commit('SET_TOKEN', data);
          commit('DEL_ALL_TAG');
          commit('CLEAR_LOCK');
          resolve();
        })
      })
    },
    //根据手机号登录
    LoginByPhone({ commit }, userInfo) {
      return new Promise((resolve) => {
        loginByUsername(userInfo.phone, userInfo.code).then(res => {
          const data = res.data.data;
          commit('SET_TOKEN', data);
          commit('DEL_ALL_TAG');
          commit('CLEAR_LOCK');
          resolve();
        })
      })
    },
    GetUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
          // const data = {"msg":"操作成功","code":200,"permissions":["*:*:*"],"roles":["admin"],"user":{"searchValue":null,"createBy":"admin","createTime":"2020-11-28 12:31:57","updateBy":null,"updateTime":null,"remark":"管理员","params":{},"userId":1,"userName":"admin","nickName":"管理员","userType":"00","email":null,"phoneNumber":"18560680345","sex":"2","avatar":"https://hy-read-public.oss-cn-qingdao.aliyuncs.com/2021/01/28/507618bc245d4dd4b501fc548bcb26ef.jpeg","salt":null,"openId":null,"status":"1","delFlag":"0","loginIp":"127.0.0.1","loginDate":"2020-11-28T12:31:57.000+0800","roles":[{"searchValue":null,"createBy":null,"createTime":null,"updateBy":null,"updateTime":null,"remark":null,"params":{},"roleId":1,"roleName":"超级管理员","roleKey":null,"roleSort":"1","menuCheckStrictly":false,"status":"1","delFlag":null,"flag":false,"menuIds":null,"admin":true}],"roleIds":null,"carNum":null,"admin":true}};
        const data = {
          "msg":"操作成功",
          "code":200,
          "permissions":[
            "*:*:*"
          ],
          "roles":[
            "admin"
          ],
          "user":{
            "searchValue":null,
            "createBy":"admin",
            "createTime":"2020-11-28 12:31:57",
            "updateBy":null,
            "updateTime":null,
            "remark":"管2理员",
            "params":{

            },
            "userId":1,
            "userName":"admin",
            "nickName":"管理员",
            "userType":"00",
            "email":null,
            "phoneNumber":"18560680345",
            "sex":"2",
            "avatar":"https://hy-read-public.oss-cn-qingdao.aliyuncs.com/2021/01/28/507618bc245d4dd4b501fc548bcb26ef.jpeg",
            "salt":null,
            "openId":null,
            "status":"1",
            "delFlag":"0",
            "loginIp":"127.0.0.1",
            "loginDate":"2020-11-28T12:31:57.000+0800",
            "roles":[
              {
                "searchValue":null,
                "createBy":null,
                "createTime":null,
                "updateBy":null,
                "updateTime":null,
                "remark":null,
                "params":{

                },
                "roleId":1,
                "roleName":"超级管理员",
                "roleKey":null,
                "roleSort":"1",
                "menuCheckStrictly":false,
                "status":"1",
                "delFlag":null,
                "flag":false,
                "menuIds":null,
                "admin":true
              }
            ],
            "roleIds":null,
            "carNum":null,
            "admin":true
          }
        };


        commit('SET_USERIFNO', data.user);
          commit('SET_ROLES', data.roles);
          commit('SET_PERMISSION', data.permissions) ;
        resolve(data);
        // getUserInfo().then((res) => {
        //   const data = res.data.data;
        //   commit('SET_USERIFNO', data.userInfo);
        //   commit('SET_ROLES', data.roles);
        //   commit('SET_PERMISSION', data.permission)
        //   resolve(data);
        // }).catch(err => {
        //   reject(err);
        // })
      })
    },
    //刷新token
    RefeshToken({ state, commit }) {
      return new Promise((resolve, reject) => {
        refeshToken(state.refeshToken).then(res => {
          const data = res.data.data;
          commit('SET_TOKEN', data);
          resolve(data);
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        commit('SET_MENUID', {})
        commit('SET_MENUALL', []);
        commit('SET_MENU', [])
        commit('SET_TAG_LIST', [])
        commit('SET_ROLES', [])
        commit('DEL_ALL_TAG');
        commit('CLEAR_LOCK');
        removeToken()
        resolve()
        // logout().then(() => {
        //   commit('SET_TOKEN', '')
        //   commit('SET_MENUID', {})
        //   commit('SET_MENUALL', []);
        //   commit('SET_MENU', [])
        //   commit('SET_TAG_LIST', [])
        //   commit('SET_ROLES', [])
        //   commit('DEL_ALL_TAG');
        //   commit('CLEAR_LOCK');
        //   removeToken()
        //   resolve()
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },
    //注销session
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_MENUID', {})
        commit('SET_MENUALL', []);
        commit('SET_MENU', [])
        commit('SET_TAG_LIST', [])
        commit('SET_ROLES', [])
        commit('DEL_ALL_TAG');
        commit('CLEAR_LOCK');
        removeToken()
        resolve()
      })
    },
    GetTopMenu() {
      return new Promise(resolve => {
        // getTopMenu().then((res) => {
        //   const data = res.data.data || []
        //   resolve(data)
        // })
      })
    },
    //获取系统菜单
    GetMenu({ commit }, parentId) { /* eslint-disable */
      return new Promise(resolve => {
        let menu = [
          /* eslint-disable */
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
            icon: 'el-icon-setting',
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

          // let menu = deepClone(data);
          menu.forEach(ele => {
            addPath(ele, true);
          })
        commit('SET_MENU', menu)
        resolve(menu)



        // getMenu(parentId).then((res) => {
        //   const data = res.data.data
        //   let menu = deepClone(data);
        //   menu.forEach(ele => {
        //     addPath(ele, true);
        //   })
        //   commit('SET_MENUALL', menu)
        //   commit('SET_MENU', menu)
        //   resolve(menu)
        // })
      })
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      setToken(token)
      state.token = token;
      setStore({ name: 'token', content: state.token })
    },
    SET_MENUID(state, menuId) {
      state.menuId = menuId;
      setStore({ name: 'menuId', content: state.menuId, type: 'session' })
    },
    SET_USERIFNO: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    SET_MENUALL: (state, menuAll) => {
      state.menuAll = menuAll
      setStore({ name: 'menuAll', content: state.menuAll })
    },
    SET_MENU: (state, menu) => {
      state.menu = menu
      setStore({ name: 'menu', content: state.menu })
      if (validatenull(menu)) return
      //合并动态路由去重
      let menuAll = state.menuAll;
      menuAll = menuAll.concat(menu).reverse();
      let newMenu = [];
      for (let item1 of menuAll) {
        let flag = true;
        for (let item2 of newMenu) {
          if (item1.label == item2.label || item1.path == item2.path) {
            flag = false;
          }
        }
        if (flag) newMenu.push(item1);
      }
      state.menuAll = newMenu
      setStore({ name: 'menuAll', content: state.menuAll, type: 'session' })
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_PERMISSION: (state, permission) => {
      console.log(permission)

      state.permission = {};
      permission.forEach(ele => {
        state.permission[ele] = true;
      });
    }
  }

}
export default user
