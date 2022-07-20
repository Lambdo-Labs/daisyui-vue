import { PropType, Ref, StyleValue } from 'vue';
export declare type ISize = 'xs' | 'sm' | 'md' | 'lg';
export declare type IStateColor = 'info' | 'success' | 'warning' | 'error';
export declare type IBrandColor = 'netural' | 'primary' | 'secondary' | 'accent';
export declare type IColorType = IBrandColor | IStateColor;
export declare type IColorTypeWithGhost = IColorType | 'ghost';
/**
 * Bool => bool
 * @deprecated
 */
export declare type BoolConstructorToBase<T> = {
    [k in keyof T]: T[k] extends BooleanConstructor ? boolean : T[k];
};
declare type ExtractFromPropType<T> = T extends PropType<infer U> ? U : any;
/**
 * 从 props 对象类型中反推出类型
 */
export declare type ExtractFromProps<T> = {
    [k in keyof T]?: ExtractFromPropType<T[k] extends {
        type: any;
    } ? T[k]['type'] : T[k]>;
};
export interface IStyleProps {
    class?: any;
    style?: StyleValue;
}
export declare type IMaybeRef<T> = T | Ref<T>;
export {};
