import { componentV2 } from '@/shared/styled';
import { computed } from 'vue';
import styles from './style';
const props = {
    type: {
        type: String,
        default: 'neutral',
    },
    enableHoverClass: {
        type: Boolean,
        default: false,
    },
};
export const Link = componentV2({
    name: 'Link',
    props,
    setup: (props, { slots }) => {
        const cls = computed(() => [
            'dv-link link',
            {
                [`link-${props.type}`]: !!props.type,
                'link-hover': props.enableHoverClass,
            },
        ]);
        return () => <a class={cls.value}>{slots.default?.()}</a>;
    },
}, styles);
