import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from '../utils';
import { ChevronRight, MoreHorizontal } from "lucide-react"

interface BreadcrumbComponents {
  List: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLOListElement> &
    React.RefAttributes<HTMLOListElement>
  >;
  Item: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLLIElement> &
    React.RefAttributes<HTMLLIElement>
  >;
  Link: React.ForwardRefExoticComponent<
    React.AnchorHTMLAttributes<HTMLAnchorElement> &
    React.RefAttributes<HTMLAnchorElement>
  >;
  Page: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLSpanElement> &
    React.RefAttributes<HTMLSpanElement>
  >;
  Separator: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLLIElement> &
    React.RefAttributes<HTMLLIElement>
  >;
  Ellipsis: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLSpanElement> &
    React.RefAttributes<HTMLSpanElement>
  >;
}

type BreadcrumbType = React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>
> & BreadcrumbComponents;

type Breadcrumb = React.ForwardRefExoticComponent<
  HTMLElement & React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode
  }
> & BreadcrumbComponents;

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode
  }
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
  React.ComponentPropsWithoutRef<'ol'>
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
  React.ComponentPropsWithoutRef<'li'>
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
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { 
      asChild?: boolean;
  }
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
  React.ComponentPropsWithoutRef<'span'>
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
  React.ComponentPropsWithoutRef<'li'>
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
  React.ComponentPropsWithoutRef<'span'>
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
