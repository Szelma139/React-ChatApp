
const initialState = {
    cartItems: [],
    loading: true,
}


export const ProductListReducer = (state = initialState, action: IAction) => {

    switch (action.type) {
        case "PRODUCT_LIST_REQUEST":
            return { loading: true, products: [] }
        case "PRODUCT_LIST_SUCCESS":
            return {
                loading: false,
                products: action.payload.products,
                pages: action.payload.pages,
                page: action.payload.page,
            }
        case "PRODUCT_LIST_FAIL":
            return { loading: false, error: action.payload }
        default:
            return state
    }
}