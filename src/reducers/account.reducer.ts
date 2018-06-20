/**
 * 用户账号业务逻辑处理
 * @author Ouyang
*/
import {
    Reducer,
    ReducersMapObject,
    Action
} from 'redux';
import {
    handleAction,
    handleActions,
    ReducerMap
} from 'redux-actions';

// const handles: ReducersMapObject<any, Action> = {
//     'TEST_ACCOUNT': (state: any, action) => {
//         console.log('test reducer:', state);
//         return state
//     }
// };

// export default function (state: any = {test: 'ouyang'}, action: Action): Reducer {
//     console.log('state1:', state);
//     console.log('state2:', action);
//     if (handles[action.type]) {
//         return handles[action.type](state, action);
//     }
//     return state;
// };

// function createReducer (initialState: any, handles: any): any {
//     return function reducer(state = initialState, action: any) {
//         if (handles.hasOwnProperty(action.type)) {
//             return handles[action.type](state, action);
//         }
//         console.log('state:', state);
//         return state;
//     }
// }

const handles: ReducerMap<any, any> = {
    ['TEST_ACCOUNT']: (state, action) => {
        console.log('test_account:', state)
        return state;
    }
};

export default handleActions<any, any>(handles, {
    name: 'ouyang'
});
