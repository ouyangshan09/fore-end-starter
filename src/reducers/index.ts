/**
 * 默认导出所有Reducer
 * @author Ouyang
*/
import { combineReducers, Reducer } from 'redux';
import { getRunTimeEnv } from '../tools/enviroment';
import account from '../reducers/account.reducer';

let rootReducer: Reducer = (state, action) => {
    console.log('reducer state:', state);
    return state;
};

if (getRunTimeEnv() === 'production') {
    rootReducer = combineReducers({
        account: account
    })
} else {
    rootReducer = combineReducers({
        account: account
    })
}

export default rootReducer;
