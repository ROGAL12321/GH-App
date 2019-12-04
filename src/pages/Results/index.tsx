import React from 'react';
import useGithub from 'hooks/useGithub';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from "react-router-dom";
import { Image } from 'rebass'

import { H2, H3, Tag } from 'styles/typo';

import { ListItem, ListItemContainer, Description } from './Results.styled';
import { ButtonContainer, PrimaryButton } from 'styles/buttons';
import { IconBack } from 'styles/icons';

import ArrowIcon from 'assets/arrow.svg';

import { GET_REPOSITORIES } from 'queries'

import { SEARCH_URL, DETAILS_URL } from 'consts/urls';
import Loader from 'common/Loader';

const Results: React.FC<RouteComponentProps> = ({ history }): JSX.Element => {
  const { searchName } = useGithub();
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { name: searchName },
  });

  if(loading) return <Loader />;
  if(error) history.push(SEARCH_URL);

  const { search: { nodes } } = data

  if(nodes.length === 0) history.push(SEARCH_URL)

  return (
    <>
      <H2 centered>
        Github Repos
        <Link to={SEARCH_URL}><IconBack src={ArrowIcon} alt="Back" /></Link>
      </H2>
      <ul>
        {
          nodes.map(({ id, name, description, primaryLanguage, owner, stargazers }) => (
            <ListItem key={id}>
              <Image
                src={owner.avatarUrl}
                sx={{
                  width: '100px',
                  height: '100px',
                  margin: 'auto',
                  borderRadius: 50,
                }}
              />
              <ListItemContainer>
                <H3>{name} ({owner.login}) ({stargazers.totalCount} stars)</H3>
                <Description>
                  {description}
                </Description>
                {primaryLanguage && <Tag> #{primaryLanguage.name} </Tag>}
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
