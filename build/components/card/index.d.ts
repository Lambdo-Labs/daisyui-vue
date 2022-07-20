import { ExtractFromProps } from '@/shared/types/common';
import { HTMLAttributes } from 'vue';
declare const cardProps: {
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    side: {
        type: BooleanConstructor;
        default: boolean;
    };
    imageFull: {
        type: BooleanConstructor;
        default: boolean;
    };
    compact: {
        type: BooleanConstructor;
        default: boolean;
    };
    glass: {
        type: BooleanConstructor;
        default: boolean;
    };
    image: StringConstructor;
    title: StringConstructor;
    description: StringConstructor;
};
export declare type ICardProps = ExtractFromProps<typeof cardProps>;
export declare const Card: import("vue").DefineComponent<ExtractFromProps<{
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    side: {
        type: BooleanConstructor;
        default: boolean;
    };
    imageFull: {
        type: BooleanConstructor;
        default: boolean;
    };
    compact: {
        type: BooleanConstructor;
        default: boolean;
    };
    glass: {
        type: BooleanConstructor;
        default: boolean;
    };
    image: StringConstructor;
    title: StringConstructor;
    description: StringConstructor;
}> & HTMLAttributes, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractFromProps<{
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    side: {
        type: BooleanConstructor;
        default: boolean;
    };
    imageFull: {
        type: BooleanConstructor;
        default: boolean;
    };
    compact: {
        type: BooleanConstructor;
        default: boolean;
    };
    glass: {
        type: BooleanConstructor;
        default: boolean;
    };
    image: StringConstructor;
    title: StringConstructor;
    description: StringConstructor;
}> & HTMLAttributes>, {
    class: any;
    inlist: any;
}>;
declare const cardImageProps: {
    src: StringConstructor;
};
export declare type ICardImageProps = ExtractFromProps<typeof cardImageProps>;
export declare const CardImage: import("vue").DefineComponent<ExtractFromProps<{
    src: StringConstructor;
}> & HTMLAttributes, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractFromProps<{
    src: StringConstructor;
}> & HTMLAttributes>, {
    class: any;
    inlist: any;
}>;
declare const cardBodyProps: {};
export declare type ICardBodyProps = ExtractFromProps<typeof cardBodyProps>;
export declare const CardBody: import("vue").DefineComponent<ExtractFromProps<{}> & HTMLAttributes, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractFromProps<{}> & HTMLAttributes>, {
    class: any;
    inlist: any;
}>;
declare const cardTitleProps: {
    component: {
        type: StringConstructor;
        default: string;
    };
};
export declare type ICardTitleProps = ExtractFromProps<typeof cardTitleProps>;
export declare const CardTitle: import("vue").DefineComponent<ExtractFromProps<{
    component: {
        type: StringConstructor;
        default: string;
    };
}> & HTMLAttributes, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractFromProps<{
    component: {
        type: StringConstructor;
        default: string;
    };
}> & HTMLAttributes>, {
    class: any;
    inlist: any;
}>;
declare const cardActionsProps: {};
export declare type ICardActionsProps = ExtractFromProps<typeof cardActionsProps>;
export declare const CardActions: import("vue").DefineComponent<ExtractFromProps<{}> & HTMLAttributes, any, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractFromProps<{}> & HTMLAttributes>, {
    class: any;
    inlist: any;
}>;
export {};
