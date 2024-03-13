import React from 'react';
import styled from 'styled-components';
import theme from '@/theme';
import icon_arrow01 from '@/images/common/icon_arrow01.svg';

const StyledButton = styled.a<{ size?: 'small' | 'default' }>`
  position: relative;
  display: block;
  text-decoration: none;
  text-align: center;
  background-image: linear-gradient(
    180deg,
    rgba(245, 131, 36, 1),
    rgba(245, 186, 36, 1)
  );
  border-radius: 9999px;
  color: white;
  font-weight: 700;
  letter-spacing: 0.2em;
  padding: 15px 40px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  ${theme.bp.tabletPmin`
    ${(props) => (props.size === 'small' ? `${theme.fonts.fz(18)};` : `${theme.fonts.fz(22)};`)};
  `}
  ${theme.bp.tabletP`
    ${(props) => (props.size === 'small' ? `${theme.fonts.fz(16)};` : `${theme.fonts.fz(20)};`)};
  `}

  &::after {
    content: '';
    background: url(${icon_arrow01}) no-repeat center;
    background-size: 7px 12px;
    width: 7px;
    height: 12px;
    position: absolute;
    right: 24px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;

export interface SampleButtonProps {
  id?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  size?: 'small' | 'default';
}

function SampleButton({
  id,
  href,
  onClick = () => {},
  children,
  size = 'default',
}: SampleButtonProps) {
  return (
    <StyledButton id={id} href={href} onClick={onClick} size={size}>
      {children}
    </StyledButton>
  );
}

export default SampleButton;
