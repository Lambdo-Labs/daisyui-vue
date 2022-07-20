import { inject, reactive } from 'vue';
import { createStyle } from './styled';
export const CONTEXT_SYMBOL = Symbol('context');
function createThemRules() {
    return {
        breakpoints: {
            rule: {
                xs: 0,
                sm: 640,
                md: 768,
                lg: 1024,
                xl: 1280,
                '2xl': 1536,
            },
        },
    };
}
export function createTheme() {
    const style = createStyle();
    const ctx = reactive({
        ...createThemRules(),
        style,
    });
    return ctx;
}
const builtInCtx = createTheme();
export function useTheme() {
    return inject(CONTEXT_SYMBOL, builtInCtx);
}
