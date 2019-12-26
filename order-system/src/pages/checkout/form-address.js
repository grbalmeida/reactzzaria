import React from 'react'
import { Grid } from '@material-ui/core'
import TextField from './text-field'

function FormAddress () {
  return (
    <Grid container spacing={2}>
      <TextField label='Zip code' xs={4} autoFocus />
      <Grid item xs={8} />

      <TextField label='Street' xs={9} />
      <TextField label='Number' xs={3} />
      <TextField label='Complement' xs={12} />
      <TextField label='City' xs={9} />
      <TextField label='State' xs={3} />
    </Grid>
  )
}

export default FormAddress
