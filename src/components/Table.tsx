import * as React from 'react';
import { cn } from '../utils/cn';

interface TableComponents {
  Header: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLTableSectionElement> &
      React.RefAttributes<HTMLTableSectionElement>
  >;
  Body: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLTableSectionElement> &
      React.RefAttributes<HTMLTableSectionElement>
  >;
  Footer: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLTableSectionElement> &
      React.RefAttributes<HTMLTableSectionElement>
  >;
  Row: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLTableRowElement> &
      React.RefAttributes<HTMLTableRowElement>
  >;
  Head: React.ForwardRefExoticComponent<
    React.ThHTMLAttributes<HTMLTableCellElement> &
      React.RefAttributes<HTMLTableCellElement>
  >;
  Cell: React.ForwardRefExoticComponent<
    React.TdHTMLAttributes<HTMLTableCellElement> &
      React.RefAttributes<HTMLTableCellElement>
  >;
  Caption: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLTableCaptionElement> &
      React.RefAttributes<HTMLTableCaptionElement>
  >;
}

type TableType = React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLTableElement> & React.RefAttributes<HTMLTableElement>
> &
  TableComponents;

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, children, ...props }, forwardedRef) => (
  <div className="w-full overflow-auto">
    <table
      ref={forwardedRef}
      className={cn('w-full caption-bottom text-sm', className)}
      {...props}
    >
      {children}
    </table>
  </div>
)) as TableType;
Table.displayName = 'Table';

const Header = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, forwardedRef) => (
  <thead ref={forwardedRef} className={cn('[&_tr]:border-b', className)} {...props} />
));
Header.displayName = 'Table.Header';
Table.Header = Header;

const Body = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, forwardedRef) => (
  <tbody
    ref={forwardedRef}
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
));
Body.displayName = 'Table.Body';
Table.Body = Body;

const Footer = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, forwardedRef) => (
  <tfoot
    ref={forwardedRef}
    className={cn('bg-primary font-medium text-primary-foreground', className)}
    {...props}
  />
));
Footer.displayName = 'Table.Footer';
Table.Footer = Footer;

const Row = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, forwardedRef) => (
  <tr
    ref={forwardedRef}
    className={cn(
      'border-b transition-colors',
      'hover:bg-muted/50',
      'data-[state=selected]:bg-muted',
      className
    )}
    {...props}
  />
));
Row.displayName = 'Table.Row';
Table.Row = Row;

const Head = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, forwardedRef) => (
  <th
    ref={forwardedRef}
    className={cn(
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground',
      '[&:has([role=checkbox])]:pr-0',
      className
    )}
    {...props}
  />
));
Head.displayName = 'Table.Head';
Table.Head = Head;

const Cell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, forwardedRef) => (
  <td
    ref={forwardedRef}
    className={cn(
      'p-4 align-middle',
      '[&:has([role=checkbox])]:pr-0',
      className
    )}
    {...props}
  />
));
Cell.displayName = 'Table.Cell';
Table.Cell = Cell;

const Caption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, forwardedRef) => (
  <caption
    ref={forwardedRef}
    className={cn('mt-4 text-sm text-muted-foreground', className)}
    {...props}
  />
));
Caption.displayName = 'Table.Caption';
Table.Caption = Caption;

export { Table };
