import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const OrderContext = createContext()

function OrderProvider ({ children }) {
  const [pizzas, addPizza] = useState([])

  function addPizzaToOrder (pizza) {
    addPizza(pizzas => pizzas.concat(pizza))
  }

  return (
    <OrderContext.Provider value={{
      order: {
        pizzas
      },
      addPizzaToOrder
    }}>
      {children}
    </OrderContext.Provider>
  )
}

OrderProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { OrderContext, OrderProvider }
