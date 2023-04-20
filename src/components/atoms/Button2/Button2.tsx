import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';

const sizeMap = {
  small: {
    width: '60px',
    height: '24px',
    fontSize: '14px',
    padding: '0px 8px 0px 8px',
    borderRadius: '4px',
  },
  medium: {
    height: '32px',
    fontSize: '14px',
    padding: '5px 16px 5px 16px',
    borderRadius: '6px',
  },
  large: {
    height: '40px',
    fontSize: '16px',
    padding: '0px 16px 0px 16px',
    borderRadius: '8px',
  },
};

export const StyledButton = styled.button<Button2Props>`
  height: ${({ size }) => sizeMap[size].height};
  font-size: ${(props) => sizeMap[props.size].fontSize};
  border-radius: ${(props) => sizeMap[props.size].borderRadius};
  /* colorBgContainer */
  background: #ffffff;
  /* colorBorder */
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.02);
  padding: ${(props) => sizeMap[props.size].padding};
  color: rgba(0, 0, 0, 0.88);
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: #4096ff;
  }

  &:active:not(:disabled) {
    color: #0958d9;
    border: 1px solid #0958d9;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.02);
  }

  &:disabled {
    background: rgba(0, 0, 0, 0.04);
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
`;

export interface Button2Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  size: ButtonSize;
  disabled?: boolean;
}

export default function Button2({ size = 'medium', disabled = false, children, ...props }: Button2Props) {
  return (
    <StyledButton size={size} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
}
