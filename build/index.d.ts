export * from './components';
export * from './icons';
export * from './shared/ctx';
export { install as default, installTheme } from './install';
export declare const version: string;
import { useMedia, useMediaParse, useMedias } from './shared/hooks/useMedia';
/**
 * @private
 */
export declare const _: {
    useMedia: typeof useMedia;
    useMedias: typeof useMedias;
    useMediaParse: typeof useMediaParse;
};
