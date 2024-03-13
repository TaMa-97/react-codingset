import React from 'react';
import styled from 'styled-components';
import theme from '@/theme';

const StyledFooter = styled.footer`
  background-color: #f1f4f7;
  text-align: center;
  padding: 10px;
`;

const StyledFooterCopy = styled.p`
  color: #8591b7;
  ${theme.fonts.fz(12)};
  font-weight: 700;
  letter-spacing: 0.2em;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterCopy>© 2024 HOGEHOGE COMPANY</StyledFooterCopy>
    </StyledFooter>
  );
}

export default Footer;
