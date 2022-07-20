import { InputChangeEvent } from '@/@types/dom';
import { ExtractFromProps, IBrandColor, ISize } from '@/shared/types/common';
import { PropType } from 'vue';
export declare const toggleProps: {
    checked: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: {
        type: PropType<(e: InputChangeEvent) => void>;
        default: any;
    };
    type: {
        type: PropType<IBrandColor>;
        default: string;
    };
    size: {
        type: PropType<ISize>;
        default: string;
    };
};
export declare type IToggleProps = ExtractFromProps<typeof toggleProps>;
export declare const Toggle: import("vue").DefineComponent<ExtractFromProps<{
    checked: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: {
        type: PropType<(e: InputChangeEvent) => void>;
        default: any;
    };
    type: {
        type: PropType<IBrandColor>;
        default: string;
    };
    size: {
        type: PropType<ISize>;
        default: string;
    };
}>, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractFromProps<{
    checked: {
        type: BooleanConstructor;
        default: any;
    };
    onChange: {
        type: PropType<(e: InputChangeEvent) => void>;
        default: any;
    };
    type: {
        type: PropType<IBrandColor>;
        default: string;
    };
    size: {
        type: PropType<ISize>;
        default: string;
    };
}>>, {}>;
