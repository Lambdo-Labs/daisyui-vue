import { componentV2 } from '@/shared/styled';
import { computed } from 'vue';
import styles from './style';
const props = {
    border: {
        type: Boolean,
        default: true,
    },
    type: {
        type: String,
        default: '',
    },
    size: {
        type: String,
        default: 'md',
    },
};
export const Input = componentV2({
    name: 'Input',
    props,
    setup: (props) => {
        const cls = computed(() => ({
            'dv-input input': true,
            'input-bordered': props.border,
            [`input-${props.type}`]: !!props.type,
            [`input-${props.size}`]: !!props.size,
        }));
        return () => <input type="text" class={cls.value}/>;
    },
}, styles);
