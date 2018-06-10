/**
 * Redux Store 创建配置
 * @author Ouyang
*/

import { createStore, applyMiddleware, Store } from 'redux';
// import createSaga from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Constant } from '../constant';
// import rootSaga from '../saga';

const rootReucer: any = null;

// 浏览器插件
const composeEnhancers = composeWithDevTools({
    // 后续如需配置参数，可在这里配置
});
// saga异步控制
// const sagaMiddleware = createSaga();
// log日志控制
const loggerMiddleware = createLogger({
    duration: true,
    collapsed: true,
    stateTransformer: (state) => {
        console.log(`loggerMiddleware state:`, state);
        return state;
    }
});

const productionStore = (preloadedState: any = {}) => createStore(
    rootReucer, // rootReucer
    preloadedState, // 
    // applyMiddleware(...[sagaMiddleware])
);

const developmentStore = (preloadedState: any = {}) => {
    const store = createStore(
        rootReucer,
        preloadedState,
        composeEnhancers(applyMiddleware(...[loggerMiddleware]))
    );

    // sagaMiddleware.run((rootSaga as any));

    if ((module as any).hot) {
        (module as any).hot.accept('../reducers', () => {
            store.replaceReducer(rootReucer)
        })
    }

    return store;
};

export default function createStoreFn (type: Constant.Environment): Store<any> {
    if (type === 'production') {
        return productionStore();
    }
    if (type === 'development') {
        return developmentStore();
    }
};

export {
    Store
}
