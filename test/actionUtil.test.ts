/**
 * Action 工具类测试
 * @author Ouyang
*/
import Utils from '../src/utils/action';
import {
    createAction as createAciton2
} from 'redux-actions';

describe(`Action Creator Utils`, () => {
    test(`createAction<P1, A1>`, () => {
        interface P1 {
            name?: string;
            age?: number;
        }

        interface M1 {
            isLoading?: boolean;
        }

        interface A1 {
            name?: string;
            age?: number;
            test1?: string;
        }

        const OUYANG = Utils.createAction<P1, A1>('OUYANG', (data) => {
            return {
                name: 'ouyang' + data.name,
                age: 18 + data.age
            }
        });
        const ouyangStr = OUYANG({test1: '123'});
        console.log('OUYANG1:', ouyangStr);
    });

    test(`createAction<P1, M1>`, () => {
        interface P1 {
            name?: string;
            age?: number;
            ouyangShane?: string;
        }

        interface M1 {
            isLoading?: boolean;
        }

        interface A1 {
            page: 1,
            size: 10
        }

        const ALL_LIST = Utils.createAction<P1, M1, A1>('ALL_LIST', (data) => {
            return {
                name: data.page + '',
                age: 18
            }
        }, (meta) => {
            return {
                isLoading: false
            }
        });
        const ALL_LIST_OBJ = ALL_LIST({page: 1, size: 10});
        console.log('ALL_LIST_OBJ:', ALL_LIST_OBJ);
    })
})
