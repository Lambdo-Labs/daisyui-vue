import { ISize } from '../../shared/types/common';
import { HTMLAttributes } from 'vue';
declare type IType = 'bordered' | 'lifted' | 'boxed';
export interface ITabsProps {
    type?: IType;
    size?: ISize;
    value?: string;
}
export declare const Tabs: import("vue").DefineComponent<HTMLAttributes, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<HTMLAttributes>, {
    class: any;
    inlist: any;
}>;
export declare const Tab: import("vue").DefineComponent<HTMLAttributes, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<HTMLAttributes>, {
    class: any;
    inlist: any;
}>;
export {};
