import React, { useEffect, useState } from "react";
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBRadio,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBCardHeader,
    MDBBtn,
} from "mdb-react-ui-kit";

function CheckOutPage() {
    const [cartProducts, setCartProducts] = useState([]);

    let cartTotal = 0;

    useEffect(() => {
        getCartProducts();
    }, []);

    async function getCartProducts() {
        await fetch(`https://fakestoreapi.com/products?limit=3`)
            .then((res) => res.json())
            .then((json) => setCartProducts(json));
    }

    // Create our number formatter.
    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return (
        <div className="container p-3 bg-white my-4 rounded-5">
            <div className="row m-3">
                <h1 className="my-3 text-center">Checkout</h1>
                {/* FORM PAYMENT */}
                <div className="col col-lg-7 p-3">
                    <form>
                        <MDBRow className="mb-4">
                            <MDBCol>
                                <MDBInput id="firstName" label="First name" />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput id="lastName" label="Last name" />
                            </MDBCol>
                        </MDBRow>
                        <MDBInput
                            wrapperClass="mb-4"
                            type="email"
                            id="form6Example5"
                            label="Email"
                        />
                        <MDBInput
                            wrapperClass="mb-4"
                            id="address1"
                            label="Address 1"
                        />
                        <MDBInput
                            wrapperClass="mb-4"
                            id="address2"
                            label="Address 2"
                        />
                        <MDBInput
                            wrapperClass="mb-4"
                            type="tel"
                            id="form6Example6"
                            label="Phone"
                        />
                        <MDBRow className="mb-4">
                            <MDBCol>
                                <MDBInput id="State" label="State" />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput id="zipCode" label="Zip" />
                            </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="sameAddress"
                            label="Shipping address is the same as my billing address"
                            defaultChecked
                        />
                        <MDBCheckbox
                            name="flexCheck"
                            value=""
                            id="saveIfo"
                            label="Save this information for next time"
                        />
                        <hr />

                        <MDBRadio
                            name="cardType"
                            id="cardCredit"
                            label="Credit card"
                            defaultChecked
                        />
                        <MDBRadio
                            name="flexRadioDefault"
                            id="cardDebit"
                            label="Debit Card"
                        />

                        <MDBRow className="my-4">
                            <MDBCol>
                                <label htmlFor="cardName">Name on card</label>
                                <MDBInput id="cardName" label="" />
                                <small className="text-muted">
                                    Full name as displayed on card
                                </small>
                            </MDBCol>
                            <MDBCol>
                                <label htmlFor="cardNumber">
                                    Credit card number
                                </label>
                                <MDBInput id="cardNumber" label="" />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="my-4">
                            <MDBCol>
                                <label htmlFor="cc-expiration">
                                    Exipration
                                </label>
                                <MDBInput id="cc-expiration" label="" />
                            </MDBCol>
                            <MDBCol>
                                <label htmlFor="cc-cvv">CVV</label>
                                <MDBInput id="cc-cvv" label="" />
                            </MDBCol>
                        </MDBRow>

                        <MDBBtn className="my-4 py-3" type="submit" block>
                            CONTINUE TO CHECKOUT
                        </MDBBtn>
                    </form>
                </div>

                {/* Right Column: CART Details */}
                <div className="col-lg-5 p-3">
                    <MDBCard className="bg-light">
                        <MDBCardHeader className="bg-dark text-white text-center">
                            <MDBCardTitle className="fs-4 text-uppercase pt-2">
                                Your cart
                            </MDBCardTitle>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <MDBTable>
                                <MDBTableHead>
                                    <tr>
                                        <th scope="col" colSpan={2}>
                                            Item
                                        </th>
                                        <th scope="col" className="text-end">
                                            Price
                                        </th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {cartProducts.map((e) => {
                                        cartTotal += e.price;
                                        return (
                                            <tr key={e.key}>
                                                <td>
                                                    <img
                                                        src={e.image}
                                                        className="img-thumbnail"
                                                        alt={e.title}
                                                        style={{
                                                            maxWidth: "3rem",
                                                        }}
                                                    />
                                                </td>
                                                <td>{e.title}</td>
                                                <td className="text-end fw-bold">
                                                    {formatter.format(e.price)}
                                                </td>
                                            </tr>
                                        );
                                    })}

                                    <tr className="fw-bold fs-4 table-success">
                                        <th colSpan={2}>Total</th>
                                        <td className="text-end">
                                            {formatter.format(cartTotal)}
                                        </td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        </div>
    );
}

export default CheckOutPage;
