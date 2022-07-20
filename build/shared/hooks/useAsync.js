import { reactive } from 'vue';
export function useAsync(fn, options = {}) {
    const { immediate = false, defaultValue } = { ...options };
    const state = reactive({
        loading: immediate,
        data: defaultValue ?? null,
        error: null,
    });
    async function call(...args) {
        state.error = false;
        state.loading = true;
        try {
            state.data = (await fn(...args)) ?? defaultValue;
            state.loading = false;
            state.error = false;
            return state.data;
        }
        catch (error) {
            state.data = defaultValue;
            state.error = error || new Error('Call async fn error.');
            state.loading = false;
            throw state.error;
        }
    }
    return [state, call];
}
