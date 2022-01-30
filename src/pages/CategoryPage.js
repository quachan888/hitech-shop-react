import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import ProductsList from "../components/ProductsList";

function CategoryPage() {
    const [productsByCat, setProducts] = useState([]);

    useEffect(() => {
        getData();
    }, [productsByCat]);

    const { catName } = useParams();

    async function getData() {
        const response = await fetch(
            `https://fakestoreapi.com/products/category/${catName}`,
        );
        const data = await response.json();
        setProducts(data);
    }

    if (productsByCat) {
        return (
            <div className="container my-5">
                <ProductsList products={productsByCat} />
            </div>
        );
    }

    return <LoadingSpinner />;
}

export default CategoryPage;
