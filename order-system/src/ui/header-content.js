import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

const HeaderContent = ({ children }) => (
  <Grid container direction='column' alignItems='center'>
    {children}
  </Grid>
)

HeaderContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default HeaderContent
