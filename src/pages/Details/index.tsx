import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import {
  Box,
  Image
} from 'rebass'

import { H2 } from 'styles/typo';
import { IconBack } from 'styles/icons';
import { DetailItem, Detail } from './Details.styled';

import ArrowIcon from 'assets/arrow.svg';

import Loader from 'common/Loader';
import { RESULTS_URL, SEARCH_URL } from 'consts/urls';

import { REPOSITORY_INFO } from 'queries'

const DetailComponent: React.FC = ({ history, match }): JSX.Element | null => {
  const { loading, error, data } = useQuery(REPOSITORY_INFO, {
    variables: {
      name: match.params.name,
      owner: match.params.owner
    },
  });

  if(!match.params || !match.params.name || !match.params.owner || error) {
    history.push(SEARCH_URL);
    return null;
  }

  if (loading) return <Loader />

  const { repository: { owner, name, stargazers, primaryLanguage } } = data;

  return <>
    <H2 centered>
      Repository Detail
      <Link to={RESULTS_URL}><IconBack src={ArrowIcon} alt="Back" /></Link>
    </H2>
    <Box mt={4}>
      <H2 secondary>Owner</H2>
      <Image
        sx={{
          width: '100px',
          height: '100px',
          margin: 'auto',
        }}
        mt={4}
        src={owner.avatarUrl}
        alt="Owner"
      />
      <ul>
        <DetailItem> Login: <Detail>{owner.login}</Detail> </DetailItem>
        {owner.description && <DetailItem>Description: <Detail>{owner.description}</Detail></DetailItem>}
      </ul>
    </Box>
    <Box>
      <H2 secondary>Repository</H2>
      <ul>
        <DetailItem> Name: <Detail>{name}</Detail> </DetailItem>
        <DetailItem>Stars: <Detail>{stargazers.totalCount}</Detail></DetailItem>
        {primaryLanguage && <DetailItem>Primary language: <Detail>{primaryLanguage.name}</Detail></DetailItem>}
      </ul>
    </Box>
  </>
}

export default DetailComponent;
