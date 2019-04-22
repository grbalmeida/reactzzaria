import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends PureComponent {
  state = { hasError: false }

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  componentDidCatch (error, info) {
    console.log('Error: ', error)
    console.log('Info: ', info)
  }

  render () {
    if (this.state.hasError) {
      return <h1>An error has occurred!</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
