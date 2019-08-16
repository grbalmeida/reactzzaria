import React, { createContext } from 'react'
import PropTypes from 'prop-types'

const OrderContext = createContext()

function OrderProvider ({ children }) {
  return (
    <OrderContext.Provider value={{}}>
      {children}
    </OrderContext.Provider>
  )
}

OrderProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { OrderContext, OrderProvider }
