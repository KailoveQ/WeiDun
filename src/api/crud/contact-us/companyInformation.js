import request from '@/router/axios';
import { baseUrl } from '@/config/env';
const apiUrl = `${baseUrl}/contract`
export const getdate = () => {   //获取数据
  return request({
    url: `${apiUrl}/detail`,
    method: 'get',
    params: {
      type: 1,
      networkId: 1
    },
  })
}
export const update = (data) => request({  //修改数据
  url: `${apiUrl}/1`,
  method: 'post',
  params: {
    type: 1,
    networkId: 1
  },
  data: data
})
