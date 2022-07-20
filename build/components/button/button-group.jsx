import { computed, provide } from 'vue';
import { ctxKey } from './state';
import { component } from '@/shared/styled';
import style from './style';
const boolProps = {
    outline: Boolean,
};
export const ButtonGroup = component({
    name: 'ButtonGroup',
    props: boolProps,
    setup: (props, { slots, attrs }) => {
        const ctxVal = computed(() => ({
            size: attrs.size || 'md',
            shape: attrs.shape || 'defalut',
            outline: props.outline,
        }));
        provide(ctxKey, ctxVal);
        return () => (<div class="dv-btn-group btn-group">{slots.default?.()}</div>);
    },
}, style);
