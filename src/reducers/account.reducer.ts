/**
 * 用户账号业务逻辑处理
 * @author Ouyang
*/
import { Reducer, ReducersMapObject, Action } from 'redux';

const handles: ReducersMapObject = {
    'TEST_ACCOUNT': (state, action) => {
        console.log('test reducer:', state);
        return state
    }
};

export default function (state: any, action: Action): Reducer {
    if (handles[action.type]) {
        return handles[action.type](state, action);
    }
    return state;
};
