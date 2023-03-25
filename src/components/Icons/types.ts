import * as AccessibleIconPrimitive from "@radix-ui/react-accessible-icon";

interface LucideIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export interface IconProps
  extends LucideIconProps,
    React.ComponentPropsWithoutRef<typeof AccessibleIconPrimitive.Root> {}
