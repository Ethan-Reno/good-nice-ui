import * as AccessibleIconPrimitive from "@radix-ui/react-accessible-icon";
import { VariantProps } from "class-variance-authority";

interface LucideIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export interface IconProps
  extends LucideIconProps,
    VariantProps<typeof AccessibleIconPrimitive.Root> {}
