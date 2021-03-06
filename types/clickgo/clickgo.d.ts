/** --- ClickGo 基 --- */
interface IClickGo {
    /** --- 当前请求页面的基路径 --- */
    'rootPath': string;
    /** --- 当前 JS 文件的基路径 --- */
    'cgRootPath': string;
    /** --- 是否是桌面环境 --- */
    'isNative': boolean;

    /** --- 是否已加载完成 --- */
    'isReady': boolean;
    /** --- ClickGo 准备就绪后执行的 --- */
    'readys': Array<() => void | Promise<void>>;
    /**
     * --- 注册页面装载成功回调 ---
     * @param callback 回调函数
     */
    ready(callback: () => void | Promise<void>): void;

    'control': ICGControlLib;
    'core': ICGCoreLib;
    'dom': ICGDomLib;
    'form': ICGFormLib;
    'task': ICGTaskLib;
    'theme': ICGThemeLib;
    'tool': ICGToolLib;
    'zip': ICGZipLib;
}

// declare let clickgo: IClickGo;
