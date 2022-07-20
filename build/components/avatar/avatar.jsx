import { Mask } from '../mask';
import { componentV2 } from '@/shared/styled';
import { computed, inject } from 'vue';
import style from './style';
import { ctxAvatarGroupKey, getSizeValue } from './state';
import { isUndefined } from '@/shared/utils';
const props = {
    src: String,
    placeholder: {
        type: String,
        default: void 0,
    },
    size: {
        type: [Number, String],
        default: 'md',
    },
    type: { type: String, default: 'circle' },
    status: {
        type: String,
        default: '',
    },
};
export const Avatar = componentV2({
    name: 'Avatar',
    props,
    setup: (props, { slots }) => {
        const ctx = inject(ctxAvatarGroupKey, { size: '' });
        const merged = computed(() => ({
            size: ctx.size || props.size,
        }));
        const sizeStyle = computed(() => {
            const sizeValue = getSizeValue(merged.value.size);
            return {
                width: sizeValue,
                height: sizeValue,
            };
        });
        return () => {
            const children = slots.default?.();
            const renderPls = () => props.placeholder ? <span>{props.placeholder}</span> : null;
            const renderImg = () => (props.src ? <img src={props.src}/> : null);
            return (<div class={{
                    'dv-avatar avatar': true,
                    placeholder: !props.src && !isUndefined(props.placeholder),
                    'dv-avatar-circle': props.type === 'circle',
                    [props.status]: !!props.status,
                }}>
            <Mask type={props.type}>
              <div style={sizeStyle.value}>
                {children || renderImg() || renderPls()}
              </div>
            </Mask>
          </div>);
        };
    },
}, style);
