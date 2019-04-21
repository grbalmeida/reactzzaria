import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  Fragment
} from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'
import firebase from 'services/firebase'
import { AuthContext } from 'contexts/auth'
import { ReactComponent as MainLogo } from './logo.svg'

function Login () {
  const { login } = useContext(AuthContext)

  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      console.log('Logged out!')
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      })
    })
  }, [])

  const { isUserLoggedIn, user } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  return (
    <Container>
      <Grid container justify='center' spacing={40}>
        <Grid item>
          <Logo />
        </Grid>
        <Grid item xs={12} container justify='center'>
          {isUserLoggedIn && (
            <Fragment>
              <pre>{JSON.stringify(user.displayName, null, 2)}</pre>
              <Button variant='contained' onClick={logout}>Sair</Button>
            </Fragment>
          )}
          {!isUserLoggedIn && (
            <GitHubButton onClick={login}>Log in with GitHub</GitHubButton>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
`

const Logo = styled(MainLogo)`
  width: 100%;
`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: 25px;
    padding: 15px;
    max-width: 480px;
    text-transform: none;
  }
`

export default Login
