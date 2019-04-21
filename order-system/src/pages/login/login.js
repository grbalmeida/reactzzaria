import React, { PureComponent } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo.svg'

const config = {
  apiKey: 'AIzaSyBcuMSnGu8jG2lKt3TQl49HmLCqqwq_ZjM',
  authDomain: 'reactzzaria-f6477.firebaseapp.com',
  databaseURL: 'https://reactzzaria-f6477.firebaseio.com',
  projectId: 'reactzzaria-f6477',
  storageBucket: 'reactzzaria-f6477.appspot.com',
  messagingSenderId: '31143120973'
}

firebase.initializeApp(config)

const handleAuthentication = () => {
  const provider = new firebase.auth.GithubAuthProvider()
  firebase.auth().signInWithRedirect(provider)
}

class Login extends PureComponent {
  componentDidMount () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('User logged in: ', user)
      } else {
        console.log('User is offline: ', user)
      }
    })
  }

  render () {
    return (
      <Container>
        <Grid container justify='center' spacing={40}>
          <Grid item>
            <Logo />
          </Grid>
          <Grid item xs={12} container justify='center'>
            <GitHubButton onClick={handleAuthentication}>Log in with GitHub</GitHubButton>
          </Grid>
        </Grid>
      </Container>
    )
  }
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
