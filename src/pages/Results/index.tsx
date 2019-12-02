import React from 'react';
import useGithub from 'hooks/useGithub';
import { Link } from 'react-router-dom';

import { H2 } from 'styles/typo';

import { ListItem, ListItemContainer, Icon, Title, Description } from './Results.styled';
import { ButtonContainer, PrimaryButton } from 'styles/buttons';
import { IconBack } from 'styles/icons';

import ArrowIcon from 'assets/arrow.svg';

import { SEARCH_URL, DETAILS_URL } from 'consts/urls';

const Results = ({ history }): JSX.Element => {
  const { results } = useGithub();

  if(results.length === 0) history.push('/')

  return (
    <>
      <H2 centered>
        Github Repos
        <Link to={SEARCH_URL}><IconBack src={ArrowIcon} alt="Back" /></Link>
      </H2>
      <ul>
        {
          results.map(({ id, name, description, owner }) => (
            <ListItem key={id}>
              <Icon src={owner.avatar_url} alt="Recipe"/>
              <ListItemContainer>
                <Title>{name} ({owner.login})</Title>
                <Description>
                  {description}
                </Description>
                <ButtonContainer position="right">
                  <Link to={`${DETAILS_URL}/${id}`}>
                    <PrimaryButton> Show more </PrimaryButton>
                  </Link>
                </ButtonContainer>
              </ListItemContainer>
            </ListItem>
          ))
        }
      </ul>
    </>
  )
}

export default Results
