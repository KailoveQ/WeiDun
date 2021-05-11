
import request from '@/router/axios';
import { baseUrl } from '@/config/env';
const apiUrl = `${baseUrl}/photo`
export const list = ({networkId=1,pageSize=10,pageIndex=1}) => {
  return request({
    url:  `${apiUrl}/${networkId}/${pageSize}/${pageIndex}`,
    method:'post'
    // meta: {
    //   isSerialize: true
    // },
    // params: data
  })
}
// export const del = (id) => request.delete(`${apiUrl}/${id}`, {
//   params: {
//     id
//   }
// })
export const del = (id) => request({
  url: `${apiUrl}/`,
  method: 'delete',
  data: [id]
})

export const add = (data) => request({
  url: `${apiUrl}/1`,
  method: 'put',
  data: data
})
export const update = (id,data) => request({
  url: `${apiUrl}/${id}`,
  method: 'patch',
  // meta: {
  //   isSerialize: true
  // },
  data: data
})

export const updateStatus = (id) => request({
  url: `${apiUrl}/status/${id}`,
  method: 'patch',
  data: {
    id, status
  }
  // data: id
})


