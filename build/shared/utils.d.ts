import { Slots } from 'vue';
export declare const isBrowser: boolean;
export declare function cssUnit(unit: string | number): string;
export declare function isBool(v: any): v is boolean;
export declare function isUndefined(v: any): v is undefined;
export declare function isString(v: any): v is string;
/**
 * 从 props、slots 中解析 render 方法的内容
 * @param key
 * @param props
 * @param slots
 * @param renderArgs
 * @returns
 */
export declare function getRenderResult(key: string, props: any, slots: Readonly<Slots>, renderArgs?: () => any): any;
export declare function debounce<F extends (...args: any) => any>(fn: F, timeout: number): (...args: Parameters<F>) => void;
