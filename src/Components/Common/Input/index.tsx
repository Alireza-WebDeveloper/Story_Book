import React from "react";
import styled from "styled-components";

// Type
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange(value: string): void;
  inputClassName?: string;
}

// ** Styled Component
const StyledInput = styled.input`
  border: var(--primary) 1px solid;
  padding: 0.3rem;
  border-radius: 0.3rem;
  ::placeholder {
    text-transform: capitalize;
  }
`;

// ?? Component
const Input: React.FC<InputProps> = ({
  value,
  handleChange,
  inputClassName,
  ...props
}) => {
  return (
    <StyledInput
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      className={`inputClassName ${inputClassName}`}
      {...props}
    />
  );
};

export default Input;
