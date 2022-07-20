import { IStyle } from './styled';
import { IBreakPoints } from './types/theme';
export declare const CONTEXT_SYMBOL: unique symbol;
export declare function createTheme(): ITheme;
export interface ITheme {
    breakpoints: IBreakPoints;
    style: IStyle;
}
export declare function useTheme(): ITheme;
