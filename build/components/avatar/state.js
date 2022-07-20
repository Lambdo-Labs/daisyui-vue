import { cssUnit } from '@/shared/utils';
export const ctxAvatarGroupKey = Symbol('AvatarGroup');
export const sizeMap = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 64,
};
export function getSizeValue(size) {
    return cssUnit(sizeMap[size] || size);
}
