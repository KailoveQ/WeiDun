
import request from '@/router/axios';
import { baseUrl } from '@/config/env';
const apiUrl = `${baseUrl}/contract`
export const list = () => {
  return request({
    url:  `${apiUrl}/detail`,
    method:'get',
    // meta: {
    //   isSerialize: true
    // },
    // params: data
    params: {
      type: 3,
      networkId: 1
    },
  })
}
// export const del = (id) => request.delete(`${apiUrl}/${id}`, {
//   params: {
//     id
//   }
// })



