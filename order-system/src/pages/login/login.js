import React from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'

import { useAuth } from 'hooks'
import { ReactComponent as MainLogo } from 'images/logo.svg'

function Login () {
  const { login } = useAuth()

  return (
    <Container>
      <Grid container justify='center' spacing={5}>
        <Grid item>
          <Logo />
        </Grid>
        <Grid item xs={12} container justify='center'>
          <GitHubButton onClick={login}>Log in with GitHub</GitHubButton>
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(3)}px;
`

const Logo = styled(MainLogo)`
  width: 100%;
`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: ${({ theme }) => theme.typography.h5.fontSize};
    padding: ${({ theme }) => theme.spacing(2)}px;
    max-width: 480px;
    text-transform: none;
  }
`

export default Login
