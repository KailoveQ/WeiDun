import request from '@/router/axios';
import { baseUrl } from '@/config/env';
const apiUrl = `${baseUrl}/network`
export const getdate = (data) => {
  return request({
    url: `${apiUrl}/1`,
    method: 'get',
    data: data
  })
}
export const update = (data) => request({
  url: `${apiUrl}/1`,
  method: 'patch',
  data: data
})
