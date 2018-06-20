/**
 * Redux Store 创建配置
 * @author Ouyang
*/

import { createStore, applyMiddleware, Store } from 'redux';
import { createLogger, logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Constant } from '../constant';
import rootReucer from '../reducers';
// import createSaga from 'redux-saga';
// import rootSaga from '../saga';

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
    rootReucer,
    preloadedState,
    // applyMiddleware(...[sagaMiddleware])
);

const developmentStore = (preloadedState: any = {}) => {
    const enhancer = composeEnhancers(
        applyMiddleware(...[loggerMiddleware])
    )
    const store = createStore(
        rootReucer,
        preloadedState,
        enhancer
    );

    // const helloSaga = () => {
    //     return {
    //         next: () => ''
    //     }
    // };

    // sagaMiddleware.run(helloSaga);
    // sagaMiddleware.run(rootSaga);

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
