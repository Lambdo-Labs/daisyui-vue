import { ComputedRef } from 'vue';
import { IMaybeRef } from '../types/common';
import { IBreakPoint } from '../types/theme';
export declare function useMedias(brks: IMaybeRef<IBreakPoint[]>, defaultMatched?: IBreakPoint): ComputedRef<IBreakPoint | null>;
export declare function useMedia(brk: IMaybeRef<IBreakPoint>): ComputedRef<boolean>;
export declare function useMediaParse<T extends IMaybeRef<Partial<Record<IBreakPoint | 'default', any>>>>(map: T): ComputedRef<T extends IMaybeRef<Partial<Record<IBreakPoint | "default", infer val>>> ? val : any>;
