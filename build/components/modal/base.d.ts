import { ExtractFromProps } from '@/shared/types/common';
import { PropType, TransitionProps } from 'vue';
export declare const modalBaseProps: {
    disableTeleport: {
        type: BooleanConstructor;
        default: boolean;
    };
    container: {
        type: PropType<string | Element | (() => Element | string)>;
        default: string;
    };
    open: BooleanConstructor;
    hideMask: BooleanConstructor;
    maskCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    onMaskClick: PropType<(e: MouseEvent) => void>;
    escapeCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    onEscKeyDown: PropType<(e: KeyboardEvent) => void>;
    onClose: PropType<(e: MouseEvent | KeyboardEvent, trigger: 'esc' | 'mask') => void>;
    custom: {
        default: string;
    };
    destroyOnClose: BooleanConstructor;
    transitionProps: {
        type: PropType<Partial<TransitionProps>>;
    };
};
export declare type IModalBaseProps = ExtractFromProps<typeof modalBaseProps>;
export declare const ModalBase: import("vue").DefineComponent<ExtractFromProps<{
    disableTeleport: {
        type: BooleanConstructor;
        default: boolean;
    };
    container: {
        type: PropType<string | Element | (() => Element | string)>;
        default: string;
    };
    open: BooleanConstructor;
    hideMask: BooleanConstructor;
    maskCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    onMaskClick: PropType<(e: MouseEvent) => void>;
    escapeCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    onEscKeyDown: PropType<(e: KeyboardEvent) => void>;
    onClose: PropType<(e: MouseEvent | KeyboardEvent, trigger: 'esc' | 'mask') => void>;
    custom: {
        default: string;
    };
    destroyOnClose: BooleanConstructor;
    transitionProps: {
        type: PropType<Partial<TransitionProps>>;
    };
}>, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractFromProps<{
    disableTeleport: {
        type: BooleanConstructor;
        default: boolean;
    };
    container: {
        type: PropType<string | Element | (() => Element | string)>;
        default: string;
    };
    open: BooleanConstructor;
    hideMask: BooleanConstructor;
    maskCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    onMaskClick: PropType<(e: MouseEvent) => void>;
    escapeCloseable: {
        type: BooleanConstructor;
        default: boolean;
    };
    onEscKeyDown: PropType<(e: KeyboardEvent) => void>;
    onClose: PropType<(e: MouseEvent | KeyboardEvent, trigger: 'esc' | 'mask') => void>;
    custom: {
        default: string;
    };
    destroyOnClose: BooleanConstructor;
    transitionProps: {
        type: PropType<Partial<TransitionProps>>;
    };
}>>, {
    custom: any;
}>;
