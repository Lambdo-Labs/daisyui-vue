import { ExtractFromProps, IColorTypeWithGhost, ISize } from '@/shared/types/common';
import { InputHTMLAttributes, PropType } from 'vue';
declare const props: {
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<IColorTypeWithGhost>;
        default: string;
    };
    size: {
        type: PropType<ISize>;
        default: string;
    };
};
export declare type IInputProps = ExtractFromProps<typeof props>;
export declare const Input: import("vue").DefineComponent<ExtractFromProps<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<IColorTypeWithGhost>;
        default: string;
    };
    size: {
        type: PropType<ISize>;
        default: string;
    };
}> & InputHTMLAttributes, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractFromProps<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<IColorTypeWithGhost>;
        default: string;
    };
    size: {
        type: PropType<ISize>;
        default: string;
    };
}> & InputHTMLAttributes>, {
    value: any;
    class: any;
    inlist: any;
}>;
export {};
