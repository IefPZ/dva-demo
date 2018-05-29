import request from '../utils/request';

export async function query(params) {
  //return request(`/api/users?${qs.stringify(params)}`);
  return request('http://192.168.106.134/users/');
}