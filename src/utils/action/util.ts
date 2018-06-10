/**
 * 约束Action创建规范
 * @author Ouyang
*/
import {
    identity,
    isFunction,
    toString,
    isNull,
    isNil
} from 'lodash';
import {
    Action as BaseAction
} from 'redux';

export interface Action<T = any, M = any> extends BaseAction {
    error?: boolean;
    playload?: T;
    meta?: M;
}

export function createAction<T, M> (type: string, playLoadCreator: Function = identity, metaCreator?: Function): Function {
    const findPlayLoad = (isNull(playLoadCreator) || playLoadCreator === identity)
        ? identity : (head: any, ...args: Array<any>) => head instanceof Error
        ? head : playLoadCreator(head, ...args);
    
    const hasMeta = isFunction(metaCreator);
    const typeString = type.toString();

    function actionCreator (head: any, ...args: Array<any>): Action {
        const playLoad = findPlayLoad(head, ...args);
        const action: Action<T, M> = { type }
        if (playLoad instanceof Error) {
            action.error = true;
        }
        if (playLoad !== undefined) {
            action.playload = playLoad;
        }
        if (hasMeta) {
            action.meta = metaCreator(...args);
        }
        return action;
    }

    actionCreator.toString = () => typeString;
    
    return actionCreator;
}

interface P1 {
    name?: string;
    age?: number;
}

interface M1 {
    isLoading?: boolean;
}

const OUYANG = createAction<P1, M1>('OUYANG');

const action: Action<P1, M1> = OUYANG({name: 'ouyang', age: 18}, {isLoading: true});
