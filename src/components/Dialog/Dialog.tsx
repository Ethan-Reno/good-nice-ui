import React, { ReactNode, Dispatch, SetStateAction } from 'react';
import {
  Root,
  Trigger,
  Portal,
  DialogPortalProps,
  Overlay,
  DialogOverlayProps,
  Content,
  DialogContentProps,
  Close,
  Title,
} from '@radix-ui/react-dialog';
import { clsx } from 'clsx';
import { XIcon } from '../Icons';
import { ScreenReaderOnly } from '../../utils/ScreenReaderOnly';

const DialogRoot = Root;

const DialogTrigger = Trigger;

const DialogPortal = ({ className, children, ...props }: DialogPortalProps) => (
  <Portal className={clsx(className)} {...props}>
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {children}
    </div>
  </Portal>
);

const DialogOverlay = ({
  className,
  children,
  ...props
}: DialogOverlayProps) => (
  <Overlay
    className={clsx(
      'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100',
      'data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out',
      className
    )}
    {...props}
  />
);

const DialogContent = ({
  className,
  title,
  children,
  ...props
}: DialogContentProps) => (
  <Content
    className={clsx(
      'relative max-w-screen-sm sm:max-w-screen-md w-full z-50 rounded-md bg-white p-6 animate-in',
      'dark:bg-zinc-800',
      'data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10',
      className
    )}
    {...props}
  >
    <div className='flex justify-between items-start'>
      <Title>{title}</Title>
      <Close
        className='ml-3 rounded-md transition-opacity hover:opacity-100 focus-styles disabled:pointer-events-none text-zinc-500 dark:text-zinc-400'
      >
        <XIcon label="Close Modal" />
      </Close>
    </div>
    {children}
  </Content>
);

export interface DialogProps {
  trigger: ReactNode;
  title: string;
  content: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Dialog = ({
  trigger,
  title,
  content,
  isOpen,
  setIsOpen,
}: DialogProps) => {
  return (
    <DialogRoot open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent title={title}>{content}</DialogContent>
      </DialogPortal>
    </DialogRoot>
  );
};
