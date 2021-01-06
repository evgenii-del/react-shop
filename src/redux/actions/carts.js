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
