import * as React from "react"
import {
  Root,
  Image,
  Fallback,
  AvatarProps as AvatarRootProps,
  AvatarImageProps,
  AvatarFallbackProps,
} from "@radix-ui/react-avatar"
import { cn } from "utils/cn"

const AvatarRoot = (({ className, ...props }: AvatarRootProps) => (
  <Root
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))

const AvatarImage = (({ className, ...props }: AvatarImageProps) => (
  <Image
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))

const AvatarFallback = (({ className, ...props }: AvatarFallbackProps) => (
  <Fallback
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-600",
      className
    )}
    {...props}
  />
))

export interface AvatarProps {
  src: string;
  alt: string;
  fallback: string;
  fallbackDelayMs?: number;
}

const Avatar = ({ src, alt, fallback, fallbackDelayMs }: AvatarProps) => {
  return (
    <AvatarRoot>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback delayMs={fallbackDelayMs}>
        {fallback}
      </AvatarFallback>
    </AvatarRoot>
  )
}

Avatar.displayName = 'Avatar';

export default Avatar;
