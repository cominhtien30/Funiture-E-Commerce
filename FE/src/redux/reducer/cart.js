// import data from "../data"
const initialState = JSON.parse(localStorage.getItem('cart')) || []
var myReducer = (state = initialState, action) => {
    const { product, id, quantity } = action
    //bien nay kiem tra item in cart  (addCart)
    var checkItemCart =
        product && state.findIndex((item) => item.id === product.id)
    // lay vi tri cua item trong array cart (deleteCart)
    var index = id && state.findIndex((pro) => pro.id === id)
    switch (action.type) {
        case 'ADD_TO_CART':
            // if find item , will update quantity
            if (checkItemCart !== -1) {
                state[checkItemCart].quantity += 1
            } else {
                // if find not item , will add new item
                state.push({ ...product, quantity: 1 })
            }
            localStorage.setItem('cart', JSON.stringify([...state]))
            return [...state]
        case 'DELETE_TO_ITEM_CART':
            if (index !== -1) {
                state.splice(index, 1)
                localStorage.setItem(
                    'cart',
                    JSON.stringify([...state]),
                )
            }
            return [...state]
        case 'UPDATE_TO_ITEM_CART':
            if (index !== -1) {
                state[index].quantity = quantity
                localStorage.setItem(
                    'cart',
                    JSON.stringify([...state]),
                )
            }
            return [...state]
        case 'CLEAR_CART':
            localStorage.setItem('cart', JSON.stringify([]))
            return []
        default:
            return state
    }
}

export default myReducer
