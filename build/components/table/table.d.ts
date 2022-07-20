import { HTMLAttributes } from 'vue';
export interface ITableColumn<T = unknown> {
    title?: string | (() => any);
    dataIndex?: string;
    key?: string;
    fixed?: 'left' | 'right';
    width?: string | number;
    render?: (text: string, record: T, rowIndex: number) => any;
}
export interface ITableProps<T = any> {
    zebra?: boolean;
    compact?: boolean;
    columns?: ITableColumn[];
    dataSource?: T[];
}
export declare const Table: import("vue").DefineComponent<HTMLAttributes, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<HTMLAttributes>, {
    class: any;
    inlist: any;
}>;
