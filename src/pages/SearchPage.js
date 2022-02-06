import { useEffect, useState } from 'react';
import ProductsList from '../components/ProductsList';
import MetaData from '../components/MetaData';
import { useParams } from 'react-router-dom';

function SearchPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const searchInput = queryParams.get('search_query');

        // Fetch all products data from FakeStoreAPI
        const getData = async () => {
            const data = await fetch('https://fakestoreapi.com/products');
            const json = await data.json();
            const searchResult = json.filter((product) => product.title.toLowerCase().includes(searchInput));
            setProducts(searchResult);
        };
        getData().catch(console.error);
    }, []);

    if (products.length > 0) {
        return (
            <>
                <MetaData title={'Best Online Shop For Developers'} />
                <div className="container my-3 rounded">
                    <ProductsList products={products} />
                </div>
            </>
        );
    }

    return (
        <div className="container bg-white  text-center text-uppercase text-danger p-5">
            <h1>No search result!</h1>
        </div>
    );
}

export default SearchPage;
