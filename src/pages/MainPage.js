import { useEffect, useState } from "react";

import ProductsList from "../components/ProductsList";

function MainPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
    }

    return <ProductsList products={products} />;
}

export default MainPage;
