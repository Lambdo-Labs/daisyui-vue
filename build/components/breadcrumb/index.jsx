import { component } from '@/shared/styled';
import style from './style';
export const Breadcrumb = component({
    name: 'Breadcrumb',
    setup: (_, { slots }) => {
        return () => (<div class="dv-breadcrumbs breadcrumbs">
          <ul>{slots.default?.()}</ul>
        </div>);
    },
}, style);
export const BreadcrumbItem = component({
    name: 'BreadcrumbItem',
    inheritAttrs: false,
    setup: (_, { attrs, slots }) => {
        return () => (<li>
        <a {...attrs}>{slots.default?.()}</a>
      </li>);
    },
});
