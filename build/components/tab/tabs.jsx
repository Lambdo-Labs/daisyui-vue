import { computed, Fragment, inject, provide, } from 'vue';
import { component } from '@/shared/styled';
import style from './style';
const ctx = Symbol('tabs');
const tabType = Symbol('TabType');
const tabsProps = {
    type: {
        type: String,
    },
    size: {
        type: String,
        default: 'md',
    },
    value: String,
};
export const Tabs = component({
    name: 'Tabs',
    props: tabsProps,
    inheritAttrs: false,
    emits: ['update:value'],
    setup: (props, { slots, emit, attrs }) => {
        const onChange = (name) => {
            emit('update:value', name);
        };
        const ctxVal = computed(() => ({
            type: props.type,
            size: props.size,
            currentName: props.value,
            onChange,
        }));
        provide(ctx, ctxVal);
        const getPaneInstanceFromSlot = (vnode, list = []) => {
            Array.from((vnode || [])).forEach((node) => {
                const type = node.type;
                if (type && type[tabType]) {
                    list.push(node.props);
                }
                else if (type === Fragment || type === 'template') {
                    getPaneInstanceFromSlot(node.children, list);
                }
            });
            return list;
        };
        const tabHeadCls = computed(() => [
            'dv-tab tab',
            `tab-${props.type}`,
            `tab-${props.size}`,
        ]);
        return () => {
            const vns = slots.default?.() || [];
            const tabPropsList = getPaneInstanceFromSlot(vns);
            return (<>
            <div {...attrs} class={{
                    'dv-tabs tabs': true,
                    'tabs-boxed': props.type === 'boxed',
                }}>
              {tabPropsList.map((p) => (<a class={[
                        tabHeadCls.value,
                        {
                            'tab-active': props.value === p.name,
                        },
                    ]} onClick={() => {
                        onChange(p.name);
                    }}>
                  {p.title}
                </a>))}
              {props.type === 'lifted' ? (<div class="dv-tabs__lifted-item"/>) : null}
            </div>
            {vns}
          </>);
        };
    },
}, style);
export const Tab = component({
    name: 'Tab',
    [tabType]: true,
    props: {
        title: String,
        name: String,
    },
    setup: (props, { slots }) => {
        const ctxVal = inject(ctx);
        return () => (<div class={[
                'dv-tab-content',
                {
                    'dv-tab-content--hidden': props.name !== ctxVal.value.currentName,
                },
            ]}>
          {slots.default?.()}
        </div>);
    },
}, style);
