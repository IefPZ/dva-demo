import request from '../utils/request';

export async function query(params) {
  //return request(`/api/users?${qs.stringify(params)}`);
  return request('http://localhost:3000/api/users');
}