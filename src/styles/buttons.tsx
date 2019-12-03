import styled from 'styled-components';

interface IProps {
  position?: string
}

export const ButtonContainer = styled.div`
  margin: 1em 1.5em;
  text-align: ${(props: IProps) => props.position || 'center'};
`

export const PrimaryButton = styled.button`
  box-shadow:
    0 2px 2px 0 rgba(0,0,0,.14),
    0 3px 1px -2px rgba(0,0,0,.2),
    0 1px 5px 0 rgba(0,0,0,.12);
  background: ${props => props.theme.colorSecondary};
  color: ${props => props.theme.fontColorSecondary};
  border: 0;
  border-radius: 2px;
  font-size: ${props => props.theme.fontSizeSmall};
  padding: 6px 1em;
  font-weight: ${props => props.theme.fontWeightBold};
`
