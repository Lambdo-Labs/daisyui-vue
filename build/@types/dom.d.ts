export declare type InputChangeEvent = Omit<Event, 'target'> & {
    target: HTMLInputElement;
};
