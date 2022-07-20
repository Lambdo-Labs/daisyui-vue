import { ISize } from '../../shared/types/common';
import { IButtonShape } from './button';
export declare const ctxKey: unique symbol;
export interface ICtx {
    size: ISize;
    shape: IButtonShape;
    outline: boolean;
}
