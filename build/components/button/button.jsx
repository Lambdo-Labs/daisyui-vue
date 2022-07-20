import { computed, createVNode, inject, ref, } from 'vue';
import { ctxKey } from './state';
import { component } from '@/shared/styled';
import style from './style';
const props = {
    block: Boolean,
    wide: Boolean,
    disabled: Boolean,
    outline: Boolean,
    active: Boolean,
    loading: Boolean,
    noAnimation: Boolean,
    onClick: Function,
};
export const Button = component({
    name: 'Button',
    props: {
        block: Boolean,
        wide: Boolean,
        disabled: Boolean,
        outline: Boolean,
        active: Boolean,
        loading: Boolean,
        noAnimation: Boolean,
        onClick: Function,
    },
    setup: (props, { slots, attrs }) => {
        const ctxVal = inject(ctxKey, null);
        const size = computed(() => attrs.size || ctxVal?.value.size || 'md');
        const shape = computed(() => attrs.shape || ctxVal?.value.shape || 'default');
        const outline = computed(() => ctxVal?.value.outline || props.outline);
        const componentType = computed(() => attrs.component || 'button');
        const clickLoading = ref(false);
        const finalLoading = computed(() => props.loading || clickLoading.value);
        const cls = computed(() => {
            return [
                'dv-btn btn',
                attrs.type === 'glass'
                    ? 'glass'
                    : !!attrs.type
                        ? `btn-${attrs.type}`
                        : '',
                {
                    [`btn-${size.value}`]: true,
                    [`btn-${shape.value}`]: true,
                    'btn-block': props.block,
                    'btn-wide': props.wide,
                    loading: finalLoading.value,
                    'btn-disabled': props.disabled,
                    'btn-active': props.active,
                    'btn-outline': outline.value,
                    'no-animation': props.noAnimation,
                },
            ];
        });
        const handleOnClick = async (e) => {
            if (clickLoading.value || typeof props.onClick !== 'function')
                return;
            clickLoading.value = true;
            try {
                await props.onClick(e);
            }
            catch (error) { }
            clickLoading.value = false;
        };
        const showContent = computed(() => {
            if (['circle', 'square'].includes(attrs.shape)) {
                return !finalLoading.value;
            }
            return true;
        });
        return () => createVNode(componentType.value, {
            disabled: props.disabled || void 0,
            class: cls.value,
            onClick: handleOnClick,
        }, [showContent.value ? slots.default?.() : null]);
    },
}, style);
