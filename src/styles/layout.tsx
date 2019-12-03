import styled from 'styled-components';

const Layout = styled.div`
  box-shadow:
    0 2px 4px -1px rgba(0,0,0,.2),
    0 4px 5px 0 rgba(0,0,0,.14),
    0 1px 10px 0 rgba(0,0,0,.12);
  color: ${props => props.theme.fontColorMain};
  padding: 1.5em;
  max-width: 1024px;
  box-sizing: border-box;
  margin: 40px auto;
  background: ${props => props.theme.fontColorSecondary};
`

export default Layout;
