declare const Account: any;
export default Account;
interface Visitor {
    [propName: string]: any;
}
export interface IAccount {
    visitor: Visitor;
}
export declare type IAccountPayload = {};
