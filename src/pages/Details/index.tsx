import React from 'react'
import { Link } from 'react-router-dom';

import { H2 } from 'styles/typo';
import { IconBack } from 'styles/icons';

import ArrowIcon from 'assets/arrow.svg';
import { RESULTS_URL } from 'consts/urls';

const Detail = (): JSX.Element => {
  return <>
    <H2 centered>
      Repo Detail
      <Link to={RESULTS_URL}><IconBack src={ArrowIcon} alt="Back" /></Link>
    </H2>
    <p>elo</p>
  </>
}

export default Detail;
