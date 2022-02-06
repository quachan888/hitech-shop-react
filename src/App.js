import './App.css';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import Header from './components/Header/Header';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckOutPage from './pages/CheckOutPage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import SearchPage from './pages/SearchPage';

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

function App() {
    return (
        <BrowserRouter>
            <div className="App d-flex flex-column min-vh-100">
                <Header />

                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/cat/:catName" component={CategoryPage} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/product/:productId" component={ProductDetailPage} />
                    <Route exact path="/checkout" component={CheckOutPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Redirect to="/" />
                </Switch>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
