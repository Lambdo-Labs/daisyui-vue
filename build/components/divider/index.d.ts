import { ExtractFromProps } from '@/shared/types/common';
import { HtmlHTMLAttributes } from 'vue';
declare const props: {
    horizontal: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type IDividerProps = ExtractFromProps<typeof props>;
export declare const Divider: import("vue").DefineComponent<ExtractFromProps<{
    horizontal: {
        type: BooleanConstructor;
        default: boolean;
    };
}> & HtmlHTMLAttributes, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractFromProps<{
    horizontal: {
        type: BooleanConstructor;
        default: boolean;
    };
}> & HtmlHTMLAttributes>, {
    class: any;
    inlist: any;
}>;
export {};
