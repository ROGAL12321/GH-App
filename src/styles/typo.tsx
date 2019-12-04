import styled from 'styled-components';

interface IProps {
  centered?: boolean,
  secondary?: boolean,
  border?: boolean
}

export const H1 = styled.h1`
  font-weight: ${props => props.theme.fontWeightBold};
  text-decoration: none;
  color: ${props => props.theme.fontColorSecondary};
  word-break: break-all;
`

export const H2 = styled.h2<IProps>`
  color: ${(props) => props.secondary ? props.theme.colorSecondary : props.theme.colorMain};
  text-align: ${(props) => props.centered ? 'center' : 'left'};
  font-size: ${props => props.theme.fontSizeLarge};
  font-weight: ${props => props.theme.fontWeightMedium};
  border-bottom: 1px solid #E0E0E0;
  padding-bottom: 16px;
  word-break: break-all;
`

  export const H3 = styled.h3`
  font-size: ${props => props.theme.fontSizeLarge};
  color: ${props => props.theme.fontColorMain};
  word-break: break-all;
`

export const Error = styled.small`
  color: ${props => props.theme.colorSecondary};
  font-size: 12px;
`

export const Tag = styled.p`
  margin: 10px 0;
  color: ${props => props.theme.colorMain};
  font-size: 12px;
`
