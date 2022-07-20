export declare function useEventListener<E extends {
    addEventListener: any;
    removeEventListener: any;
}, K extends keyof DocumentEventMap>(getEl: () => E, type: K, cb: (this: E, ev: DocumentEventMap[K]) => any): void;
