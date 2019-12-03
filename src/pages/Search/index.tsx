import React from 'react'
import { useFormState } from 'react-use-form-state';
import { RouteComponentProps } from "react-router-dom";

import useGithub from 'hooks/useGithub';

import { PrimaryButton, ButtonContainer } from 'styles/buttons';
import { InputRow, Input, Label } from 'styles/form';
import { H2 } from 'styles/typo';
import { RESULTS_URL } from 'consts/urls'

const Search: React.FC<RouteComponentProps> = ({ history, match }): JSX.Element => {
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
