import styled from 'styled-components';

export const InputRow = styled.div`
  margin: 1em 0;
`

export const Input = styled.input`
  border: 0;
  box-shadow: 0;
  border-bottom: 1px solid ${props => props.theme.fontColorMain};
  outline: none;
  display: block;
  width: 100%;
  transition: border-bottom .3s ease;
  padding-bottom: 2px;

  &:focus {
      border-bottom: 2px solid ${props => props.theme.colorMain};
  }
`

export const Label = styled.label`
  color: ${props => props.theme.colorMain};
  display: block;
  font-size: 12px;
  margin-bottom: .5em;
  font-weight: ${props => props.theme.fontWeightMedium};
`
