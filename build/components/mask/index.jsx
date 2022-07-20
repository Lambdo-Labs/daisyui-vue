import { component } from '@/shared/styled';
import { cloneVNode } from 'vue';
import style from './style';
const props = {
    type: {
        type: String,
        default: 'squircle',
    },
};
export const Mask = component({
    name: 'Mask',
    props,
    setup: (props, { slots }) => {
        return () => {
            const child = slots.default?.()?.[0];
            return cloneVNode(child, {
                class: `dv-mask mask mask-${props.type}`,
            });
        };
    },
}, style);
