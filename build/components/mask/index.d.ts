export declare type IMaskType = 'squircle' | 'heart' | 'hexagon' | 'hexagon-2' | 'decagon' | 'pentagon' | 'diamond' | 'square' | 'circle' | 'parallelogram' | 'parallelogram-2' | 'parallelogram-3' | 'parallelogram-4' | 'star' | 'star-2' | 'triangle' | 'triangle-2' | 'triangle-3' | 'triangle-4';
export interface IMaskProps {
    type?: IMaskType;
}
export declare const Mask: import("vue").DefineComponent<IMaskProps, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<IMaskProps>, {}>;
