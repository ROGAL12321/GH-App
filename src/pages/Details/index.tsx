import React from 'react'
import { Link } from 'react-router-dom';

import { H2, H3 } from 'styles/typo';
import { Icon, IconBack } from 'styles/icons';

import ArrowIcon from 'assets/arrow.svg';
import { RESULTS_URL, SEARCH_URL } from 'consts/urls';

import { useQuery } from '@apollo/react-hooks';
import { REPOSITORY_INFO } from 'queries'

const Detail = ({ history, match }): JSX.Element | null => {
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

  if (loading) return null

  const { repository } = data;

  return <>
    <H2 centered>
      Repo Detail
      <Link to={RESULTS_URL}><IconBack src={ArrowIcon} alt="Back" /></Link>
    </H2>
    <div>
      <H3>Owner</H3>
      <Icon src={repository.owner.avatarUrl} alt="Owner"/>
      <p>{repository.owner.login} </p>
      <p>{repository.owner.description} </p>

    </div>
    <div>
      <H3>Repo</H3>
      <p>{repository.name}</p>
      <p>{repository.stargazers.totalCount}</p>
      <p>{repository.primaryLanguage && repository.primaryLanguage.name}</p>
    </div>
  </>
}

export default Detail;
