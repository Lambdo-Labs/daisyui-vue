import { IconClose } from '@/icons';
import { componentV2 } from '@/shared/styled';
import { Button } from '../button';
import style from './style/widgets.less';
// title ----------------------------------------------------------------------------
export const modalTitleProps = {
    closable: {
        type: Boolean,
        default: true,
    },
    onClose: Function,
};
export const ModalTitle = componentV2({
    name: 'ModalTitle',
    props: modalTitleProps,
    setup: (props, { slots }) => {
        return () => (<div class="dv-modal-title">
          <h3>{slots.default?.()}</h3>
          {props.closable ? (<Button shape="circle" size="sm" class="dv-modal-title-close" onClick={props.onClose}>
              <IconClose />
            </Button>) : null}
        </div>);
    },
}, [style]);
// body ----------------------------------------------------------------------------
export const modalBodyProps = {};
export const ModalBody = componentV2({
    name: 'ModalBody',
    props: modalBodyProps,
    setup: (props, { slots }) => {
        return () => <div class="dv-modal-body">{slots.default?.()}</div>;
    },
}, [style]);
// action ----------------------------------------------------------------------------
export const modalActionProps = {};
export const ModalAction = componentV2({
    name: 'ModalAction',
    props: modalActionProps,
    setup: (props, { slots }) => {
        return () => <div class="dv-modal-action">{slots.default?.()}</div>;
    },
}, [style]);
