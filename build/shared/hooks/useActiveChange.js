import { onActivated, onBeforeUnmount, onDeactivated, onMounted } from 'vue';
export function useActiveChange(fn) {
    let clean;
    onMounted(() => {
        clean = fn();
    });
    onBeforeUnmount(() => {
        clean && clean();
    });
    onActivated(() => {
        clean = fn();
    });
    onDeactivated(() => {
        clean && clean();
    });
}
