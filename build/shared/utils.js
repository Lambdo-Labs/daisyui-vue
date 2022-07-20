export const isBrowser = typeof window !== 'undefined';
export function cssUnit(unit) {
    if (typeof unit === 'number') {
        return (unit || 0) + 'px';
    }
    return unit || '';
}
export function isBool(v) {
    return typeof v === 'boolean';
}
export function isUndefined(v) {
    return typeof v === 'undefined';
}
export function isString(v) {
    return typeof v === 'string';
}
/**
 * 从 props、slots 中解析 render 方法的内容
 * @param key
 * @param props
 * @param slots
 * @param renderArgs
 * @returns
 */
export function getRenderResult(key, props, slots, renderArgs = () => void 0) {
    return (slots[key]?.(renderArgs()) ||
        (typeof props[key] === 'function' ? props[key](renderArgs()) : props[key]));
}
export function debounce(fn, timeout) {
    let updateTimer = null;
    const result = (...args) => {
        clearTimeout(updateTimer);
        updateTimer = setTimeout(() => {
            fn(...args);
        }, timeout);
    };
    return result;
}
