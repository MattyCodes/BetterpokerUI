'use client';

import Card from '@/components/Card.tsx';
import { mergeDefaultClassWithProps } from '@/utils/index.ts';

export function ModalTitle(props) {
  return (
    <div
      className={ mergeDefaultClassWithProps('py-5 px-7 border-b border-solid border-foreground flex', props) }
    >
      <h2 className="text-xl font-bold">
        { props.children }
      </h2>
    </div>
  )
}

export function ModalActions(props) {
  return (
    <div
      className={ mergeDefaultClassWithProps('border-t border-solid border-foreground flex items-left py-5 px-7', props) }
    >
      { props.children }
    </div>
  )
}

export function ModalBody(props) {
  return (
    <div className={ mergeDefaultClassWithProps('p-5', props) }>
      { props.children }
    </div>
  )
}

export function Modal(props) {
  const modalClass = props.opened ? 'modal-container opened' : 'modal-container';
  const closeModal = props.close;

  return (
    <div className={ mergeDefaultClassWithProps(modalClass, props) }>
      <div className="modal-overlay" onClick={ () => closeModal() }></div>

      <Card className="modal-content">
        { props.children }
      </Card>
    </div>
  )
}

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Actions = ModalActions;

export default Modal;
