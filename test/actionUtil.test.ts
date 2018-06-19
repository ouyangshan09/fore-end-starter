/**
 * Action 工具类测试
 * @author Ouyang
*/
import Utils from '../src/utils/action';

describe(`Action Creator Utils`, () => {
    test(`Utils.createAction1`, () => {
        interface P1 {
            name?: string;
            age?: number;
        }

        interface M1 {
            isLoading?: boolean;
        }

        const OUYANG = Utils.createAction1<P1, M1>('OUYANG');
        const ouyangStr = OUYANG({name: 'ouyang', age: 18});
        console.log('OUYANG1:', ouyangStr);
        console.log('OUYANG2:', typeof ouyangStr);
    })
})
