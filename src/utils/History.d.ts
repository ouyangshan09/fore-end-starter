import { BrowserHistoryBuildOptions, History } from 'history';
declare class HistoryObject {
    private option1;
    constructor(options?: BrowserHistoryBuildOptions);
    static create(options?: BrowserHistoryBuildOptions): History;
}
export default HistoryObject;
