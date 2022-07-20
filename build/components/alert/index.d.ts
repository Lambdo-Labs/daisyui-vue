import { IStateColor } from '@/shared/types/common';
import { HTMLAttributes } from 'vue';
export interface IAlertProps {
    type?: IStateColor;
}
export declare const Alert: import("vue").DefineComponent<IAlertProps & HTMLAttributes, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<IAlertProps & HTMLAttributes>, {
    class: any;
    inlist: any;
}>;
