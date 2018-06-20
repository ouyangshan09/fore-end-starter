/**
 * 账号业务逻辑对应的数据模型
*/

const Account: any = {
    visitor: {}
};

export default Account;

interface Visitor {
    [propName: string]: any
}

export interface IAccount {
    visitor: Visitor;
}

export interface IAccountPayload {

}
