import { componentV2 } from '@/shared/styled';
import { isUndefined } from '@/shared/utils';
import { computed, nextTick, reactive } from 'vue';
import styles from './style';
export const toggleProps = {
    checked: {
        type: Boolean,
        default: void 0,
    },
    onChange: {
        type: Function,
        default: void 0,
    },
    type: {
        type: String,
        default: 'netural',
    },
    size: {
        type: String,
        default: 'md',
    },
};
export const Toggle = componentV2({
    name: 'Toggle',
    props: toggleProps,
    setup: (props) => {
        const state = reactive({
            checked: props.checked,
        });
        const finalVal = computed(() => isUndefined(props.checked) ? state.checked : props.checked);
        const cls = computed(() => [
            'dv-toggle toggle',
            {
                [`toggle-${props.type}`]: props.type,
                [`toggle-${props.size}`]: props.size,
            },
        ]);
        return () => {
            return (<input type="checkbox" class={cls.value} checked={finalVal.value} onChange={(e) => {
                    const newVal = !finalVal.value;
                    state.checked = newVal;
                    props.onChange?.(e);
                    nextTick(() => {
                        // force sync with finalVal
                        e.target.checked = finalVal.value;
                    });
                }}/>);
        };
    },
}, styles);
