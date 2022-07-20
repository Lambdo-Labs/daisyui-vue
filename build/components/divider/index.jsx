import { componentV2 } from '@/shared/styled';
import { computed } from 'vue';
import style from './style';
const props = {
    horizontal: {
        type: Boolean,
        default: false,
    },
};
export const Divider = componentV2({
    name: 'Divider',
    props,
    setup: (props, { slots }) => {
        const cls = computed(() => ({
            divider: true,
            'dv-divider': true,
            'divider-horizontal': props.horizontal,
        }));
        return () => <div class={cls.value}>{slots.default?.()}</div>;
    },
}, style);
