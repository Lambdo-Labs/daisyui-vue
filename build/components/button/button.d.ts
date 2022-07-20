import { IColorType, ISize } from '@/shared/types/common';
import { AnchorHTMLAttributes, InputHTMLAttributes } from 'vue';
export declare type IButtonShape = 'defalut' | 'circle' | 'square';
export declare type IButtonType = IColorType | 'ghost' | 'link' | 'glass';
export interface IButtonProps {
    type?: IButtonType;
    size?: ISize;
    shape?: IButtonShape;
    block?: boolean;
    wide?: boolean;
    disabled?: boolean;
    outline?: boolean;
    active?: boolean;
    loading?: boolean;
    noAnimation?: boolean;
    component?: 'button' | 'a' | 'input';
    onClick?: (e: MouseEvent) => any;
}
export declare const Button: import("vue").DefineComponent<AnchorHTMLAttributes & InputHTMLAttributes & IButtonProps, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<AnchorHTMLAttributes & InputHTMLAttributes & IButtonProps>, {
    value: any;
    class: any;
    inlist: any;
    download: any;
}>;
