const initialState = {
    pizzas: {},
    totalCount: 0,
    totalPrice: 0
}

const getTotalPrice = arr => {
    return arr.reduce((sum, pizza) => pizza.price + sum, 0);
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
            const curPizzaItems = state.pizzas[action.payload.id] ?
                [...state.pizzas[action.payload.id].items, action.payload] : [action.payload];

            const pizzasObj = {
                ...state.pizzas,
                [action.payload.id]: {
                    items: curPizzaItems,
                    totalPrice: getTotalPrice(curPizzaItems)
                }
            }

            const items = Object.values(pizzasObj).map(obj => obj.items);
            const allPizzas = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas);

            return {
                ...state,
                pizzas: pizzasObj,
                totalCount: allPizzas.length,
                totalPrice: totalPrice
            }
        }
        case "CLEAR_CART":
            return {
                pizzas: {},
                totalCount: 0,
                totalPrice: 0
            }
        case "REMOVE_PIZZA":
            const newPizzas = {
                ...state.pizzas
            };

            const currentTotalPrice = newPizzas[action.payload].totalPrice;
            const currentTotalCount = newPizzas[action.payload].items.length;
            delete newPizzas[action.payload];

            return {
                ...state,
                pizzas: newPizzas,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            };
        default:
            return state;
    }
}

export default carts;
