import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductsList from "../components/ProductsList";

function CategoryPage() {
    const [productsByCat, setProducts] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const { catName } = useParams();

    async function getData() {
        const response = await fetch(
            `https://fakestoreapi.com/products/category/${catName}`,
        );
        const data = await response.json();
        setProducts(data);
    }

    return <ProductsList products={productsByCat} />;
}

export default CategoryPage;
