import styled from 'styled-components';
import { theme } from '../../commonStyle/Thema';
export const Btn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts.monospace};
  font-size: ${theme.fontSizes.m};
  padding: ${`${theme.space[3]}px`};
  background-color: ${theme.colors.background};
  color: ${theme.colors.black};
  border-radius: ${theme.radii.md};
  cursor: pointer;
  transition: scale 250ms;
  :hover {
    scale: 1.1;
  }
`;
