import React from 'react';

export interface ButtonProps {
  label?: string;
}

const Button = ({ label }: ButtonProps): React.ReactElement => (
  <button type="button">{label}</button>
);

Button.displayName = 'Button';
Button.defaultProps = {
  label: 'I SHOULD BE HERE',
};

export default Button;
