const initialState = {
    pizzas: {},
    totalCount: 0,
    totalPrice: 0
}

const carts = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TOTAL_PRICE":
            return {
                ...state,
                totalPrice: action.payload
            }
        case "SET_TOTAL_COUNT":
            return {
                ...state,
                totalCount: action.payload
            }
        case "ADD_PIZZA": {
            const pizzasObj = {
                ...state.pizzas,
                [action.payload.id]: state.pizzas[action.payload.id] ?
                    [...state.pizzas[action.payload.id], action.payload] : [action.payload]
            }

            return {
                ...state,
                pizzas: pizzasObj,
                totalCount: [].concat.apply([], Object.values(pizzasObj)).length,
                totalPrice: [].concat.apply([], Object.values(pizzasObj)).reduce((sum, pizza) => pizza.price + sum, 0)
            }
        }
        default:
            return state;
    }
}

export default carts;
