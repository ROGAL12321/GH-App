import React from 'react';
import useGithub from 'hooks/useGithub';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from "react-router-dom";

import { H2, H3 } from 'styles/typo';

import { ListItem, ListItemContainer, Description } from './Results.styled';
import { ButtonContainer, PrimaryButton } from 'styles/buttons';
import { Icon, IconBack } from 'styles/icons';

import ArrowIcon from 'assets/arrow.svg';

import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from 'queries'

import { SEARCH_URL, DETAILS_URL } from 'consts/urls';

const Results: React.FC<RouteComponentProps> = ({ history }): JSX.Element | null => {
  const { searchName } = useGithub();
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { name: searchName },
  });

  if(loading) return null;

  if(error) {
    history.push(SEARCH_URL);
    return null;
  }

  const { search: { nodes } } = data

  return (
    <>
      <H2 centered>
        Github Repos
        <Link to={SEARCH_URL}><IconBack src={ArrowIcon} alt="Back" /></Link>
      </H2>
      <ul>
        {
          nodes.map(({ id, name, primaryLanguage, owner, stargazers }) => (
            <ListItem key={id}>
              <Icon src={owner.avatarUrl} alt="Owner"/>
              <ListItemContainer>
                <H3>{name} ({owner.login}) ({stargazers.totalCount} stars)</H3>
                <Description>
                  {primaryLanguage && `#${primaryLanguage.name}`}
                </Description>
                <ButtonContainer position="right">
                  <Link to={`${DETAILS_URL}/${owner.login}/${name}`}>
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
