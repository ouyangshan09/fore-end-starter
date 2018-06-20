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

export interface Action<Payload> extends BaseAction {
    error?: boolean;
    payload?: Payload | Error ;
    // meta?: M;
}

export interface ActionMeta<Payload, Meta> extends Action<Payload> {
    meta?: Meta;
}
export type ActionFunction<R> = () => R;
export type ActionFunctionAny<R> = (...args: Array<any>) => R;
export type ActionFunction1<A1, R> = (a1: A1) => R;
export type ActionFunction2<A1, A2, R> = (a1: A1, a2: A2) => R;
export type ActionFunction3<A1, A2, A3, R> = (a1: A1, a2: A2, a3: A3) => R;
export type ActionFunction4<A1, A2, A3, A4, R> = (a1: A1, a2: A2, a3: A3, a4: A4) => R;

export function createAction (
    type: string
): ActionFunctionAny<Action<any>>

export function createAction<Payload>(
    type: string,
    payloadCreator: ActionFunctionAny<Payload>
): ActionFunctionAny<Action<Payload>>

export function createAction<Payload, Arg1>(
    type: string,
    payloadCreator: ActionFunction1<Arg1, Payload>
): ActionFunction1<Arg1, Action<Payload>>

export function createAction<Payload, Arg1, Arg2>(
    type: string,
    payloadCreator: ActionFunction2<Arg1, Arg2, Payload>
): ActionFunction2<Arg1, Arg2, Action<Payload>>

export function createAction<Payload, Arg1, Arg2, Arg3>(
    type: string,
    payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>
): ActionFunction3<Arg1, Arg2, Arg3, Action<Payload>>

export function createAction<Payload, Arg1, Arg2, Arg3, Arg4>(
    type: string,
    payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>
): ActionFunction4<Arg1, Arg2, Arg3, Arg4, Action<Payload>>

export function createAction<Payload>(
    type: string
): ActionFunction1<Payload, Action<Payload>>

export function createAction<Meta>(
    type: string,
    payloadCreator: null | undefined,
    metaCreator: ActionFunctionAny<Meta>
): ActionFunctionAny<ActionMeta<any, Meta>>

export function createAction<Payload, Meta>(
    type: string,
    payloadCreator: ActionFunctionAny<Payload>,
    metaCreator: ActionFunctionAny<Meta>
): ActionFunctionAny<ActionMeta<Payload, Meta>>

/**
 * CreateAction 多传参数类型接口声明
*/
export function createAction<Payload, Meta, Arg1> (
    type: string,
    payloadCreator?: ActionFunction1<Arg1, Payload>,
    metaCreator?: ActionFunction1<Arg1, Meta>
): ActionFunction1<Arg1, ActionMeta<Payload, Meta>>

export function createAction<Payload, Meta, Arg1, Arg2>(
    type: string,
    payloadCreator?: ActionFunction2<Arg1, Arg2, Payload>,
    metaCreator?: ActionFunction2<Arg1, Arg2, Meta>
): ActionFunction2<Arg1, Arg2, ActionMeta<Payload, Meta>>

export function createAction<Payload, Meta, Arg1, Arg2, Arg3>(
    type: string,
    payloadCreator?: ActionFunction3<Arg1, Arg2, Arg3, Payload>,
    metaCreator?: ActionFunction3<Arg1, Arg2, Arg3, Meta>
): ActionFunction3<Arg1, Arg2, Arg3, ActionMeta<Payload, Meta>>

export function createAction<Payload, Meta, Arg1, Arg2, Arg3, Arg4>(
    type: string,
    payloadCreator?: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>,
    metaCreator?: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Meta>
): ActionFunction4<Arg1, Arg2, Arg3, Arg4, ActionMeta<Payload, Meta>>

/**
 * 创建Action 规范方法
*/
export function createAction<Payload, Meta> (
    type: string,
    payloadCreator: ActionFunctionAny<Payload> = identity,
    metaCreator?: ActionFunctionAny<Meta>
): ActionFunctionAny<ActionMeta<Payload, Meta>> {
    const findPlayLoad = (isNull(payloadCreator) || payloadCreator === identity)
        ? identity : (head: Payload | Error, ...args: Array<any>) => head instanceof Error
        ? head : payloadCreator(head, ...args);
    
    const hasMeta = isFunction(metaCreator);
    const typeString = type.toString();

    function actionCreator (head: Payload, ...args: Array<any>): ActionMeta<Payload, Meta> {
        const payload = findPlayLoad(head, ...args);
        const action: ActionMeta<Payload, Meta> = { type }
        if (payload instanceof Error) {
            action.error = true;
        }
        if (payload !== undefined) {
            action.payload = payload;
        }
        if (hasMeta) {
            action.meta = metaCreator(...args);
        }
        return action;
    }

    actionCreator.toString = () => typeString;

    return actionCreator;
}

