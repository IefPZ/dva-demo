import request from '../utils/request';

export async function login(params) {
  let options = {
    method: 'post',
    //mode: 'cors ',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  }
  return request(`http://192.168.106.134/login/`, options);
}


export async function logout(params) {
  let options = {
    method: 'delete'
  }
  return request(`http://192.168.106.134/logout/`, options)
}