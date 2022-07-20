import { ExtractFromProps, IBrandColor } from '@/shared/types/common';
import { PropType } from 'vue';
declare const props: {
    type: {
        type: PropType<IBrandColor>;
        default: string;
    };
    enableHoverClass: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type ILinkProps = ExtractFromProps<typeof props>;
export declare const Link: import("vue").DefineComponent<ExtractFromProps<{
    type: {
        type: PropType<IBrandColor>;
        default: string;
    };
    enableHoverClass: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractFromProps<{
    type: {
        type: PropType<IBrandColor>;
        default: string;
    };
    enableHoverClass: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {}>;
export {};
