import { component } from '@/shared/styled';
import { computed } from 'vue';
import style from './style';
const props = {
    compact: Boolean,
    horizontal: Boolean,
};
export const Menu = component({
    name: 'Menu',
    props: props,
    setup: (props, { slots }) => {
        const cls = computed(() => [
            'menu',
            {
                compact: props.compact,
                horizontal: props.horizontal,
            },
        ]);
        return () => <ul class={cls.value}>{slots.default?.()}</ul>;
    },
}, style);
