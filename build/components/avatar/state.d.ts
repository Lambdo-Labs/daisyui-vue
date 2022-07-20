import { ISize } from '@/shared/types/common';
export declare const ctxAvatarGroupKey: unique symbol;
export declare const sizeMap: Record<ISize, number>;
export interface IAvatarGroupCtx {
    size: string | number;
}
export declare function getSizeValue(size: string | number): string;
