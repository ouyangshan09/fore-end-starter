import { BrowserHistoryBuildOptions, History } from 'history';
declare class HistoryObject {
    private option1;
    static instance: History;
    constructor(options?: BrowserHistoryBuildOptions);
    static create(options?: BrowserHistoryBuildOptions): History;
}
declare const _default: typeof HistoryObject.create;
export default _default;
export { History, HistoryObject };
