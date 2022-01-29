import React from "react";

import ProductsList from "../components/ProductsList";

function MainPage(props) {
    return <ProductsList products={props.products} />;
}

export default MainPage;
