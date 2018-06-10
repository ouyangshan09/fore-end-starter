/**
 * 导出所有Saga
 * @author Ouyang
*/
import { SagaIterator } from 'redux-saga';
import { fork,  } from 'redux-saga/effects';

function* Test (): IterableIterator<any> {
    //
}

export default function* rootSaga(): SagaIterator {
    yield fork(Test);
}