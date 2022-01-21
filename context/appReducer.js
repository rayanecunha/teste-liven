import { CART_PRODUCTS } from "./types"

const fns = {
    [CART_PRODUCTS]: (cartProducts, state) => {
        return { ...state, cartProducts}
    }
}

export default(state, action) => (fns[action.type] || (() => state))(action.payload, state)