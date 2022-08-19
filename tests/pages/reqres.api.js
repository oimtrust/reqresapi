import BaseAPI from "$root/pages/base.api";

const ReqresAPI = {
    register: (data) => BaseAPI.post('/register', data),
    listUser: (param) => BaseAPI.get(`/users?page=${param}`)
}

export default ReqresAPI;