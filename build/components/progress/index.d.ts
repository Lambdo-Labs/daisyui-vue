import { PropType } from 'vue';
import { IColorType, ExtractFromProps } from '@/shared/types/common';
declare const props: {
    type: PropType<IColorType>;
    value: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
};
export declare type IProgressProps = ExtractFromProps<typeof props>;
export declare const Progress: import("vue").DefineComponent<ExtractFromProps<{
    type: PropType<IColorType>;
    value: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
}>, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractFromProps<{
    type: PropType<IColorType>;
    value: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
}>>, {}>;
export {};
