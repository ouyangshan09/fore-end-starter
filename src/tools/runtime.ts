/**
 * 项目所需的所有变量，对象。参数管理
 * @author Ouyang
*/
import { getRunTimeEnv } from './enviroment';
import createHistory, { History } from '../utils/History';
import createStore, { Store } from '../store';

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