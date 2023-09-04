import * as React from 'react';
import { cn } from '../utils';

// //eslint-disable-next-line
// interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

interface CardComponents {
  Header: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
  >;
  Title: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLHeadingElement> &
      React.RefAttributes<HTMLHeadingElement>
  >;
  Description: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLParagraphElement> &
      React.RefAttributes<HTMLParagraphElement>
  >;
  Content: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
  >;
  Footer: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
  >;
}

type CardType = React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
> &
  CardComponents;

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-surface text-foreground shadow-sm',
      className
    )}
    {...props}
  >
    {children}
  </div>
)) as CardType;
Card.displayName = 'Card';

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col p-6', className)}
    {...props}
  />
));
Card.Header = Header;
Header.displayName = 'Card.Header';

const Title = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
Card.Title = Title;
Title.displayName = 'Card.Title';

const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
Card.Description = Description;
Description.displayName = 'Card.Description';

const Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
Card.Content = Content;
Content.displayName = 'CardContent';

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(' flex items-center p-6 pt-0', className)}
    {...props}
  />
));
Card.Footer = Footer;
Footer.displayName = 'CardFooter';

export { Card };
