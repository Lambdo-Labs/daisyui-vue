export declare type IBreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export declare const defaultBreakPoints: IBreakPoint[];
export interface IBreakPoints {
    rule: Record<IBreakPoint, number>;
}
