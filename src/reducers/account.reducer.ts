/**
 * 用户账号业务逻辑处理
 * @author Ouyang
*/
import {
    ReducersMapObject,
    Action
} from 'redux';
import {
    handleActions,
    ReducerMap
} from 'redux-actions';
import Account, {
    IAccount,
    IAccountPayload
} from '../store/account.store';

const handles: ReducerMap<IAccount, IAccountPayload> = {
    ['TEST_ACCOUNT']: (state, action) => {
        console.log('test_account:', state)
        return state;
    }
};

export default handleActions<IAccount, IAccountPayload>(handles, Account);
