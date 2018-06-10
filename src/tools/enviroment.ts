/**
 * 环境工具函数集合
 * @author Ouyang
*/
import {
    Constant
} from '../constant';

export function getRunTimeEnv (): Constant.Environment {
    const ENV = ((process.env && process.env.NODE_ENV) || '').toLowerCase();
    if (ENV === 'production' || ENV === 'prod') {
        return 'production';
    }
    if (ENV === 'development' || ENV === 'dev') {
        return 'development';
    }
    if (ENV === 'node') {
        return 'node'
    }
}
