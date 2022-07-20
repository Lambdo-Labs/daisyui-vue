import { component } from '@/shared/styled';
import style from './style';
export const Navbar = component({
    name: 'Navbar',
    setup: (_, { slots }) => {
        return () => <div class="navbar">{slots.default?.()}</div>;
    },
}, style);
export const NavbarStart = component({
    name: 'NavbarStart',
    setup: (_, { slots }) => {
        return () => <div class="navbar-start">{slots.default?.()}</div>;
    },
}, style);
export const NavbarCenter = component({
    name: 'NavbarCenter',
    setup: (_, { slots }) => {
        return () => <div class="navbar-center">{slots.default?.()}</div>;
    },
}, style);
export const NavbarEnd = component({
    name: 'NavbarEnd',
    setup: (_, { slots }) => {
        return () => <div class="navbar-end">{slots.default?.()}</div>;
    },
}, style);
