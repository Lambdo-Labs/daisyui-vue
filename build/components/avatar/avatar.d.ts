import { IMaskType } from '../mask';
import { ExtractFromProps } from '@/shared/types/common';
import { HTMLAttributes, PropType } from 'vue';
declare const props: {
    src: StringConstructor;
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    size: {
        type: PropType<string | number>;
        default: string;
    };
    type: {
        type: PropType<IMaskType>;
        default: string;
    };
    status: {
        type: PropType<"online" | "offline">;
        default: string;
    };
};
export declare type IAvatarProps = ExtractFromProps<typeof props>;
export declare const Avatar: import("vue").DefineComponent<ExtractFromProps<{
    src: StringConstructor;
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    size: {
        type: PropType<string | number>;
        default: string;
    };
    type: {
        type: PropType<IMaskType>;
        default: string;
    };
    status: {
        type: PropType<"online" | "offline">;
        default: string;
    };
}> & HTMLAttributes, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractFromProps<{
    src: StringConstructor;
    placeholder: {
        type: StringConstructor;
        default: any;
    };
    size: {
        type: PropType<string | number>;
        default: string;
    };
    type: {
        type: PropType<IMaskType>;
        default: string;
    };
    status: {
        type: PropType<"online" | "offline">;
        default: string;
    };
}> & HTMLAttributes>, {
    class: any;
    inlist: any;
}>;
export {};
