import React, { Fragment } from 'react'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as Logo } from './logo.svg'

const Login = () => (
  <Fragment>
    <Grid container>
      <Grid item>
        <Logo />
      </Grid>
      <Grid item>
        <Button>Log in with GitHub</Button>
      </Grid>
    </Grid>
  </Fragment>
)

export default Login
