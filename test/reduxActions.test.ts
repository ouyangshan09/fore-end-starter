/**
 * Redux-Actions 函数库测试
 * @author Ouyang
*/
import {
    createAction
} from 'redux-actions';

describe(``, () => {
    test(`redux-actions createAction`, () => {
        interface Payload {
            page?: number;
            size?: number;
            [prop: string]: any;
        }

        interface Arg1 {
            page1?: number;
            pageSize1: number;
            folderId1: string;
        }

        interface Arg2 {
            page2?: number;
            pageSize2: number;
            folderId2: string;
        }

        interface Arg3 {
            page3?: number;
            pageSize3: number;
            folderId3: string;
        }

        interface Arg4 {
            page4?: number;
            pageSize4: number;
            folderId4: string;
        }

        interface Arg5 {
            page5?: number;
            pageSize5: number;
            folderId5: string;
        }

        const ZDM = createAction<Payload, Arg1, Arg2, Arg3, Arg4>('ZMD_ACTION', (arg1, arg2, arg3, arg4) => {
            arg1.folderId1;
            arg2.folderId2;
            arg3.folderId3;
            arg4.folderId4;
            return {
                page: 1,
                size: 10
            };
        })
    })
})
