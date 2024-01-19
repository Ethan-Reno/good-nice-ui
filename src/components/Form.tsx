import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  useFormContext,
} from 'react-hook-form';
import { cn } from '../utils/cn';
import { Label as InternalLabel } from './Label';

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

interface FormComponents {
  Field: <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
  >(
    props: ControllerProps<TFieldValues, TName>
  ) => React.ReactElement | null;
  FieldSet: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLFieldSetElement> &
      React.RefAttributes<HTMLFieldSetElement>
  >;
  Item: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
  >;
  Label: React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
      React.RefAttributes<React.ElementRef<typeof LabelPrimitive.Root>>
  >;
  Control: React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<typeof Slot> &
      React.RefAttributes<React.ElementRef<typeof Slot>>
  >;
  Content: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
  >;
  Description: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLParagraphElement> &
      React.RefAttributes<HTMLParagraphElement>
  >;
  Message: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLParagraphElement> &
      React.RefAttributes<HTMLParagraphElement>
  >;
}

type FormType = React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLFormElement> & React.RefAttributes<HTMLFormElement>
> &
  FormComponents;

const Form = React.forwardRef<
  HTMLFormElement,
  React.HTMLAttributes<HTMLFormElement>
>(({ children, ...props }, ref) => (
  <form ref={ref} {...props}>
    {children}
  </form>
)) as FormType;
Form.displayName = 'Form';

const Field = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};
Field.displayName = 'Form.Field';
Form.Field = Field;

const FieldSet = React.forwardRef<
  HTMLFieldSetElement,
  React.HTMLAttributes<HTMLFieldSetElement>
>(({ children, ...props }, ref) => {
  return (
    <fieldset ref={ref} {...props}>
      {children}
    </fieldset>
  );
});
FieldSet.displayName = 'Form.FieldSet';
Form.FieldSet = FieldSet;

const Item = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();
  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={className} {...props} />
    </FormItemContext.Provider>
  );
});
Item.displayName = 'Form.Item';
Form.Item = Item;

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();
  return (
    <InternalLabel
      ref={ref}
      className={cn(error && 'text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
Label.displayName = 'Form.Label';
Form.Label = Label;

const Control = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();
  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
Control.displayName = 'Form.Control';
Form.Control = Control;

const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
});
Description.displayName = 'Form.Description';
Form.Description = Description;

const Message = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;
  if (!body) {
    return null;
  }
  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn('text-sm font-medium text-destructive', className)}
      {...props}
    >
      {body}
    </p>
  );
});
Message.displayName = 'Form.Message';
Form.Message = Message;

export { useFormField, Form };
