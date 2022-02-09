import { useEffect } from 'react';
import ProductsList from '../components/ProductsList';
import LoadingSpinner from '../components/LoadingSpinner';
import Hero from '../components/Header/Hero';
import MetaData from '../components/MetaData';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions';

function MainPage() {
    // const [products, setProducts] = useState([]);
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => console.error(err));
        // console.log(response.data);
        dispatch(setProducts(response.data));
    };

    if (products) {
        return (
            <>
                <MetaData title={'Best Online Shop For Developers'} />
                <div className="container my-3 rounded">
                    <Hero />
                    <ProductsList products={products} />
                </div>
            </>
        );
    }

    return <LoadingSpinner />;
}

export default MainPage;
