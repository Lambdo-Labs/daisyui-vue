import { watch } from 'vue';
import { isBrowser } from '../utils';
export function useEventListener(getEl, type, cb) {
    if (!isBrowser)
        return;
    watch(getEl, (val, _, onInvalidate) => {
        if (!val)
            return;
        val?.addEventListener(type, cb);
        onInvalidate(() => {
            val?.removeEventListener(type, cb);
        });
    }, {
        immediate: true,
        flush: 'post',
    });
}
