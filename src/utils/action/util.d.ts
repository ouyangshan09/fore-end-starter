/**
 * 申明文件
*/
import {
    Action as BaseAction
} from 'redux';

declare namespace createAction {
    export interface Action<Payload> extends BaseAction {
        error?: boolean;
        payload?: Payload | Error;
        // meta?: M;
    }
    export interface ActionMeta<Payload, Meta> extends Action<Payload> {
        meta?: Meta;
    }

    export type ActionFunctionAny<R> = (...args: Array<any>) => R;
    export type ActionFunction1<A1, R> = (a1: A1) => R;
    export type ActionFunction2<A1, A2, R> = (a1: A1, a2: A2) => R;
    export type ActionFunction3<A1, A2, A3, R> = (a1: A1, a2: A2, a3: A3) => R;
    export type ActionFunction4<A1, A2, A3, A4, R> = (a1: A1, a2: A2, a3: A3, a4: A4) => R;

    export function createAction<Payload, Arg1>(
        actionType: string,
        payloadCreator: ActionFunction1<Arg1, Payload>
    ): ActionFunction1<Arg1, Action<Payload>>;

    export function createAction<Payload, Meta>(
        type: string,
        playLoadCreator: ActionFunctionAny<Payload>,
        metaCreator?: ActionFunctionAny<Meta>
    ): ActionFunctionAny<ActionMeta<Payload, Meta>>
}

declare function createAction (params:any): any;
