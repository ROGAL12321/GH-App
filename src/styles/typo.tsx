import styled from 'styled-components';

interface IProps {
  centered?: boolean
}

export const H1 = styled.h1`
  font-weight: ${props => props.theme.fontWeightBold};
  text-decoration: none;
  color: ${props => props.theme.fontColorSecondary};
`

export const H2 = styled.h2`
  color: ${props => props.theme.colorMain};
  text-align: ${(props: IProps) => props.centered ? 'center' : 'left'};
  font-size: ${props => props.theme.fontSizeLarge};
  font-weight: ${props => props.theme.fontWeightMedium};
  border-bottom: 1px solid #E0E0E0;
  padding-bottom: 16px;
`
