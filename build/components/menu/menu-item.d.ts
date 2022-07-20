import { HTMLAttributes } from 'vue';
export interface IMuneItemProps {
    /**
     * is menu title
     */
    asTitle?: boolean;
    disabled?: boolean;
    bordered?: boolean;
    hoverBordered?: boolean;
    /**
     * 仅在子元素为 a 标签时生效
     */
    active?: boolean;
    childWrapper?: 'a' | 'span' | false;
}
export declare const MenuItem: import("vue").DefineComponent<IMuneItemProps & HTMLAttributes, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<IMuneItemProps & HTMLAttributes>, {
    class: any;
    inlist: any;
}>;
