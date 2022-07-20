import { ExtractFromProps } from '@/shared/types/common';
import { Placement } from '@popperjs/core';
import { HTMLAttributes, PropType } from 'vue';
export declare type ITriggerAction = 'contextMenu' | 'hover' | 'click' | 'focus';
export declare const popperProps: {
    content: {
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    placement: {
        type: PropType<Placement>;
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
        type: PropType<ITriggerAction | ITriggerAction[]>;
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
export declare type IPopperProps = ExtractFromProps<typeof popperProps>;
export declare const Popper: import("vue").DefineComponent<ExtractFromProps<{
    content: {
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    placement: {
        type: PropType<Placement>;
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
        type: PropType<ITriggerAction | ITriggerAction[]>;
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
}> & Omit<HTMLAttributes, "onChange">, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractFromProps<{
    content: {
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: any;
    };
    placement: {
        type: PropType<Placement>;
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
        type: PropType<ITriggerAction | ITriggerAction[]>;
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
}> & Omit<HTMLAttributes, "onChange">>, {
    class: any;
    inlist: any;
    content: any;
}>;
