import React from 'react';

export interface InputProps {
  label?: string;
}

const Input = ({ label }: InputProps): React.ReactElement => (
  <button type="button">{label}</button>
);

Input.displayName = 'Input';
Input.defaultProps = {
  label: 'I SHOULD BE NOT BE HERE',
};

export default Input;
