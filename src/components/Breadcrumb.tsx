import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from '../utils';
import { ChevronRight, MoreHorizontal } from "lucide-react"

export type BreadcrumbProps = React.ComponentPropsWithoutRef<"nav">
export type BreadcrumbListProps = React.ComponentPropsWithoutRef<"ol">
export type BreadcrumbItemProps = React.ComponentPropsWithoutRef<"li">
export type BreadcrumbLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  asChild?: boolean
}
export type BreadcrumbPageProps = React.ComponentPropsWithoutRef<"span">
export type BreadcrumbSeparatorProps = React.ComponentPropsWithoutRef<"li">
export type BreadcrumbEllipsisProps = React.ComponentPropsWithoutRef<"span">

export interface BreadcrumbComponents {
  List: React.ForwardRefExoticComponent<BreadcrumbListProps>;
  Item: React.ForwardRefExoticComponent<BreadcrumbItemProps>;
  Link: React.ForwardRefExoticComponent<BreadcrumbLinkProps>;
  Page: React.ForwardRefExoticComponent<BreadcrumbPageProps>;
  Separator: React.ForwardRefExoticComponent<BreadcrumbSeparatorProps>;
  Ellipsis: React.ForwardRefExoticComponent<BreadcrumbEllipsisProps>;
}

export type BreadcrumbType = React.ForwardRefExoticComponent<BreadcrumbProps> & BreadcrumbComponents;

const Breadcrumb = React.forwardRef<
  HTMLElement,
  BreadcrumbProps
>(({ children, ...props }, ref) => (
  <nav
    ref={ref}
    aria-label="breadcrumb"
    {...props}
  >
    {children}
  </nav>
)) as BreadcrumbType;
Breadcrumb.displayName = "Breadcrumb";

const List = React.forwardRef<
  HTMLOListElement,
  BreadcrumbListProps
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
));
List.displayName = "Breadcrumb.List";
Breadcrumb.List = List;

const Item = React.forwardRef<
  HTMLLIElement,
  BreadcrumbItemProps
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
  />
))
Item.displayName = "Breadcrumb.Item";
Breadcrumb.Item = Item;

const Link = React.forwardRef<
  HTMLAnchorElement,
  BreadcrumbLinkProps
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
})
Link.displayName = "Breadcrumb.Link";
Breadcrumb.Link = Link;

const Page = React.forwardRef<
  HTMLSpanElement,
  BreadcrumbPageProps
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
))
Page.displayName = "Breadcrumb.Page";
Breadcrumb.Page = Page;

const Separator = React.forwardRef<
  HTMLLIElement,
  BreadcrumbSeparatorProps
>(({ children, className, ...props }, ref) => (
  <li
    ref={ref}
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
))
Separator.displayName = "Breadcrumb.Separator";
Breadcrumb.Separator = Separator;

const Ellipsis = React.forwardRef<
  HTMLSpanElement,
  BreadcrumbEllipsisProps
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
));
Ellipsis.displayName = "Breadcrumb.Elipssis";
Breadcrumb.Ellipsis = Ellipsis;

export { Breadcrumb };
