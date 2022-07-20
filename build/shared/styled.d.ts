import { DefineComponent, Slots } from 'vue';
export declare const EMOTION_SYMBOL: unique symbol;
interface IStyleFile {
    css: string;
    id: number;
}
declare type IComponentOptions<P, A> = [
    options: {
        name: string;
        props?: any;
        inheritAttrs?: boolean;
        emits?: string[];
        setup: (props: P, ctx: {
            attrs: Omit<A, keyof P>;
            slots: Slots;
            emit: any;
            expose: (exposed?: Record<string, any>) => void;
        }) => any;
        [k: string]: any;
    },
    styles?: IStyleFile[]
];
/**
 * - Attar 组件所有属性类型
 * - Props 仅 props 中的类型
 * @deprecated
 * @param options
 * @param styles
 * @returns
 */
export declare function component<Attrs = unknown, P = {}>(...args: IComponentOptions<P, Attrs>): DefineComponent<Attrs, any>;
/**
 * - Props 类型
 * - Attar props 外的类型，如原生 div 的一些属性
 * @param args
 * @returns
 */
export declare function componentV2<Props = unknown, Attrs = unknown>(...args: IComponentOptions<Props, Props & Attrs>): DefineComponent<Props & Attrs, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<Props & Attrs extends infer T ? T extends Props & Attrs ? T extends import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}> ? import("vue").ExtractPropTypes<T> : T : never : never>, import("vue").ExtractDefaultPropTypes<Props & Attrs>>;
export interface IStyle {
    insertCss: (css: IStyleFile | IStyleFile[]) => void;
    extractStyles: () => string;
}
export declare function createStyle(): IStyle;
export {};
