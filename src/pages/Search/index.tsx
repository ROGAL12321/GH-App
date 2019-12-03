import React from 'react'
// import axios from 'axios'
// import { get, post } from 'helpers/http'
import { useFormState } from 'react-use-form-state';
import { RouteComponentProps } from "react-router-dom";

import useGithub from 'hooks/useGithub';

import { PrimaryButton, ButtonContainer } from 'styles/buttons';
import { InputRow, Input, Label } from 'styles/form';
import { H2 } from 'styles/typo';
import { RESULTS_URL } from 'consts/urls'

  // useEffect(() => {
  //   if(!window.location.href) {
  //     return;
  //   }

  //   const x = window.location.href.indexOf("=")
  //   const code = window.location.href.slice(x + 1, -2)

  //   axios({
  //     method: 'post',
  //     url: 'https://github.com/login/oauth/access_token',
  //     withCredentials: true,
  //     data: {
  //       client_id: CLIENT_ID,
  //       client_secret: CLIENT_SECRET,
  //       code
  //     }
  //   });

  // })

  /* <a
      href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user`}
    >
    <PrimaryButton> Login </PrimaryButton>
  </a> */

// const CLIENT_ID = "20087ac7fea9318a063f";
// const CLIENT_SECRET = "8cecfe26289843f4c8551aa78f38645673078df3"

const Search: React.FC<RouteComponentProps> = ({ history }): JSX.Element => {
  const { search } = useGithub();
  const [formState, { text }] = useFormState();

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    search(formState.values.query).then(() => history.push(RESULTS_URL))
  }

  return (
    <>
      <H2> Github Search </H2>
        <form onSubmit={onSubmit}>
          <InputRow>
            <Label> Repo name </Label>
            <Input {...text('query')} required />
          </InputRow>
          <ButtonContainer>
            <PrimaryButton type="submit"> Search </PrimaryButton>
          </ButtonContainer>
      </form>
    </>
  )
}

export default Search
