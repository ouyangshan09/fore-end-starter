import { History } from '../utils/History';
import { Store } from '../store';
interface Runtime {
    history?: History;
    store?: Store<any>;
    api?: any;
}
export default function getRuntime(options?: any): Runtime;
export {};
