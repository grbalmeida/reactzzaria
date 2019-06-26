import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  withStyles
} from '@material-ui/core'
import styled from 'styled-components'

import Header from './header'

const ChoosePizzaSize = React.lazy(() => import('pages/choose-pizza-size'))
const ChoosePizzaFlavours = React.lazy(() => import('pages/choose-pizza-flavours'))

const Main = () => (
  <>
    <Header />
    <Spacer />
    <Content>
      <Suspense fallback='Loading...'>
        <Switch>
          <Route path='/' exact component={ChoosePizzaSize} />
          <Route path='/choose-pizza-flavours' component={ChoosePizzaFlavours} />
        </Switch>
      </Suspense>
    </Content>
  </>
)

const Content = styled.main`
  padding: 20px;
`
const style = (theme) => ({
  main: theme.mixins.toolbar
})

const SpacerWrapper = ({ classes }) => (
  <div className={classes.main} />
)

SpacerWrapper.propTypes = {
  classes: PropTypes.object
}

const Spacer = withStyles(style)(SpacerWrapper)

export default Main
