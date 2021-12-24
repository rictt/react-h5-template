import request from '@/utils/request'

// test fetch
export const testFetch = (data) => {
  return request({
    url: '/book/findall',
    method: 'post',
    data
  })
}