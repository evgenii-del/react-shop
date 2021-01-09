export const addPizzaToCart = pizza => ({
    type: "ADD_PIZZA",
    payload: pizza
})

export const removePizzaFromCart = pizzaId => ({
    type: "REMOVE_PIZZA",
    payload: pizzaId
})

export const clearCart = () => ({
    type: "CLEAR_CART"
})

export const increasePizzaItem = id => ({
    type: "INCREASE_PIZZA",
    payload: id
})

export const decreasePizzaItem = id => ({
    type: "DECREASE_PIZZA",
    payload: id
})
