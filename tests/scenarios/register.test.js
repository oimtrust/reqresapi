import { assert } from "chai";
import ReqresAPI from '$root/pages/reqres.api';
import * as data from '$root/data/user.data';

describe('As a guest, I want to register', () => {
    
    it('Should unsuccessful register when insert invalid data', async () => {
        const response = await ReqresAPI.register(data.INVALID_REGISTER)

        assert.equal(response.status, 400)
        assert.containsAllKeys(response.data, ["error"])
        assert.isString(response.data.error)
    });
    it('Should successfully register using valid data', async () => {
        const response = await ReqresAPI.register(data.VALID_REGISTER)

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["id", "token"]);
        assert.isNumber(response.data.id);
        assert.isString(response.data.token);
    });
});