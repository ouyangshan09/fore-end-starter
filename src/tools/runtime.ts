/**
 * 项目所需的所有变量，对象。参数管理
 * @author Ouyang
*/
import { History } from 'history';
import { Store } from 'redux';
import { getRunTimeEnv } from './enviroment';
import createHistory from '../utils/History';
import createStore from '../store';

// Store初始化

// Api初始化

/**
 * Hisotry 初始化
*/
const history = createHistory();
const store = createStore(getRunTimeEnv());

interface Runtime {
    history?: History,
    store?: Store<any>,
    api?: any
};

export default function getRuntime (options?: any): Runtime {
    return {
        history: history,
        store: store
    };
}