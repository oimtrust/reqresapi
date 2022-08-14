import BaseAPI from "$root/pages/base.api";

const ReqresAPI = {
    register: (data) => BaseAPI.post('/register', data)
}

export default ReqresAPI;