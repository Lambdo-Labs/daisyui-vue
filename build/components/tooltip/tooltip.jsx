import { componentV2 } from '@/shared/styled';
import { popperProps, Popper } from '../popper';
import style from './style';
const props = {
    ...popperProps,
    type: {
        type: String,
        default: 'netural',
    },
};
export const Tooltip = componentV2({
    name: 'Tooltip',
    props,
    setup: (props, { attrs, slots }) => {
        return () => (<Popper class={[
                'dv-tooltip',
                attrs.class,
                {
                    [`dv-tooltip-${props.type}`]: !!props.type,
                },
            ]} {...props}>
          {slots}
        </Popper>);
    },
}, style);
