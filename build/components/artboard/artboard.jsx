import { component } from '@/shared/styled';
import style from './style';
export const Artboard = component({
    name: 'Artboard',
    props: {
        phone: [String, Boolean],
        horizontal: Boolean,
    },
    setup: (props, { slots }) => {
        return () => (<div class={[
                'artboard artboard-demo',
                {
                    phone: ['', true].includes(props.phone),
                    [`phone-${props.phone}`]: !!props.phone && typeof props.phone === 'string',
                    horizontal: !!props.horizontal,
                },
            ]}>
          {slots.default?.()}
        </div>);
    },
}, style);
