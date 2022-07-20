import { ExtractFromProps, IColorType } from '@/shared/types/common';
import { HTMLAttributes, PropType } from 'vue';
import { IPopperProps } from '../popper';
declare const props: {
    type: {
        type: PropType<IColorType>;
        default: string;
    };
    content: {
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    placement: {
        type: PropType<import("@popperjs/core").Placement>;
        default: string;
    };
    disableTeleport: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
    onChange: {
        type: PropType<(v: boolean) => void>;
    };
    triggerAction: {
        type: PropType<import("../popper").ITriggerAction | import("../popper").ITriggerAction[]>;
        default: string;
    };
    outsideCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    escapeCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type ITooltipProps = ExtractFromProps<typeof props> & IPopperProps;
export declare const Tooltip: import("vue").DefineComponent<ExtractFromProps<{
    type: {
        type: PropType<IColorType>;
        default: string;
    };
    content: {
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    placement: {
        type: PropType<import("@popperjs/core").Placement>;
        default: string;
    };
    disableTeleport: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
    onChange: {
        type: PropType<(v: boolean) => void>;
    };
    triggerAction: {
        type: PropType<import("../popper").ITriggerAction | import("../popper").ITriggerAction[]>;
        default: string;
    };
    outsideCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    escapeCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
}> & ExtractFromProps<{
    content: {
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    placement: {
        type: PropType<import("@popperjs/core").Placement>;
        default: string;
    };
    disableTeleport: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
    onChange: {
        type: PropType<(v: boolean) => void>;
    };
    triggerAction: {
        type: PropType<import("../popper").ITriggerAction | import("../popper").ITriggerAction[]>;
        default: string;
    };
    outsideCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    escapeCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
}> & HTMLAttributes, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractFromProps<{
    type: {
        type: PropType<IColorType>;
        default: string;
    };
    content: {
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    placement: {
        type: PropType<import("@popperjs/core").Placement>;
        default: string;
    };
    disableTeleport: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
    onChange: {
        type: PropType<(v: boolean) => void>;
    };
    triggerAction: {
        type: PropType<import("../popper").ITriggerAction | import("../popper").ITriggerAction[]>;
        default: string;
    };
    outsideCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    escapeCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
}> & ExtractFromProps<{
    content: {
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    placement: {
        type: PropType<import("@popperjs/core").Placement>;
        default: string;
    };
    disableTeleport: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
    onChange: {
        type: PropType<(v: boolean) => void>;
    };
    triggerAction: {
        type: PropType<import("../popper").ITriggerAction | import("../popper").ITriggerAction[]>;
        default: string;
    };
    outsideCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    escapeCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
}> & HTMLAttributes>, {
    class: any;
    inlist: any;
    content: any;
}>;
export {};
