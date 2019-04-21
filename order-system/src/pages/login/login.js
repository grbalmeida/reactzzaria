import React, { Fragment } from 'react'
import { Button } from '@material-ui/core'
import { ReactComponent as Logo } from './logo.svg'

const Login = () => (
  <Fragment>
    <Logo />
    <Button>Log in with GitHub</Button>
  </Fragment>
)

export default Login
