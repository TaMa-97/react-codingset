import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #f1f4f7;
  text-align: center;
  padding: 20px;

  & > a {
    display: block;
    font-weight: 700;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>
        <Link to="/">HOGEHOGE COMPANY</Link>
      </h1>
    </StyledHeader>
  );
}

export default Header;
