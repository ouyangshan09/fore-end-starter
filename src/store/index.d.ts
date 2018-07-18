import { Store } from 'redux';
import { Constant } from '../constant';
export default function createStoreFn(type: Constant.Environment): Store<any>;
export { Store };
