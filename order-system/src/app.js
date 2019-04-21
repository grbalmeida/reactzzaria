import React, { lazy, useContext, useEffect, Suspense } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import firebase from 'services/firebase'
import { AuthContext } from 'contexts/auth'

const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

function App ({ location }) {
  const { userInfo, setUserInfo } = useContext(AuthContext)
  const { isUserLoggedIn } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user,
        userInfo,
        setUserInfo
      })
    })
  }, [])

  if (isUserLoggedIn) {
    if (location.pathname === '/login') {
      return <Redirect to='/' />
    }
  } else {
    if (location.pathname !== '/login') {
      return <Redirect to='/login' />
    }
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.propTypes = {
  location: PropTypes.object.isRequired
}

export default App
