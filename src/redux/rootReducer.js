const initialState = {
    products: [],
    selectedProduct: {}
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'products/setProducts':
            return {
                ...state,
                products: action.payload
            };
        case 'product/setSelected':
            return {
                ...state,
                selectedProduct: action.payload
            };
        default:
            return state;
    }
};
