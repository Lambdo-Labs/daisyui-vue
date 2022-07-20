import { ExtractFromProps } from '@/shared/types/common';
import { PropType } from 'vue';
declare const props: {
    on: {
        default: string;
    };
    off: {
        default: string;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    active: {
        type: BooleanConstructor;
        default: any;
    };
    animation: {
        type: PropType<"flip" | "rotate">;
        default: string;
    };
    onChange: {
        type: PropType<(e: boolean) => void>;
        default: any;
    };
};
export declare type ISwapProps = ExtractFromProps<typeof props>;
export declare const Swap: import("vue").DefineComponent<ExtractFromProps<{
    on: {
        default: string;
    };
    off: {
        default: string;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    active: {
        type: BooleanConstructor;
        default: any;
    };
    animation: {
        type: PropType<"flip" | "rotate">;
        default: string;
    };
    onChange: {
        type: PropType<(e: boolean) => void>;
        default: any;
    };
}>, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractFromProps<{
    on: {
        default: string;
    };
    off: {
        default: string;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    active: {
        type: BooleanConstructor;
        default: any;
    };
    animation: {
        type: PropType<"flip" | "rotate">;
        default: string;
    };
    onChange: {
        type: PropType<(e: boolean) => void>;
        default: any;
    };
}>>, {
    on: any;
    off: any;
}>;
export {};
