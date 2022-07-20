import { HTMLAttributes } from 'vue';
export interface IIconBaseProps {
    color?: string;
    size?: number | string;
    useStroke?: boolean;
    viewBox?: string;
}
export declare const IconBase: import("vue").DefineComponent<HTMLAttributes & IIconBaseProps, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<HTMLAttributes & IIconBaseProps>, {
    class: any;
    inlist: any;
}>;
