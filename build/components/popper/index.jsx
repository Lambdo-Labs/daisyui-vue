import { useActiveChange } from '@/shared/hooks/useActiveChange';
import { componentV2 } from '@/shared/styled';
import { debounce, getRenderResult, isString, isUndefined, } from '@/shared/utils';
import { createPopper, preventOverflow, } from '@popperjs/core';
import { computed, nextTick, reactive, ref, Teleport, vShow, watch, withDirectives, } from 'vue';
import style from './style/index.less';
export const popperProps = {
    content: {
        default: '',
    },
    open: {
        type: Boolean,
        default: void 0,
    },
    placement: {
        type: String,
        default: 'auto',
    },
    disableTeleport: {
        type: Boolean,
        default: true,
    },
    disabled: Boolean,
    onChange: {
        type: Function,
    },
    triggerAction: {
        type: [String, Array],
        default: 'hover',
    },
    outsideCloseable: {
        type: Boolean,
        default: true,
    },
    escapeCloseable: {
        type: Boolean,
        default: true,
    },
    hideArrow: {
        type: Boolean,
        default: false,
    },
};
export const Popper = componentV2({
    name: 'Popper',
    props: popperProps,
    inheritAttrs: false,
    setup: (props, { attrs, slots }) => {
        const state = reactive({
            popperIns: null,
            isOpen: props.open,
            isFocus: false,
            /** 是否触发过 */
            hasTriggered: false,
            /** 子元素是否可见 */
            childElVisibility: true,
        });
        let enterTimer = null;
        let leaveTimer = null;
        const finalShow = computed(() => props.disabled
            ? false
            : isUndefined(props.open)
                ? state.isOpen
                : !!props.open);
        const finalActions = computed(() => {
            if (!props.triggerAction)
                return ['hover'];
            if (isString(props.triggerAction))
                return [props.triggerAction];
            if (Array.isArray(props.triggerAction))
                return props.triggerAction;
        });
        const hasAction = (acts) => Array.isArray(acts)
            ? acts.some((act) => finalActions.value.includes(act))
            : finalActions.value.includes(acts);
        const handleClose = () => {
            change(false);
        };
        const childRef = ref(null);
        const popperNode = ref(null);
        const getClidEl = () => childRef.value?.el;
        const update = (v) => {
            let funWrap = (fn) => fn();
            if (!state.hasTriggered) {
                state.hasTriggered = true;
                funWrap = nextTick;
            }
            funWrap(() => {
                v && createIns();
                props.onChange?.(v);
                state.isOpen = v;
                nextTick(() => {
                    state.popperIns?.update();
                });
            });
        };
        const change = (v) => {
            if (v !== finalShow.value) {
                update(v);
            }
        };
        const createIns = () => {
            destroy();
            const el = getClidEl();
            if (!el)
                return;
            state.popperIns = createPopper(el, popperNode.value, {
                placement: props.placement,
                modifiers: [preventOverflow],
                strategy: 'fixed',
            });
        };
        const destroy = () => {
            if (state.popperIns) {
                state.popperIns.destroy();
                state.popperIns = null;
            }
        };
        useActiveChange(() => {
            const handleClickAway = (event) => {
                const el = getClidEl();
                if (!el) {
                    return;
                }
                if (!['click', 'contextMenu'].some((t) => finalActions.value.includes(t))) {
                    return;
                }
                const doc = (el && el.ownerDocument) || document;
                if (doc.documentElement &&
                    doc.documentElement.contains(event.target) &&
                    !el.contains(event.target) && // 子节点不包含event.target
                    !popperNode.value?.contains(event.target) // Popper节点不包含event.target
                ) {
                    // onClickAway && onClickAway(event);
                    if (props.outsideCloseable) {
                        handleClose();
                    }
                }
            };
            const handleKeyDown = (e) => {
                if (hasAction(['click', 'contextMenu', 'focus']) &&
                    e.key === 'Escape' &&
                    props.escapeCloseable) {
                    getClidEl()?.blur();
                    change(false);
                }
            };
            if (typeof document === 'undefined')
                return;
            // TODO 封装事件 hooks
            document.addEventListener('click', handleClickAway);
            document.addEventListener('contextmenu', handleClickAway);
            document.addEventListener('keydown', handleKeyDown);
            return () => {
                document.removeEventListener('click', handleClickAway);
                document.removeEventListener('contextmenu', handleClickAway);
                document.removeEventListener('keydown', handleKeyDown);
            };
        });
        watch(childRef, (_, _2, onInvalidate) => {
            const unFns = [];
            const on = (name, fn, bindBothChildAndPopper = false) => {
                const getEls = () => {
                    const els = [getClidEl()];
                    bindBothChildAndPopper && els.push(popperNode.value);
                    return els;
                };
                getEls().forEach((el) => {
                    el?.addEventListener(name, fn);
                });
                const un = () => {
                    getEls().forEach((el) => {
                        el?.removeEventListener(name, fn);
                    });
                };
                unFns.push(un);
                return un;
            };
            const enterDelay = 0;
            const leaveDelay = 0;
            const handleEnter = () => {
                clearTimeout(enterTimer);
                clearTimeout(leaveTimer);
                enterTimer = setTimeout(() => {
                    change(true);
                }, enterDelay);
            };
            const handleLeave = () => {
                clearTimeout(enterTimer);
                clearTimeout(leaveTimer);
                leaveTimer = setTimeout(() => {
                    change(false);
                }, leaveDelay);
            };
            // click
            on('click', () => {
                hasAction('click') && change(true);
            });
            // hover
            on('mouseenter', () => hasAction('hover') && handleEnter(), true);
            on('mouseleave', () => hasAction('hover') && handleLeave(), true);
            // focus
            on('focus', () => {
                if (!hasAction('focus'))
                    return;
                state.isFocus = true;
                handleEnter();
            }, true);
            on('blur', () => {
                if (!hasAction('focus'))
                    return;
                state.isFocus = false;
                handleLeave();
            }, true);
            // contextMenu
            on('contextmenu', (e) => {
                if (!hasAction('contextMenu'))
                    return;
                e.preventDefault();
            });
            on('mouseup', (e) => {
                // 右键点击
                if (hasAction('contextMenu') && e.button === 2) {
                    change(true);
                }
            });
            onInvalidate(() => {
                unFns.forEach((un) => un());
            });
        }, {
            immediate: true,
            flush: 'post',
        });
        watch([() => props.placement, () => getClidEl()], () => {
            if (!finalShow.value || !state.hasTriggered)
                return;
            update(true);
        }, {
            flush: 'post',
        });
        useElementStatusChange(() => getClidEl(), (visibilityChange) => {
            if (typeof visibilityChange === 'boolean') {
                state.childElVisibility = visibilityChange;
                visibilityChange && nextTick(() => state.popperIns?.update());
                return;
            }
            if (state.isOpen) {
                state.popperIns?.update();
            }
        });
        useActiveChange(() => {
            finalShow.value && update(true);
            return () => {
                destroy();
            };
        });
        return () => {
            const children = slots.default?.();
            const content = getRenderResult('content', props, slots);
            childRef.value = children?.[0];
            return (<>
            {children}
            {state.hasTriggered ? (<Teleport to="body" disabled={props.disableTeleport}>
                {withDirectives(<div {...attrs} class={['dv-popper-node']} style={props.hideArrow ? '--popper-tail: 0px' : ''} ref={popperNode}>
                    <div class="popper-container">
                      <div class="popper-arrow"/>
                      {content}
                    </div>
                  </div>, [[vShow, finalShow.value && state.childElVisibility]])}
              </Teleport>) : null}
          </>);
        };
    },
}, [style]);
// TODO maybe some problem
function useElementStatusChange(getVal, cb) {
    watch(() => getVal(), (el, _, onInvalidate) => {
        if (!el)
            return;
        const debounceUpdate = debounce(cb, 233);
        const eventHandler = () => debounceUpdate();
        const mutation = () => {
            if (typeof MutationObserver === 'undefined')
                return;
            const observer = new MutationObserver((e) => {
                debounceUpdate();
            });
            observer.observe(el, {
                attributes: true,
                attributeFilter: ['style'],
            });
            return () => {
                observer.disconnect();
            };
        };
        const intersection = () => {
            if (typeof IntersectionObserver === 'undefined')
                return;
            const observer = new IntersectionObserver(([e]) => {
                debounceUpdate(e.intersectionRatio > 0);
            }, {
                threshold: [0],
            });
            observer.observe(el);
            return () => observer.disconnect();
        };
        const mutationRes = mutation();
        const intersectionRes = intersection();
        el.addEventListener('animationend', eventHandler);
        el.addEventListener('transitionrun', eventHandler);
        onInvalidate(() => {
            mutationRes?.();
            intersectionRes?.();
            el.removeEventListener('animationend', eventHandler);
            el.removeEventListener('transitionrun', eventHandler);
        });
    }, {
        flush: 'post',
    });
}
