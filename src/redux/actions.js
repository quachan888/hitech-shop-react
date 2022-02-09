export const setProducts = (products) => {
    return {
        type: 'products/setProducts',
        payload: products
    };
};

export const setSelectedProduct = (product) => {
    return {
        type: 'product/setSelected',
        payload: product
    };
};
