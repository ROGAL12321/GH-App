import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

const LoaderWrapper = styled.div`
  text-align: center;
`

const LoaderComponent = () => (
  <LoaderWrapper>
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  </LoaderWrapper>

)

export default LoaderComponent
