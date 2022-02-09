import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import MetaData from '../components/MetaData';
import ProductsList from '../components/ProductsList';

function CategoryPage() {
    const [productsByCat, setProductsByCat] = useState([]);
    const { catName } = useParams();
    const catTitle = catName[0].toUpperCase() + catName.slice(1);

    const fetchProductsByCategory = async (catID) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/category/${catID}`)
            .catch((err) => console.error(err));
        console.log(response.data);
        setProductsByCat(response.data);
    };

    useEffect(() => {
        fetchProductsByCategory(catName);
    }, []);

    if (productsByCat) {
        return (
            <div className="container my-3 rounded">
                <MetaData title={catTitle} />
                {/* <div className="container my-3 bg-light p-3 rounded"></div> */}
                <ProductsList products={productsByCat} />
            </div>
        );
    }

    return <LoadingSpinner />;
}

export default CategoryPage;
