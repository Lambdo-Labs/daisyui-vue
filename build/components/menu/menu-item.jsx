import { component } from '@/shared/styled';
import { createVNode, computed } from 'vue';
import style from './style';
const props = {
    asTitle: Boolean,
    disabled: Boolean,
    bordered: Boolean,
    hoverBordered: Boolean,
    active: Boolean,
};
export const MenuItem = component({
    name: 'MenuItem',
    props: props,
    setup: (props, { slots, attrs }) => {
        const cls = computed(() => [
            {
                'menu-title': props.asTitle,
                disabled: props.disabled,
                bordered: props.bordered,
                'hover-bordered': props.hoverBordered,
            },
        ]);
        const wrapper = computed(() => {
            if (!('childWrapper' in attrs)) {
                return props.asTitle ? 'span' : 'a';
            }
            if (attrs.childWrapper === false) {
                return null;
            }
            return attrs.childWrapper;
        });
        return () => {
            const children = slots.default?.();
            return (<li class={cls.value}>
            {wrapper.value
                    ? createVNode(wrapper.value, {
                        class: {
                            active: props.active,
                        },
                    }, children)
                    : children}
          </li>);
        };
    },
}, style);
