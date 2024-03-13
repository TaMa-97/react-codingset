import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '@/theme';
import icon_arrow01_color02 from '@/images/common/icon_arrow01_color02.svg';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  background: #f1f4f7;
  display: flex;
  justify-content: center;
  padding: 30px 30px 25px;
  margin-top: auto;
`;
const StyledLink = styled(Link)`
  position: relative;
  color: #4a4a4a;
  font-weight: 700;
  letter-spacing: 0.2em;
  ${theme.fonts.fz(14)};
  text-decoration: none;

  &::after {
    content: '';
    background: url(${icon_arrow01_color02}) no-repeat center;
    background-size: 7px 12px;
    width: 7px;
    height: 12px;
    position: absolute;
    left: -20px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;

function BackToTop() {
  return (
    <StyledWrapper>
      <StyledLink to="/">TOPに戻る</StyledLink>
    </StyledWrapper>
  );
}

export default BackToTop;
