import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

export const ScreenReaderOnly = ({...props}) => (
  <VisuallyHidden.Root>
    {props.children}
  </VisuallyHidden.Root>
);
