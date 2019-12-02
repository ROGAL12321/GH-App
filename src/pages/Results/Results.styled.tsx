import styled from 'styled-components';

export const ListItem = styled.li`
  text-decoration: none;
  display: flex;
  padding: 1em 0;
`

export const Icon = styled.img`
  display: block;
  margin: auto;
  width: 50px;
`

export const Title = styled.h3`
  font-size: ${props => props.theme.fontSizeLarge};
  color: ${props => props.theme.fontColorMain};
`

export const Description = styled.p`
  font-size: ${props => props.theme.fontSizeSmall};
  color: #666;
  font-weight:  ${props => props.theme.fontWeightMedium};
`

export const ListItemContainer = styled.div`
  padding: 5px 0;
  margin-left: 2em;
  width: 80%;
`

export const ListItemButton = styled.small`
  float: right;
  color: ${props => props.theme.fontColorMain};
  font-size: ${props => props.theme.fontSizeSmall};
  text-decoration: none;
`
