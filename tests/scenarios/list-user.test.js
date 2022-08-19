import chai, {expect, assert} from "chai";
import jsonSchema from 'chai-json-schema';
import ReqresAPI from '$root/pages/reqres.api';
import * as data from '$root/data/user.data';
import { getParams } from '$root/helper/lib-api';
import * as schema from '$root/schema/list-user.schema';

chai.use(jsonSchema)

describe('As a user, I want to see the list of users', () => {
    
    it('Should successful when user see the list of users', async () => {
        const param = getParams(data.LIST_USER_PARAM['page'])
        const response = await ReqresAPI.listUser(param)

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALID_SCHEMA);
    });
});