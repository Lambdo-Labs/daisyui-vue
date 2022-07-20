import { componentV2 } from '@/shared/styled';
import { cloneVNode, computed, provide, reactive, toRef, } from 'vue';
import { ctxAvatarGroupKey, sizeMap } from './state';
import style from './style';
const props = {
    size: {
        type: [Number, String],
        default: 'md',
    },
    gap: {
        type: [Number, String],
        default: void 0,
    },
};
export const AvatrGroup = componentV2({
    name: 'AvatarGroup',
    props,
    setup: (props, { slots }) => {
        provide(ctxAvatarGroupKey, reactive({
            size: toRef(props, 'size'),
        }));
        const gapValue = computed(() => {
            const res = props.gap || sizeMap[props.size] / 2 || 24;
            return typeof res === 'number' ? `-${res}px` : '-' + res;
        });
        return () => (<div class="dv-avatar-group avatar-group">
          {(slots.default?.() || []).map((v, i) => cloneVNode(v, {
                style: i === 0
                    ? {}
                    : {
                        marginLeft: gapValue.value,
                    },
            }))}
        </div>);
    },
}, style);
