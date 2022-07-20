import { ExtractFromProps } from '@/shared/types/common';
import { PropType } from 'vue';
export declare const modalTitleProps: {
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    onClose: PropType<(e: MouseEvent) => void>;
};
export declare type IModalTitleProps = ExtractFromProps<typeof modalTitleProps>;
export declare const ModalTitle: import("vue").DefineComponent<ExtractFromProps<{
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    onClose: PropType<(e: MouseEvent) => void>;
}>, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractFromProps<{
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    onClose: PropType<(e: MouseEvent) => void>;
}>>, {}>;
export declare const modalBodyProps: {};
export declare type IModalBodyProps = ExtractFromProps<typeof modalBodyProps>;
export declare const ModalBody: import("vue").DefineComponent<ExtractFromProps<{}>, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
export declare const modalActionProps: {};
export declare type IModalActionProps = ExtractFromProps<typeof modalActionProps>;
export declare const ModalAction: import("vue").DefineComponent<ExtractFromProps<{}>, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
