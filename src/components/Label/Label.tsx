import React, { forwardRef, ElementRef, ComponentPropsWithoutRef } from "react"
import { Root } from "@radix-ui/react-label";

const LabelRoot = Root

const Label = forwardRef<
  ElementRef<typeof LabelRoot>,
  ComponentPropsWithoutRef<typeof LabelRoot>
>(({ className, ...props }, ref) => (
  <LabelRoot
    ref={ref}
    className={"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"}
    {...props}
  />
))

Label.displayName = 'Label';
 
export default Label;
