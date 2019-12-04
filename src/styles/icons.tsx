import styled from 'styled-components';

interface IProps {
  big?: any
}

export const Icon = styled.img<IProps>`
  display: block;
  /* margin: auto; */
  width: 100%;
  max-width: ${props => props.big ? '100px' : '50px'};
`

export const IconBack = styled.img`
  float: left;
`
