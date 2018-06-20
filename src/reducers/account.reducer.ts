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

const handles: ReducerMap<any, any> = {
    ['TEST_ACCOUNT']: (state, action) => {
        console.log('test_account:', state)
        return state;
    }
};

export default handleActions<any, any>(handles, {
    name: 'ouyang'
});
