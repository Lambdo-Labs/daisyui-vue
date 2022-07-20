import { componentV2 } from '@/shared/styled';
import { computed, h } from 'vue';
import style from './style';
const cardProps = {
    bordered: {
        type: Boolean,
        default: true,
    },
    side: {
        type: Boolean,
        default: false,
    },
    imageFull: {
        type: Boolean,
        default: false,
    },
    compact: {
        type: Boolean,
        default: false,
    },
    glass: {
        type: Boolean,
        default: false,
    },
    image: String,
    title: String,
    description: String,
};
export const Card = componentV2({
    name: 'Card',
    props: cardProps,
    setup: (props, { slots }) => {
        const cls = computed(() => ({
            'dv-card': true,
            card: true,
            'card-bordered': props.bordered,
            'image-full': props.imageFull,
            'card-compact': props.compact,
            'card-side': props.side,
            glass: props.glass,
        }));
        return () => (<div class={cls.value}>
          {slots.default?.() || (<>
              {props.image && <CardImage src={props.image}/>}
              <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <p>{props.description}</p>
                <CardActions>{slots.actions?.()}</CardActions>
              </CardBody>
            </>)}
        </div>);
    },
}, style);
const cardImageProps = {
    src: String,
};
export const CardImage = componentV2({
    name: 'CardImage',
    props: cardImageProps,
    setup: (props, { slots }) => {
        return () => {
            return (<figure class="dv-card-image">
            {slots.default?.() || <img src={props.src}/>}
          </figure>);
        };
    },
}, style);
const cardBodyProps = {};
export const CardBody = componentV2({
    name: 'CardBody',
    props: cardBodyProps,
    setup: (props, { slots }) => {
        return () => (<div class="dv-card-body card-body">{slots.default?.()}</div>);
    },
}, style);
const cardTitleProps = {
    component: {
        type: String,
        default: 'h2',
    },
};
export const CardTitle = componentV2({
    name: 'CardTitle',
    props: cardTitleProps,
    setup: (props, { slots }) => {
        return () => h(props.component || 'h2', { class: 'dv-card-title card-title' }, slots.default?.());
    },
}, style);
const cardActionsProps = {};
export const CardActions = componentV2({
    name: 'CardActions',
    props: cardActionsProps,
    setup: (props, { slots }) => {
        return () => (<div class="dv-card-actions card-actions">{slots.default?.()}</div>);
    },
}, style);
