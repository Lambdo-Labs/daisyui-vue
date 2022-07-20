import { UnwrapRef } from 'vue';
declare type IFun<R> = (...args: any[]) => R | Promise<R>;
export interface IUseAsyncOptions<T> {
    /**
     * 是否立刻执行，mounted 的时候
     * @default false
     */
    immediate?: boolean;
    defaultValue?: T;
}
export declare function useAsync<F extends IFun<any>>(fn: F, options?: IUseAsyncOptions<ReturnType<F>>): [
    {
        loading: boolean;
        data: UnwrapRef<ReturnType<F>>;
        error: any;
    },
    F
];
export {};
