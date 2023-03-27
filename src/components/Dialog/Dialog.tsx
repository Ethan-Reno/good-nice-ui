import React, {
  forwardRef,
  ElementRef,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";
import {
  Root,
  Trigger,
  Portal,
  DialogPortalProps,
  Overlay,
  Content,
  Close,
  Title,
} from "@radix-ui/react-dialog";
import { cn } from "../../utils/cn";
import { XIcon } from "..";
import { ScreenReaderOnly } from "utils/ScreenReaderOnly";

const DialogRoot = Root

const DialogTrigger = Trigger

const DialogTitle = Title

const DialogPortal = ({
  className,
  children,
  ...props
}: DialogPortalProps) => (
  <Portal className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {children}
    </div>
  </Portal>
)

const DialogOverlay = forwardRef<
  ElementRef<typeof Overlay>,
  ComponentPropsWithoutRef<typeof Overlay>
>(({ className, children, ...props }, ref) => (
  <Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out",
      className
    )}
    {...props}
    ref={ref}
  />
))

const DialogContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Content
    ref={ref}
    className={cn(
      "relative z-50 rounded-sm bg-white p-6 animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10",
      "dark:bg-zinc-800",
      className
    )}
    {...props}
  >
    {children}
    <Close
      className="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100 dark:focus:ring-zinc-400 dark:focus:ring-offset-zinc-900 dark:data-[state=open]:bg-zinc-800"
    >
      <XIcon label='Close Modal' />
    </Close>
  </Content>
))

export interface DialogProps {
  trigger: ReactNode;
  content: ReactNode;
  accessibleTitle: string;
}

const Dialog = ({
  trigger,
  content,
  accessibleTitle,
}: DialogProps) => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
      <DialogOverlay />
        <ScreenReaderOnly asChild>
          <DialogTitle>{accessibleTitle}</DialogTitle>
        </ScreenReaderOnly>
        <DialogContent>{content}</DialogContent>
      </DialogPortal>
    </DialogRoot>
  )
};

Dialog.displayName = 'Dialog';

export default Dialog;
