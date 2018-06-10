/**
 * 导出所有Saga
 * @author Ouyang
*/
import { SagaIterator } from 'redux-saga';
import { fork,  } from 'redux-saga/effects';

function* Test (): IterableIterator<any> {
    //
}

function* rootSaga (): SagaIterator {
    //
}

export default function rootSagaWrap() {
    return {
        next: () => rootSaga
    }
    // yield fork(Test);
}