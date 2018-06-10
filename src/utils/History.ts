/**
 * 创建History对象方法
 * @author Ouynag
*/
import { createBrowserHistory as createHistory, BrowserHistoryBuildOptions, History } from 'history';

class HistoryObject {
    private option1: BrowserHistoryBuildOptions = null

    // public static instance: History;

    constructor (options?: BrowserHistoryBuildOptions) {
        // this.option1 = options;
    }

    static create (options?: BrowserHistoryBuildOptions): History {
        // if (!HistoryObject.instance) {
        //     HistoryObject.instance = createHistory(options);
        // }
        // return HistoryObject.instance;
        return createHistory();
    }
}

export default HistoryObject;
