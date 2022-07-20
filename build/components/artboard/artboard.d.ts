import { HTMLAttributes } from 'vue';
export interface IArtboardProps {
    phone?: boolean | '1' | '2' | '3' | '4' | '5' | '6';
    horizontal?: boolean;
}
export declare const Artboard: import("vue").DefineComponent<IArtboardProps & HTMLAttributes, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<IArtboardProps & HTMLAttributes>, {
    class: any;
    inlist: any;
}>;
