/**
 * 默认导出所有Reducer
 * @author Ouyang
*/
import { combineReducers } from 'redux';
import account from '../reducers/account.reducer';
// import { getRunTimeEnv } from '../tools/enviroment';

let rootReducer = combineReducers({
    account: account
})

// if (getRunTimeEnv() === 'production') {
//     rootReducer = combineReducers({
//         account: account
//     })
// } else {
//     rootReducer = combineReducers({
//         account: account
//     });
// }

export default rootReducer;
