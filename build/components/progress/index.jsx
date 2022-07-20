import { componentV2 } from '@/shared/styled';
import { computed } from 'vue';
import style from './style';
const props = {
    type: String,
    value: {
        type: Number,
        default: 0,
    },
    max: {
        type: Number,
        default: 100,
    },
};
export const Progress = componentV2({
    name: 'Progress',
    props,
    setup: (props) => {
        const cls = computed(() => [
            'dv-progress progress',
            {
                [`progress-${props.type}`]: !!props.type,
            },
        ]);
        return () => (<progress class={cls.value} value={props.value} max={props.max}/>);
    },
}, style);
