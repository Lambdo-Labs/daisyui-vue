import { IColorType, ISize } from '@/shared/types/common';
export interface IBadgeProps {
    type?: IColorType | 'ghost';
    size?: ISize;
}
export declare const Badge: import("vue").DefineComponent<IBadgeProps, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<IBadgeProps>, {}>;
