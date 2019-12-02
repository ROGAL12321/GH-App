import styled from 'styled-components';

export const Header = styled.header`
  background: ${props => props.theme.colorMain};
  font-size: ${props => props.theme.fontSizeLarge};
  min-height: 64px;
  box-sizing: border-box;
  padding: 1.25em;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
