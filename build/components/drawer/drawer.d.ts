import { ExtractFromProps } from '@/shared/types/common';
import { PropType } from 'vue';
declare const props: {
    open: BooleanConstructor;
    disableTeleport: BooleanConstructor;
    mobileOnly: BooleanConstructor;
    placement: {
        type: PropType<"left" | "right">;
        default: string;
    };
    onClose: {
        type: PropType<VoidFunction>;
    };
};
export declare type IDrawerProps = ExtractFromProps<typeof props>;
export declare const Drawer: import("vue").DefineComponent<ExtractFromProps<{
    open: BooleanConstructor;
    disableTeleport: BooleanConstructor;
    mobileOnly: BooleanConstructor;
    placement: {
        type: PropType<"left" | "right">;
        default: string;
    };
    onClose: {
        type: PropType<VoidFunction>;
    };
}>, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractFromProps<{
    open: BooleanConstructor;
    disableTeleport: BooleanConstructor;
    mobileOnly: BooleanConstructor;
    placement: {
        type: PropType<"left" | "right">;
        default: string;
    };
    onClose: {
        type: PropType<VoidFunction>;
    };
}>>, {}>;
export {};
