import { ISize } from '@/shared/types/common';
import { HTMLAttributes } from 'vue';
import { IButtonShape } from './button';
export interface IButtonGroupProps {
    size?: ISize;
    shape?: IButtonShape;
    outline?: boolean;
}
export declare const ButtonGroup: import("vue").DefineComponent<HTMLAttributes & IButtonGroupProps, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<HTMLAttributes & IButtonGroupProps>, {
    class: any;
    inlist: any;
}>;
