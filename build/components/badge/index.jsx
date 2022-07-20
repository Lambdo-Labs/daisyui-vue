import { component } from '@/shared/styled';
import { computed } from 'vue';
import style from './style';
const props = {
    outline: { type: Boolean, default: void 0 },
};
export const Badge = component({
    name: 'Badge',
    props,
    setup: (props, { attrs, slots }) => {
        const size = computed(() => attrs.size || 'md');
        const outline = computed(() => props.outline || false);
        return () => (<div class={{
                'dv-badge badge': true,
                [`badge-${attrs.type}`]: attrs.type,
                [`badge-${size.value}`]: size.value,
                [`badge-outline`]: outline.value,
            }}>
          {slots.default?.()}
        </div>);
    },
}, style);
