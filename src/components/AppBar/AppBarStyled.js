import { Routes, Route, NavLink, useParams } from 'react-router-dom';
const { default: styled } = require('styled-components');

export const HeaderStyled = styled.header`
  height: 60px;
  width: 100%;
  background-color: blue;
`;

export const NavStyled = styled.nav`
padding: 10px;
  width: 100%;
  text-align: justify;
`;

export const NavLinkStyled = styled(NavLink)`
margin-right: 20px;
`
