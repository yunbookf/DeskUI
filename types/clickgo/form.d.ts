interface ICGFormLib {
    'popShowing': null | IVueControl;
    'lastFormId': number;
    'lastZIndex': number;
    'lastTopZIndex': number;
    'lastPopZIndex': number;
    getList(taskId: number): Record<string, ICGFormItem>;
    changeFocus(formId?: number): void;
    getMaxZIndexFormID(): number | null;
    getRectByBorder(border: TCGBorder): {
        'width': number;
        'height': number;
        'left': number;
        'top': number;
    };
    showCircular(x: number, y: number): void;
    moveRectangle(border: TCGBorder): void;
    showRectangle(x: number, y: number, border: TCGBorder): void;
    hideRectangle(): void;
    notify(opt: {
        'title': string;
        'content': string;
        'type'?: 'primary' | 'info' | 'waring' | 'danger';
    }): void;
    appendToPop(el: HTMLElement): void;
    removeFromPop(el: HTMLElement): void;
    showPop(pop: IVueControl, direction: 'h' | 'v' | MouseEvent | TouchEvent | { x: number; y: number; }, opt?: { 'size'?: { width?: number; height?: number; }; 'null'?: boolean; }): void;
    hidePop(pop?: IVueControl | null): void;
    doFocusAndPopEvent(e: MouseEvent | TouchEvent): void;
    remove(formId: number): boolean;
    create(taskId: number, opt: ICGFormCreateOptions): Promise<number | ICGForm>;
}

/** --- 窗体对象 --- */
interface ICGForm {
    'id': number;
    'vapp': IVueApp;
    'vroot': IVueForm;
    'win': Electron.BrowserWindow | null;
    'events': Record<string, (...any: any) => void | Promise<void>>;
}

/** --- 窗体创建选项 --- */
interface ICGFormCreateOptions {
    'file'?: string;

    'path'?: string; // --- 相当于 base dir，有 file 以 file 为准，没有则以 path 为准，用于定义当前 form 中文件所在的基准路径 ---
    'code'?: Record<string, any>;
    'layout'?: string;
    'style'?: string;

    'topMost'?: boolean;
}

/** --- Dialog 选项 --- */
interface ICGFormDialog {
    'title'?: string;
    'content': string;
    'buttons'?: string[];
    'select'?: (e: Event, button: string) => void;
}

/** --- Form Item 的简略情况，通常在 list 当中 --- */
interface ICGFormItem {
    'title': string;
    'icon': string;
    'stateMax': boolean;
    'stateMin': boolean;
    'show': boolean;
    'focus': boolean;
}
